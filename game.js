var RACEGAME = RACEGAME || {};


RACEGAME.Game = function(car1Elem, car2Elem, stateManager) {

	this.car1 = new RACEGAME.Car(car1Elem, "Mr. Blob");
	this.car2 = new RACEGAME.Car(car2Elem, "Mr. Chunky");
	this.stateManager = stateManager;
};

RACEGAME.Game.prototype = {

	//instantiates cars, sets up state
	start: function() {
		this.stateManager.setGame();
		this.countdown(3);
	},

	addKeypressListener: function() {
		var _this = this;
		$(document).keypress(function(event) {
			if (event.which === 97) { // A pressed
				_this.car1.move();
			}
			if (event.which === 108) { // L pressed
				_this.car2.move();
			}

			_this.update();
		});
	},

	// displays timer counts down to 3
	countdown: function(count) {
		var _this = this;

		var counter = setInterval(function() {
			if (count < 0) {
				clearInterval(counter);
				_this.addKeypressListener();
				return;
			}

			$("#timer").html(count === 0 ? "GO!" : count);
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

		$(document).off("keypress");

		if (winner) {
			$("#winner").text("Congratulations to " + winner.getName() + " on winning the race!");
		}
		else {
			$("#winner").text("Looks like we have a draw!");
		}

		this.stateManager.setFinish();
	}

};