var RACEGAME = RACEGAME || {};


RACEGAME.Game = function(car1Elem, car2Elem, stateManager) {

    this.car1 = new RACEGAME.Car(car1Elem, "Mr. Blob");
    this.car2 = new RACEGAME.Car(car2Elem, "Mr. Chunky");
    this.stateManager = stateManager;
};

RACEGAME.Game.prototype = {

    /** initializes game, sets game to the game state
    **/
    start: function() {
        this.stateManager.setGame();
        this.countdown(3);
    },

    /** keydown listner to listen for keypress 
    *** disallows player to hold down keys
    **/
    addKeypressListener: function() {
        var _this = this;

        var down = {};

        $(document).keydown(function(event) {

            var keycode = event.keyCode ? event.keyCode : event.which;
            if (keycode === 65 && down[65] === null) { // A pressed
                _this.car1.move();
                down[65] = true;
            }
            if (keycode === 76 && down[76] === null) { // L pressed
                _this.car2.move();
                down[76] = true;
            }

            _this.update();
        });

        $(document).keyup(function(event) {
            var keycode = event.keyCode ? event.keyCode : event.which;
            down[keycode] = null;
        });
    },

    /** displays timer counts down to 3
    *** triggers keypress listeners when timer finishes
    **/
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

    /** updates to check if any car has reached finish
    **/
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

    /** Sets state to finished, loads winning screen
    *** @param winner (car) the winning car
    **/
    finish: function(winner) {

        $(document).off("keydown");
        $(document).off("keyup");

        if (winner) {
            $("#winner").text("Congratulations to " + winner.getName() + " on winning the race!");
        }
        else {
            $("#winner").text("Looks like we have a draw!");
        }

        this.stateManager.setFinish();
    }

};