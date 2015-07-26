//Temporary animations for features that don't work yet

//Adds a pop up to the center of the body
function buttonClick (ev) {
	$("body").append('<div class="dialog">Hi! None of these buttons work yet. More soon...</div>');
	$(".dialog").on("click", dialogClick);
}

//removes pop up when you click it//
function dialogClick (ev) {
	$(".dialog").detach();
}

//"ready" event holder for when the page loads
$(document).on("ready", function (ev){
	$(".button").on("click", buttonClick);
	});

//console log tells us this js has loaded
console.log('temporary js animations ready');