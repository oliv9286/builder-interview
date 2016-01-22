var RACEGAME = RACEGAME || {};

RACEGAME.Car = function(elem, name) {
    this.entity = elem;
    this.name = name;
};

RACEGAME.Car.prototype = {

    /** updates eneity to move 5px towards right
    **/
    move: function() {
        this.entity.animate({"left": "+=5px"}, "fast");
    },

    /** returns position of car including width offset
    **/
    getPosition: function() {
        return this.entity.position().left + this.entity.width();
    },

    /** gets the name of the car
    **/
    getName: function() {
        return this.name;
    }
};