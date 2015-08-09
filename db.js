var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('data/users.db')

module.exports = db.serialize(function() {
	db.run("CREATE TABLE IF NOT EXISTS users(" +
		"id INTEGER PRIMARY KEY, " +
		"username TEXT NOT NULL," + 
		"email TEXT," +
		"mentor type TEXT NOT NULL," +
		"twitter id TEXT," +
		"linkedin id TEXT," + 
		"image finlename TEXT" +
		");");
	db.run("CREATE TABLE IF NOT EXISTS skills(" +
		"id INTEGER PRIMARY KEY," +
		"skill_name TEXT NOT NULL" +
		");");
	db.run("CREATE TABLE IF NOT EXISTS user_skills(" +
		"users_id INTEGER," +
		"skills_id INTEGER" + 
		");");
	//db.all(
		//INSERT INTO users (username, email, mentor type, twitter id, linkedin id, image filename) VALUES (req.query.username), (req.query.email), 
		//etc etc etc
	//	function(err, rows) {}
	//	);
	//db.all(
		//SELECT * FROM users WHERE users.id = user_skills.users_id;
	//	);
});