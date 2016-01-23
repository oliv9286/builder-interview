var RACEGAME = RACEGAME || {};

/**
** Constructor for class Car
** @param elem - jQuery object for current car
** @param name - String, name of the car
** @param photoURL - String, path to the graphics for the car
**/
RACEGAME.Car = function(elem, name, photoURL) {
  this.entity = elem;
  this.name = name;
  this.photoURL = photoURL;
};

RACEGAME.Car.prototype = {

  /** updates eneity to move 5px towards right
  **/
  move: function() {
      var oldPos = this.entity.position().left;
      this.entity.css({"left": oldPos + 5 + "px"});
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
  },

  /** returns car's DOM element
  **/
  getEntity: function() {
      return this.entity;
  },

  /** returns the car's asset url
  **/
  getPhotoURL: function() {
      return this.photoURL;
    }
};