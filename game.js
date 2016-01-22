var RACEGAME = RACEGAME || {};

var gamestate = ["waiting", "in progress", "finished"];

RACEGAME.Game = function(car1Elem, car2Elem) {

	this.car1 = new RACEGAME.Car(car1Elem);
	this.car2 = new RACEGAME.Car(car2Elem);

	this.state = gamestate[0];
};

RACEGAME.Game.prototype = {

	//instantiates cars, sets up state
	start: function() {

	},

	// updates to check if any car has reached finish
	update: function() {

	},

	// sets state to finished, loads winning screen
	finish: function() {

	}

};