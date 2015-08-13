var db = require('../db');

module.exports = function (app) {
	//admin login page - this is not working??
	app.get('/admin', function(req, res){
		res.render('admin', {
			title: 'data entry',
			pageTitle: 'ADMIN AREA: Enter data here',
			pageSlug: 'post that data!'
		});
		console.log(req.query.username + "\n" + req.query.email + "\n" + req.query.mentor_type + "\n" + req.query.skills);

	});
	//display the database on /data
	app.get('/data', function(req, res){
		db.all('SELECT username, mentor_type FROM users', function(err, rows){
			//build an object here - keys are mentor types, values are an array
			//easy way to do grouping without knowing all the info ahead of time
			var groups = {}; //add an error handler here
			var ret = {nodes: [], links: []};
				for (x = 0; x < rows.length; x++)
				{
					var row = rows[x]; // we are adding mentors into the appropriate groups
					if (!groups[row.mentor_type]) groups[row.mentor_type] = (Object.keys(groups).length+1); //if the mentor type doesn't exist, add it
					
					//add a node
					var node = {name: row.username, group: groups[row.mentor_type]};
					ret['nodes'].push(node);
				}

					//now get skills
					
					// we can nest a select inside a select
					// db.all('SELECT skill_name FROM skills', function(err, rows){
					// 	var skillsGroup = (Object.keys(groups).length + 1);
					// 	var sills = {};	

					// 	for (x = 0; x < rows.length; x++)
					// 	{
					// 		var node = {name: rows[x].skill_name, skill: true, group: skillsGroup};
					// 		ret.nodes.push(node);
					// 	};
					// 	res.json(ret);
					// });

					console.log(groups);
					console.log(ret);
					//display the json on /data
					res.json(ret);
		});
	});
	

 //    // Example INSERT - THIS IS BROKEN - put it inside of a route callback?
	// db.run("INSERT INTO users (username, email, mentor type, twitter id, linkedin id, image filename) VALUES (" + req.query.username + ", " + req.query.email + ", " + req.query.mentor_type + ", " + req.query.skills + ", " + req.query.twitter + ", " + req.query.linkedin + ", " + req.query.headshot + ");");


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