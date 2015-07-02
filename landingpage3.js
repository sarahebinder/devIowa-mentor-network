//Adds a pop up to the center of the body//
function buttonClick (ev) {
	$("body").append('<div class="dialog">Hi! None of these buttons work yet. This is an experimental student project after all. :) More soon...</div>');
	$(".dialog").on("click", dialogClick);
}

//removes pop up when you click it//
function dialogClick (ev) {
	$(".dialog").detach();
}

//when you click the hamburger, the menu moves in and the main content slides over//
function toggleIn (ev) {
	$("#menubar").toggle();
	$("#toggle").toggle();
	$(".centeredtext").find("p").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".centeredtext").find("h3").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".title").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".content").find("address").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".graphic").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".teamwork").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	//$(".content").animate({width:"-=30%"});
	//$("body").find("*").animate({marginLeft: "+=30%", marginRight: "-30%"},"fast");
	}

//when you click the second hamburger, the menu moves back out and content resumes original position//
function toggleOut (ev) {
	$("#menubar").toggle();
	$("#toggle").toggle();
	$(".centeredtext").find("p").animate({marginLeft: "-=30%", marginRight: "+=30%"});
	$(".centeredtext").find("h3").animate({marginLeft: "-=30%", marginRight: "+=30%"});
	$(".title").animate({marginLeft: "-=30%", marginRight: "+=30%"});
	$(".content").find("address").animate({marginLeft: "-=30%", marginRight: "+=30%"});
	$(".graphic").animate({marginLeft: "-=30%", marginRight: "+=30%"});
	$(".teamwork").animate({marginLeft: "-=30%", marginRight: "+=30%"});
	//$(".content").animate({width:"+=30%"});
	//$("body").find("*").animate({marginLeft: "-=30%", marginRight: "+30%"}, "fast");
}

//"ready" event holder for when the page loads//
$(document).on("ready", function (ev){
	$(".button").on("click", buttonClick);
	$("#menubar").hide();
	$("#toggle").on("click", toggleIn);
	$("#toggle2").on("click", toggleOut);
});