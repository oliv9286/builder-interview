var RACEGAME = RACEGAME || {};

RACEGAME.StateManager = function() {
	this.stateEnum = {
		0: "start",
		1: "game",
		2: "finish"
	};

	this.state = null;

	this.setStart();
};

RACEGAME.StateManager.prototype = {
	setStart: function() {
		$("#start-menu").show();
		this.state = this.stateEnum[0];
	},

	setGame: function() {
		$(".state").hide();
		$("#game").show();
		this.state = this.stateEnum[1];
	},

	setFinish: function() {
		$(".state").hide();
		$("#timer").hide();
		$("#finish-menu").show();
		this.state = this.stateEnum[2];
	}
};