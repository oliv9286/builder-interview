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
		var self = this;
		this.countdown(3);

		$(document).keypress(function(event) {
			if (event.which === 97) { // A pressed
				self.car1.move();
			}
			if (event.which === 108) {
				self.car2.move();
			}

			self.update();
		});
	},

	countdown: function(count) {
		var counter = setInterval(function() {
			if (count <= 0) {
				clearInterval(counter);
				return;
			}

			$("#timer").html(count);
			count -= 1;
		}, 1000);
	},

	// updates to check if any car has reached finish
	update: function() {
		
	},

	// sets state to finished, loads winning screen
	finish: function() {

	}

};