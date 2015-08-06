var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('data/users.db')

module.exports = db.serialize(function() {
	db.run("CREATE TABLE IF NOT EXISTS users(" +
		"id INTEGER PRIMARY KEY, " +
		"username TEXT NOT NULL," + 
		"email TEXT NOT NULL" +
		");");
	db.run("CREATE TABLE IF NOT EXISTS skills(" +
		"id INTEGER PRIMARY KEY," +
		"skill_name TEXT NOT NULL" +
		");");
});