var RACEGAME = RACEGAME || {};

RACEGAME.StateManager = function() {
	this.setStart();
};

RACEGAME.StateManager.prototype = {
	setStart: function() {
		$(".state").hide();
		$("#timer").css({"visibility": "hidden"});
		$("#start-menu").show();
		$(".car").css({left: "30px"});
	},

	setGame: function() {
		$(".state").hide();
		$("#game").show();
		$("#timer").text("").css({"visibility" : "visible"});
	},

	setFinish: function() {
		$(".state").hide();
		$("#timer").css({"visibility" : "hidden"});
		$("#finish-menu").fadeIn();
	}
};