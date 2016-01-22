var RACEGAME = RACEGAME || {};

RACEGAME.Car = function(elem, name) {
	this.entity = elem;
	this.name = name;
};

RACEGAME.Car.prototype = {

	// updates eneity to move 5px towards right
	move: function() {
		var oldPos = this.entity.position().left;
		this.entity.css({left: oldPos + 5});
	},

	// returns position of car including width offset
	getPosition: function() {
		return this.entity.position().left + this.entity.width();
	},

	getName: function() {
		return this.name;
	}
};