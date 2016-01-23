
// LISTNERS HANDLING STATE TRANSITIONS AND MENU ELEMENTS

$(document).ready(function() {

  var stateManager = new RACEGAME.StateManager();

  $("#start-game").click(function() {

      var game = new RACEGAME.Game($(".car-one"), $(".car-two"), stateManager);
      game.start();
  });

  $("#restart").click(function() {
      stateManager.setStart();
  });
});