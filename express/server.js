var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./config/routes');

//TOKEN BASED AUTHENTICATION - WEB TOKENS - MAY NOT BE NEEDED HERE?
var jwt = require('jsonwebtoken');
var superSecret = 'ilovescotchscotchyscotchscotch';

// configuring our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/petsy')
// var path = require('path');

app.use(logger('dev'))
app.use(cors())

app.use('/', routes);

app.listen(3000)
console.log("Starting...");
