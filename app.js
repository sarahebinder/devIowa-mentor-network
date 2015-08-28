var http = require('http');
// First install to your project
var swig = require('swig');
var bodyParser = require('body-parser');
var cs = require('client-sessions');
var express = require('express');
var fs = require('fs');
var home = require('./Controllers/home');
var userDisplay = require('./Controllers/usersPage'); //this is the one that talks to the database
var dataController = require('./Controllers/data');

var config = require('./config');
var db = require('./db')(config);

// Setup the Express Server
var app = express();
app.locals.db = db;
app.locals.config = config;

// Adding Swig as a Templating Engine
app.engine('swig', swig.renderFile);
app.set('views', './Views');
app.set('view engine', 'swig');

//bodyParser to use POST instead of get
app.use(bodyParser.urlencoded({extended:false}));

//configure client sessions
app.use(cs({
	cookieName: 'sessionsCookie',
	secret: 'supersecretkeywordhere', 
	duration: 60*60*1000,
	activeDuration: 60*60*1000,
}));


//call modules
userDisplay(app);
home(app);
dataController(app);

app.use(express.static('public'));

app.listen(config.port, config.ip);
console.log(config.name + ' started up [ip:' + config.ip + ', port:' + config.port + 
  ', data_dir: "' + config.data_dir + '"]');

