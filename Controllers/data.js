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
		
		//Serialize so functions will execute in the order written
		db.serialize(function(){
			//INSERT new user data from form into the users.db
			var sqlInsert = 'INSERT INTO users (username, email, mentor_type, bio, twitter_id, linkedin_id, image_filename)';
			sqlInsert += 'VALUES (?, ?, ?, ?, ?, ?, ?)';
			db.run(sqlInsert, [req.body.username, req.body.email, req.body.mentor_type, req.body.bio, req.body.twitter_id, req.body.linkedin_id, req.body.image_filename]);
			
			//INSERT skills, IGNORE if it is already in the database
			var sql = 'INSERT OR IGNORE INTO skills (skill_name)';
			sql += 'VALUES (?)'
			var stmt = db.prepare(sql);
			req.body.skills.forEach(function(skill){
				stmt.run([skill]);
			});
			stmt.finalize();

			//forEach to handle the array of skills
			//we are assuming every mentor will have more than 1 skill
			req.body.skills.forEach(function(skill){
				createLink(req.body.username, skill);
			});
			//redirect to admin so we can enter another person! 
			res.redirect('/admin');
		});
	});

	//insert a row in user_skills
	function createLink(user, skill){
		db.get('SELECT id FROM users WHERE username = ?', [user], function(err, uid){
				db.get('SELECT id FROM skills WHERE skill_name = ?', [skill], function(err, sid){
					db.run('INSERT INTO user_skills (user_id, skill_id) VALUES (?, ?)', [uid.id, sid.id]);
					console.log (uid.id + "," + sid.id);
				});
			});
	}

	//display the database on /data
	app.get('/data', function(req, res){
		db.all('SELECT id, username, mentor_type FROM users', function(err, rows){
			//Sort the mentors into groups based on their mentor_type
			//easy way to do grouping without knowing all the info ahead of time
			var groups = {}; //add an error handler here
			var ret = {nodes: [], links: []};
			var umap = {}, smap = {}; //creating unique ids for every node, so skills and people don't overlap
			for (x = 0; x < rows.length; x++)
			{
				var row = rows[x]; // we are adding mentors into the appropriate groups
				if (!groups[row.mentor_type]) groups[row.mentor_type] = (Object.keys(groups).length+1); //if the mentor type doesn't exist, add it
				
				//add a node
				var node = {name: row.username, group: groups[row.mentor_type]};
				umap[row.id] = ret.nodes.length;
				ret['nodes'].push(node);
			}
			//we can nest a select inside a select
			//add a node for a new skill
			db.all('SELECT id, skill_name FROM skills', function(err, rows){
				var skillsGroup = (Object.keys(groups).length + 1);
				var skills = {};	

				for (x = 0; x < rows.length; x++)
				{
					var node = {name: rows[x].skill_name, skill: true, group: skillsGroup};
					smap[rows[x].id] = ret.nodes.length;
					ret.nodes.push(node);
				};

				//add a link???
				db.all('SELECT user_skills.user_id AS uid, user_skills.skill_id AS sid FROM users, skills, user_skills WHERE users.id = user_skills.user_id AND skills.id = user_skills.skill_id', function(err, rows){ 
					//console.log(umap);
					//console.log(smap);
					rows.forEach(function(row){
						var obj = {"source": umap[row.uid], "target": smap[row.sid]};
						ret['links'].push(obj);
					});
					res.json(ret);
					
				});								
			});
		});
	});
}	