var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    User = require('./app/models/user'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    database = require('./config/database'),
    mongoose = require('mongoose'),
    csrf = require('csurf'),
    session = require('express-session'),
    // seeder = require('./config/seed'),
    routes = require('./app/routes'),
    passport = require('passport'),  
    flash = require('connect-flash');

// Connect to mongodb and run the seed file
mongoose.connect(database.url);
mongoose.connection.on('open', function() {
  console.log("Connected to Mongoose...");
  // seeder.check();
});

require('./config/passport')(passport);

var app = express();

// Set up the view engine
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// Middleware
app.use('/', express.static(path.join(__dirname, 'front')));
app.use(favicon());
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({
  secret: "secret", 
  cookie: {secure: false}
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

// Initialize Routes
routes(app, passport);

module.exports = app;