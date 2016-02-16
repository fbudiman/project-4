var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./config/routes');
mongoose.connect('mongodb://localhost/petsy')
// var path = require('path');

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/', routes);

app.listen(3000)
console.log("Starting...");
