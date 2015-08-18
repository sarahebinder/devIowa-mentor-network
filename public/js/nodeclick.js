function nodeClick (ev) {
	console.log('click!');
 }

//"ready" event holder for when the page loads
$(document).on("ready", function (ev){
	$("g").on("click", nodeClick);
	});