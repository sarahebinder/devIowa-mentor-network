function nodeClick (ev) {
	console.log('click!');
 }

//"ready" event holder for when the page loads
$(document).on("ready", function (ev){
	$(".node").on("click", nodeClick);
	});