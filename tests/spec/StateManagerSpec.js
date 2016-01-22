describe("StateManager", function() {
  var StateManager;
  var $startMenu;
  var $mainGame;
  var $finishMenu;
  var $timer;
  var $car1;
  var $car2;

  beforeEach(function setup() {
    $car1 = $("<div class='car car-one'></div>");
    $car2 = $("<div class='car car-two'></div>");

    $startMenu = $("<div id='start-menu' class='state'></div>");
    $mainGame = $("<div id='game' class='state'></div>");
    $finishMenu = $("<div id='finish-menu' class='state'></div>");
    $timer = $("<div id='timer'></div>");
    StateManager = new RACEGAME.StateManager();

    $("body").append($startMenu)
              .append($mainGame)
              .append($finishMenu)
              .append($timer)
              .append($car1)
              .append($car2);

  });

  afterEach(function teardown() {
    $startMenu.remove();
    $mainGame.remove();
    $finishMenu.remove();
    $timer.remove();
  });

  describe("setStart", function() {
    it("should hide all states except for start menu", function() {
      StateManager.setStart();

      expect($startMenu.is(":visible")).toBe(true);
      expect($finishMenu.is(":visible")).toBe(false);
      expect($timer.is(":visible")).toBe(false);
      expect($mainGame.is(":visible")).toBe(false);
    });

    it("should set the initial position of both cars to left 20px", function() {
      StateManager.setStart();

      var car1Offset = $(".car-one").offset().left;
      var car2Offset = $(".car-two").offset().left;
      expect(car1Offset).toEqual(30);
      expect(car2Offset).toEqual(30);
    });
  });

  describe("setGame", function() {
    it("should hide all states except for the main game", function() {
      StateManager.setGame();

      expect($startMenu.is(":visible")).toBe(false);
      expect($finishMenu.is(":visible")).toBe(false);
      expect($timer.is(":visible")).toBe(true);
      expect($mainGame.is(":visible")).toBe(true);

    });

    it("should empty timer text and show timer", function() {
      StateManager.setGame();
      expect($timer.text()).toEqual("");
      expect($timer.is(":visible")).toBe(true);
    });
  });

  describe("setFinish", function() {
    it("should hide all states including timer and show finish state", function() {
      StateManager.setFinish();

      expect($startMenu.is(":visible")).toBe(false);
      expect($finishMenu.is(":visible")).toBe(true);
      expect($timer.is(":visible")).toBe(false);
      expect($mainGame.is(":visible")).toBe(false);
    });
  });
});