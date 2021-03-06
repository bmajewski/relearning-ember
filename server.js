var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost:27017/rle');

var app = express();

// Sets us up to read body content from POST requests
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Adds request logging
app.use(morgan('dev'));

var userRoutes = require('./server/routes/user')(app, express);
app.use('/api', userRoutes);

// Listen on port 1337
var port = 1337;
app.listen(port);
console.log('Server up and running on port ' + port);
