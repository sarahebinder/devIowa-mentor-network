var http = require('http');
// First install to your project
var swig = require('swig');
var bodyParser = require('body-parser');
var cs = require('client-sessions');
var express = require('express');

var app = express();
//var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended:false}));

//configure client sessions
app.use(cs({
	cookieName: 'testSessions',
	secret: 'supersecretkeywordhere', 
	duration: 60*60*1000,
	activeDuration: 60*60*1000,
}));

//homepage template
var tpl = swig.compileFile('Views/index.swig');
app.get('/', function(req, res){
	console.log(req.query.fullname);
	res.send(tpl({
		title:'100+ mentors to help grow your ideas',
		pageTitle:'The Midwest\'s premiere startup mentor network', 
		pageSlug:'Coming soon!'
	}));
});

//reads form data and redirects
app.post('/login', function(req, res){
	if (req.body.fullName)
	{
		req.testSessions.fullName = req.body.fullName;
		req.testSessions.email = req.body.email;
		req.testSessions.how = req.body.how;
		req.testSessions.message = req.body.message;
	}
	res.redirect('/thankyou');
});

var thanksTpl = swig.compileFile('Views/thankyou.swig');
app.get('/thankyou', function(req, res){
	res.send(thanksTpl({
		title: 'form submission.',
		pageTitle: 'You da best.',
		pageSlug: 'Thanks!',
		fullName: req.testSessions.fullName, 
		email: req.testSessions.email,
		how: req.testSessions.how,
		message: req.testSessions.message
	}));
});

app.use(express.static('public'));

app.listen(3000);
console.log('server started up, listening on port 3000')