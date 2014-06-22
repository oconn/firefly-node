var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    User = require('./app/models/user'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    database = require('./config/database'),
    mongoose = require('mongoose'),
    bcrypt = require("bcrypt"),
    csrf = require('csurf'),
    session = require('express-session'),
    // seeder = require('./config/seed'),
    routes = require('./app/routes');

// Connect to mongodb and run the seed file
mongoose.connect(database.url);
mongoose.connection.on('open', function() {
  console.log("Connected to Mongoose...");
  // seeder.check();
});

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


app.use(session({
  secret: "secret", 
  cookie: {secure: false}
}));

// Initialize Routes
routes(app);

module.exports = app;