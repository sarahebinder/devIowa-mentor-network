//Temporary animations for features that don't work yet

//Adds a pop up to the center of the body
function buttonClick (ev) {
	$("#mobilemenu").append('<div class="dialog">' +
	'<a href="/"><img src="images/network.smaller.png"></a>' +
	'<p><strong>Corridor community members: </strong>Meet your mentor match</p>' +
	'<a href="http://www.eventbrite.com/o/jessalyn-holdcraft-iowa-startup-accelerator-8342841936" target="blank"><button class="button-primary"><i class="fa fa-bolt fa-2x"></i> open times</button></a>' +
	'<p><strong>Become a mentor: </strong>Everyone has a skill to share </p>' +
	'<a href="http://iowastartup.wpengine.com/accelerator/mentors/mentor-expectations/" target="blank"><button class="button-primary"><i class="fa fa-plug fa-2x"></i> learn more</button></a>' +
	'<p><strong>Join the project: </strong>Make this page more awesome</p>' +
	'<a href="/join"><button class="button-primary" id="formPopup"><i class="fa fa-link fa-2x"></i> connect</button></a>' +
	'<address>made with <i class="fa fa-heart"></i> by @<a href="https://twitter.com/sarahebinder" target="blank">sarahebinder</a></address>' +
	'<address>Dev/Iowa Summer Series 2015</address>' +
	'<address><a href="/admin">Login</a></address>' + 
	'(click to dismiss menu)' +
	'</div>'
	);
	$(".dialog").on("click", dialogClick);
}

//removes pop up when you click it//
function dialogClick (ev) {
	$(".dialog").detach();
}

//"ready" event holder for when the page loads
$(document).on("ready", function (ev){
	$("#mobileButton").on("click", buttonClick);
	});

//console log tells us this js has loaded
console.log('temporary js animations ready');