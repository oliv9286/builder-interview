var RACEGAME = RACEGAME || {};

/**
** Constructor for class StateManager
**/
RACEGAME.StateManager = function() {
	this.setStart();
};

RACEGAME.StateManager.prototype = {

	/**
	** displays the start menu div
	**/
	setStart: function() {
		$(".state").hide();
		$("#timer").css({"visibility": "hidden"});
		$("#start-menu").show();
		$(".car").css({left: "30px"});
	},

	/**
	** displays the main game div and the countdown timer
	**/
	setGame: function() {
		$(".state").hide();
		$("#game").show();
		$("#timer").text("").css({"visibility" : "visible"});
	},

	/*
	** displays the finish state
	**/
	setFinish: function() {
		$(".state").hide();
		$("#timer").css({"visibility" : "hidden"});
		$("#finish-menu").fadeIn();
	}
};