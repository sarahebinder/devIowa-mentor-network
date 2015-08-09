module.exports = function (app) {
	//admin login page - this is not working??
	app.get('/admin', function(req, res){
		res.render('admin', {
			title: 'data entry',
			pageTitle: 'ADMIN AREA: Enter data here',
			pageSlug: 'post that data!'
		});
	});

	app.get('/data', function(req, res){
		//query from the database
		var temp = {something: "something"};
		//respond with json data
		res.json(temp);
	});	

// // THIS IS BROKEN
// // validate a password from a file
// var loginInfo = fs.readFileSync('admins.txt', {encoding: 'utf-8'});
// 	//console.log(loginInfo);
// 	var extendedPassword = loginInfo.match(/pw: .*\n/g);
// 	var storedPassword = extendedPassword.slice(3);
// 	console.log('the stored password is' + storedPassword);
// 	if (loginInfo)
// 	{
// 		req.sessionsCookie.password = req.body.password;
// 	}
// 	if (req.sessionsCookie.password)
// 	{
// 		req.sessionsCookie.password = storedPassword;
// 		console.log('successfully logged in');
// 		res.redirect('/')
// 	} 
// 	else
// 	{
// 		//console.log('incorrect password!');
// 	}
// });
	
}