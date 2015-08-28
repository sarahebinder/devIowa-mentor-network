module.exports = function (app) {
  var db = app.locals.db;

	app.get("/users", function(req, res){
		db.all("SELECT * FROM users, skills WHERE users.id = skills.user_id", function (err, rows){
			if (!err)
			{	
				res.json(rows);
			}
			else {
				//on error, send nothing
				console.log("an error occured getting all users" + err);
				res.json({"error": err});
			}
		});
	});
};
