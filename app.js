var http = require('http');
// First install to your project
var swig = require('swig');
var bodyParser = require('body-parser');
var cs = require('client-sessions');
var express = require('express');
var fs = require('fs');
var db = require('./db');
var home = require('./controllers/home');
var userDisplay = require('./controllers/usersPage'); //this is the one that talks to the database
var dataController = require('./controllers/data');

//starts the node app
var app = express();

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

app.listen(3000);
console.log('server started up, listening on port 3000')