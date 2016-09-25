var _ = require("underscore");
var request = require('request');
var querystring = require('querystring');
var Promise = require('promise');
var mongodb = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');
var path = require ('path');
var app = express();
var moment = require('moment');
var common = require('./common')

var MongoClient = mongodb.MongoClient;
var db_url = common.dburl;
var port = common.port;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || port));
app.set('view engine', 'ejs');

app.use("/css", express.static(path.join(__dirname + '/css')));
app.use("/font", express.static(path.join(__dirname + '/font')));
app.use("/js", express.static(path.join(__dirname + '/js')));
app.use("/images", express.static(path.join(__dirname + '/images')));

// app.get('/api', function(req, res) {
// 	var result = {msg: 'Hello World'};
// 	res.json(result);
// });

app.get('/', function(req, res) {
	var result = {msg: 'Hello World Again'};
	res.json(result);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});