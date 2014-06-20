var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./app/models/user');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var database = require('./config/database');
var mongoose = require('mongoose');
var routes = require('./app/routes')

mongoose.connect(database.url);
mongoose.connection.on('open', function() {
  console.log("Connected to Mongoose...");
  // seeder.check();
});

var app = express();

app.set('views', path.join(__dirname, 'app/views'));
// app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
// app.use(require('node-compass')({mode: 'expanded'}));
app.use('/', express.static(path.join(__dirname, 'public')));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port);
console.log("App started on port " + port);
