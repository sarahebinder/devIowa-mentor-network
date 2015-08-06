//Temporary animations for features that don't work yet

//Adds a pop up to the center of the body

module.exports = function () {

	function buttonClick (ev) {
		$("body").append('<div class="dialog"><h5>Hi! None of these buttons work yet. More soon...</h5>(click to dismiss)</div>');
		$(".dialog").on("click", dialogClick);
	}

	//removes pop up when you click it//
	function dialogClick (ev) {
		$(".dialog").detach();
	}

	//"ready" event holder for when the page loads
	$(document).on("ready", function (ev){
		$(".button-primary").on("click", buttonClick);
		});

};