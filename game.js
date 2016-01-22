var RACEGAME = RACEGAME || {};

var gamestate = ["waiting", "in progress", "finished"];

RACEGAME.Game = function(car1Elem, car2Elem) {

	this.car1 = new RACEGAME.Car(car1Elem, "Mr. Blob");
	this.car2 = new RACEGAME.Car(car2Elem, "Mr. Chunky");

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

	// displays timer counts down to 3
	countdown: function(count) {
		var counter = setInterval(function() {
			if (count <= 0) {
				clearInterval(counter);
				$("#start-menu").hide();
				return;
			}

			$("#timer").html(count);
			count -= 1;
		}, 1000);
	},

	// updates to check if any car has reached finish
	update: function() {

		var finishline = $("#finish-line");
		var finishLinePos = finishline.position().left + finishline.width();

		var car1Pos = this.car1.getPosition();
		var car2Pos = this.car2.getPosition();

		if (car1Pos === car2Pos && car1Pos >= finishLinePos) {
			this.finish();
		}
		else if (car1Pos >= finishLinePos) {
			this.finish(this.car1);
		}
		else if (car2Pos >= finishLinePos) {
			this.finish(this.car2);
		}

	},

	// sets state to finished, loads winning screen
	finish: function(winner) {

	}

};