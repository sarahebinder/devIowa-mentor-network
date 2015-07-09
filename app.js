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
		title:'Page Title',
		pageTitle:'The Midwest"s premiere startup mentor network'
	}));
});

app.use(express.static('public'));

app.listen(3000);
console.log('server started up, listening on port 3000')