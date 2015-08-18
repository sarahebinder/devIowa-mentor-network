// //homepage template and form handling
var fs = require('fs');

module.exports = function (app) {
	app.get('/', function(req, res){
		res.render('index', {
			title:'100+ mentors to help grow your ideas',
			pageTitle:'A network of founders, mentors and experts, visualized', 
			pageSlug:'Meet your match'
		});
	});

	app.get('/thankyou', function(req, res){
		res.render('thankyou', {
			title: 'form submission.',
			pageTitle: 'You da best.',
			pageSlug: 'Thanks!',
			fullName: req.sessionsCookie.fullName, 
			email: req.sessionsCookie.email,
			how: req.sessionsCookie.how,
			message: req.sessionsCookie.message
		});
	});

	app.get('/join', function(req, res){
		res.render('join', {
			title: 'Join the mentor visualization project',
			pageTitle: 'Join the project',
			pageSlug: 'Make this more awesome',
		});
	});

	//reads user form data from homepage, writes to file and redirects
	app.post('/userlogin', function(req, res){
		var visits = [];
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
}