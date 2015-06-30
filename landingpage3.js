function buttonClick (ev) {
	$("body").append('<div class="dialog">Hi! None of these buttons work yet. This is an experimental student project after all. :) More soon...</div>');
	$(".dialog").on("click", dialogClick);
}

function dialogClick (ev) {
	$(".dialog").detach();
}

function toggleIn (ev) {
	$("#menubar").toggle();
	$("#toggle").toggle();
	//$(".content").animate({width:"-=25%"});
	$("body").find("*").animate({marginLeft: "+=25%"},"fast");
	}


function toggleOut (ev) {
	$("#menubar").toggle();
	$("#toggle").toggle();
	//$(".content").animate({width:"+=25%"});
	$("body").find("*").animate({marginLeft: "-=25%"}, "fast");
}

//this isn't quite the effect I wanted - tried to just slide the main column partially off the screen using animate, before, insertBefore, etc...

$(document).on("ready", function (ev){
	$(".button").on("click", buttonClick);
	$("#menubar").hide();
	$("#toggle").on("click", toggleIn);
	$("#toggle2").on("click", toggleOut);
});

