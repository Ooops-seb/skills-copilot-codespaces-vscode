// Create web server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var fs = require('fs');

// Use body parser to parse JSON body
app.use(bodyParser.json());