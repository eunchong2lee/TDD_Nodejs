var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var user = require('./api/user/index');

var app = express();

if(process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());

app.use('/users', user);

module.exports = app;