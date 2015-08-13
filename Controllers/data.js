var db = require('../db');

module.exports = function (app) {
	//admin login page 
	app.get('/admin', function(req, res){
		res.render('admin', {
			title: 'data entry',
			pageTitle: 'ADMIN AREA: Enter data here',
			pageSlug: 'post that data!'
		});
	});


	app.post('/admin', function(req, res){
		//INSERT new user data from form into the users.db
		var sqlInsert = 'INSERT INTO users (username, email, mentor_type, bio, twitter_id, linkedin_id, image_filename)';
		sqlInsert += 'VALUES (?, ?, ?, ?, ?, ?, ?)';
		db.run(sqlInsert, req.body.username, req.body.email, req.body.mentor_type, req.body.bio, req.body.twitter_id, req.body.linkedin_id, req.body.image_filename);
		res.redirect('/admin');

		//insert SKILLS
		//query to see if a skill is already in the database

		db.get("SELECT * FROM skills WHERE skill_name = " + req.body.skills, function(err, data) {
			if (data); 
			else{
				var sql = 'INSERT INTO skills (skill_name)';
				sql += 'VALUES (?)'
				db.run(sql, req.body.skills);
			};
		}) ;
		
	});

	// Example SELECT - how do I draw the links??
	db.all("SELECT * FROM users, user_skills WHERE users.id = user_skills.user_id;", function(err, rows){
		console.log(err);
		if (!err){

	    // Process data
		var links = {};
    	//help! 
    	for (var y = 0; y < rows.length; y++) {
    		rows[y]
    	};
    	}
    	
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
						var skills = {};	

						for (x = 0; x < rows.length; x++)
						{
							var node = {name: rows[x].skill_name, skill: true, group: skillsGroup};
							ret.nodes.push(node);
						};
						res.json(ret);
					});
		});
	});
}	