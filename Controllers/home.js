// //homepage template

module.exports = function (app) {
	app.get('/', function(req, res){
		res.render('index', {
			title:'100+ mentors to help grow your ideas',
			pageTitle:'The Midwest\'s premiere startup mentor network', 
			pageSlug:'Coming soon!'
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
}