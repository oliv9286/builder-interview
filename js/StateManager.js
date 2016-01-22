var RACEGAME = RACEGAME || {};

RACEGAME.StateManager = function() {
	this.setStart();
};

RACEGAME.StateManager.prototype = {
	setStart: function() {
		$(".state").hide();
		$("#timer").hide();
		$("#start-menu").show();
		$(".car").offset({left: 30});
	},

	setGame: function() {
		$(".state").hide();
		$("#game").show();
		$("#timer").text("").show();
	},

	setFinish: function() {
		$(".state").hide();
		$("#timer").hide();
		$("#finish-menu").fadeIn();
	}
};