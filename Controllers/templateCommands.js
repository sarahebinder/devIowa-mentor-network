// //homepage template
var swig = require('swig');

module.exports = function (app) {
	var tpl = swig.compileFile('Views/index.swig');
	app.get('/', function(req, res){
		res.send(tpl({
			title:'100+ mentors to help grow your ideas',
			pageTitle:'The Midwest\'s premiere startup mentor network', 
			pageSlug:'Coming soon!'
		}));
	});
}