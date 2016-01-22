var RACEGAME = RACEGAME || {};

RACEGAME.StateManager = function() {
	this.setStart();
};

RACEGAME.StateManager.prototype = {
	setStart: function() {
		$(".state").hide();
		$("#start-menu").show();
		$(".car").css({left: "20px"});
	},

	setGame: function() {
		$(".state").hide();
		$("#game").show();
		$("#timer").text("").show();
	},

	setFinish: function() {
		$("#timer").hide();
		$("#finish-menu").fadeIn();
	}
};