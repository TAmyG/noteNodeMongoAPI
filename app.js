// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var path           = require('path');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set our port
var port = process.env.PORT || 3000;

// set up mongoose, assume locally installed
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/RESTServer');

// set the static files location for our Ember application
app.use(express.static(__dirname + '/public'));

//bodyParser Middleware to allow different encoding requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});


//Routes API
var router = express.Router();
app.use('/', router);
require('./app/routes')(router); // configure our routes

// startup our app at http://localhost:3000
app.listen(port, function(){
  console.log('Server running on port 3000');
});


// expose app
exports = module.exports = app;
