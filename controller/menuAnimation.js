function toggleIn (ev) {
	$("#menubar").toggle();
	$("#toggle").toggle();
	$(".centeredtext").find("p").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".centeredtext").find("h3").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".title").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".content").find("address").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".graphic").animate({marginLeft: "+=30%", marginRight: "-=30%"});
	$(".teamwork").animate({marginLeft: "+=30%", marginRight: "-=30%"});
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


//"ready" event holder for when the page loads//
$(document).on("ready", function (ev){
	$(".button").on("click", buttonClick);
	$("#menubar").hide();
	$("#toggle").on("click", toggleIn);
	$("#toggle2").on("click", toggleOut);
});

console.log('hi, here is the js!')