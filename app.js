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

//store form info
var visits = [];

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

	// //display the users database (as JSON)
	// app.get("/users", function(req, res){
	// 	db.all("SELECT * FROM users, skills WHERE users.id = skills.user_id", function (err, rows){
	// 		if (!err)
	// 		{	
	// 			res.json(rows);
	// 		}
	// 		else {
	// 			//on error, send nothing
	// 			console.log("an error occured getting all users" + err);
	// 			res.json({"error": err});
	// 		}
	// 	});
	// });

	//homepage template
// var tpl = swig.compileFile('Views/index.swig');
// 	app.get('/', function(req, res){
// 		res.send(tpl({
// 			title:'100+ mentors to help grow your ideas',
// 			pageTitle:'The Midwest\'s premiere startup mentor network', 
// 			pageSlug:'Coming soon!'
// 		}));
// 	});

//reads user form data from homepage, writes to file and redirects
app.post('/login', function(req, res){
	var visitString = '';
	if (req.body.fullName)
	{
		req.sessionsCookie.fullName = req.body.fullName;
		req.sessionsCookie.email = req.body.email;
		req.sessionsCookie.how = req.body.how;
		req.sessionsCookie.message = req.body.message;
		visits.push(req.body.fullName + '\n' + req.body.email + '\n' + req.body.how + '\n' + req.body.message +'\n' + new Date());
		console.log(visits);
		//write this info to a file
		visitString = visits[visits.length-1];
			fs.appendFile('visits.txt', visitString + '\n', function(err){
    		console.log('The visits.txt file was updated');
  		});
	}
	res.redirect('/thankyou');
});

//Thank you template - on form submission
// var thanksTpl = swig.compileFile('Views/thankyou.swig');
// app.get('/thankyou', function(req, res){
// 	res.send(thanksTpl({
// 		title: 'form submission.',
// 		pageTitle: 'You da best.',
// 		pageSlug: 'Thanks!',
// 		fullName: req.sessionsCookie.fullName, 
// 		email: req.sessionsCookie.email,
// 		how: req.sessionsCookie.how,
// 		message: req.sessionsCookie.message
// 	}));
// });

// app.get('/thankyou', function (req, res){
// 	res.render('thankyou', {});
// });

//admin area
var adminTpl = swig.compileFile('Views/admin.swig');
app.all('/admin', function(req, res){
	res.send(adminTpl({
		title: 'Admin login',
		pageTitle: 'Log in:',
	}));
// THIS IS BROKEN
// validate a password from a file
var loginInfo = fs.readFileSync('admins.txt', {encoding: 'utf-8'});
	//console.log(loginInfo);
	var extendedPassword = loginInfo.match(/pw: .*\n/g);
	var storedPassword = extendedPassword.slice(3);
	console.log('the stored password is' + storedPassword);
	if (loginInfo)
	{
		req.sessionsCookie.password = req.body.password;
	}
	if (req.sessionsCookie.password)
	{
		req.sessionsCookie.password = storedPassword;
		console.log('successfully logged in');
		res.redirect('/')
	} 
	else
	{
		//console.log('incorrect password!');
	}
});

userDisplay(app);
home(app);

app.use(express.static('public'));

app.listen(3000);
console.log('server started up, listening on port 3000')