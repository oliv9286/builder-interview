describe("Game", function() {
  var Game;
  var StateManager;
  var $car1Elem;
  var $car2Elem;
  var $finishLine;
  var $winner;


  beforeEach(function setup() {
    $car1Elem = $("<div class='car car-one'></div>");
    $car2Elem = $("<div class='car car-two'></div>");
    $finishLine = $("<div id='finish-line'></div>");
    $winner = $("<div id='winner'></div>");

    $("body").append($car1Elem).append($car2Elem).append($finishLine).append($winner);

    StateManager = new RACEGAME.StateManager();
    Game = new RACEGAME.Game($car1Elem, $car2Elem, StateManager);
  });

  afterEach(function teardown() {
    $car1Elem.remove();
    $car2Elem.remove();
    $finishLine.remove();
    $winner.remove();
  });

  describe("start", function() {
    it("should set the game to 'Game' state and start countdown", function() {
      spyOn(Game, "countdown");
      spyOn(StateManager, "setGame");

      Game.start();
      expect(Game.countdown).toHaveBeenCalled();
      expect(StateManager.setGame).toHaveBeenCalled();
    });
  });

  describe("update", function() {
    it("should call finish with no argument if there is a tie", function() {
      spyOn(Game, "finish");

      Game.update();
      expect(Game.finish).toHaveBeenCalledWith();
    });

    it("should call finish with car1 as winner if car1 is ahead", function() {
      spyOn(Game, "finish");

      $finishLine.offset({left: 30});
      $car1Elem.offset({left: 30});
      $car2Elem.offset({left: 20});

      Game.update();
      expect(Game.finish).toHaveBeenCalledWith(Game.getCar1());
    });

    it("should call finish with car2 as winner if car2 is ahead", function() {
      spyOn(Game, "finish");

      $finishLine.offset({left: 30});
      $car1Elem.offset({left: 20});
      $car2Elem.offset({left: 30});

      Game.update();
      expect(Game.finish).toHaveBeenCalledWith(Game.getCar2());
    });
  });

  describe("finish", function() {
    it("should have removed key listeners", function() {
      Game.finish();

      var hasKeydown = false;
      var hasKeyup = false;

      $.each($(document).data('events'), function(i, event){
          $.each(event, function(i, handler){
              if (handler.toString() === "keydown") {
                hasKeydown = true;
              }
              if (handler.toString() === "keyup") {
                hasKeyup = true;
              }
          });
      });

      expect(hasKeydown).toBe(false);
      expect(hasKeyup).toBe(false);

    });

    it("should display draw message if there is no winner given", function() {
      Game.finish();

      expect($winner.text()).toEqual("Looks like we have a draw!");
    });

    it("should display winner message if car1 was winner", function() {

      var winner = Game.getCar1();
      Game.finish(winner);

      expect($winner.text()).toEqual("Congratulations to " + winner.getName() + " on winning the race!");
    });

    it("should display winner message if car2 was winner", function() {

      var winner = Game.getCar2();
      Game.finish(winner);

      expect($winner.text()).toEqual("Congratulations to " + winner.getName() + " on winning the race!");
    });

    it("should set the game to finish state", function() {
      spyOn(StateManager, "setFinish");

      Game.finish();
      expect(StateManager.setFinish).toHaveBeenCalled();
    });
  });
});