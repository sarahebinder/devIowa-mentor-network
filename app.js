var http = require('http');
// First install to your project
var swig = require('swig');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

var tpl = swig.compileFile('Views/index.swig');
app.get('/', function(req, res){
	console.log(req.query.fullname);
	res.send(tpl({
		title:'100+ mentors to help grow your ideas',
		pageTitle:'The Midwest"s premiere startup mentor network', 
		pageSlug:'Coming soon!'
	}));
});

var thanksTpl = swig.compileFile('Views/thankyou.swig');
app.get('/thankyou', function(req, res){
	res.send(thanksTpl({
		title: 'form submission.',
		pageTitle: 'You da best.',
		pageSlug: 'Thanks!',
		fullName: req.query.fullName, 
		email: req.query.email,
		how: req.query.how,
		message: req.query.message

	}));
});

app.use(express.static('public'));

app.listen(3000);
console.log('server started up, listening on port 3000')