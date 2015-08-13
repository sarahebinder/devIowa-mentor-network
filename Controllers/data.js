var db = require('../db');

module.exports = function (app) {
	//admin login page 
	app.get('/admin', function(req, res){
		res.render('admin', {
			title: 'data entry',
			pageTitle: 'ADMIN AREA: Enter data here',
			pageSlug: 'post that data!'
		});
		//console log the input
		//console.log(req.query.username + "\n" + req.query.email + "\n" + req.query.mentor_type + "\n" + req.query.skills);
		//Is this the right place to put the INSERT?
		var sqlInsert = 'INSERT INTO users (username, email, mentor_type, bio, twitter_id, linkedin_id, image_filename)';
			sqlInsert += 'VALUES (?, ?, ?, ?, ?, ?, ?)';
			db.run("sqlInsert, req.query.username, req.query.email, req.query.mentor_type, req.query.bio, req.query.twitter_id, req.query.linkedin_id, req.query.image_filename")

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
					
					//we can nest a select inside a select
					db.all('SELECT skill_name FROM skills', function(err, rows){
						var skillsGroup = (Object.keys(groups).length + 1);
						var sills = {};	

						for (x = 0; x < rows.length; x++)
						{
							var node = {name: rows[x].skill_name, skill: true, group: skillsGroup};
							ret.nodes.push(node);
						};
						res.json(ret);
					});

					console.log(groups);
					console.log(ret);
					//display the json on /data
					res.json(ret);
		});
	});
}	