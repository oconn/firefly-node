var express = require('express'),
    path = require('path'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    User = require('./app/models/user'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    database = require('./config/database'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    // seeder = require('./config/seed'),
    routes = require('./app/routes');


// Connect to mongodb and run the seed file
mongoose.connect(database.url);
mongoose.connection.on('open', function() {
  console.log("Connected to Mongoose...");
  // seeder.check();
});


// Configure passport. User authentication
// and session persistence
require('./config/passport')(passport);


var app = express();


// Set up the view engine
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');


// Middleware
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('node-compass')({mode: 'expanded'}));
app.use('/', express.static(path.join(__dirname, 'public/src')));


// Passport Middleware
app.use(session({
  secret: "secret", 
  cookie: {secure: false}
}));
app.use(passport.initialize()); 
app.use(passport.session()); 


// Initialize Routes
routes(app, passport);


module.exports = app;