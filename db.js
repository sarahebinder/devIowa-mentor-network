var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('data/users.db')

db.run("PRAGMA foreign_keys = ON;");

module.exports = db.serialize(function() {
	db.run("CREATE TABLE IF NOT EXISTS users(" +
		"id INTEGER PRIMARY KEY, " +
		"username TEXT NOT NULL," + 
		"email TEXT," +
		"mentor_type TEXT NOT NULL," +
		"bio TEXT," +
		"twitter_id TEXT," +
		"linkedin_id TEXT," + 
		"image_filename TEXT" +
		");");
	db.run("CREATE TABLE IF NOT EXISTS skills(" +
		"id INTEGER PRIMARY KEY," +
		"skill_name TEXT NOT NULL" +
		");");
	db.run("CREATE TABLE IF NOT EXISTS user_skills(" +
		"user_id INTEGER," + 
		"skill_id INTEGER," + 
		"FOREIGN KEY (user_id) REFERENCES users(id)," +
		"FOREIGN KEY (skill_id) REFERENCES skills(id)" +
		");");
});