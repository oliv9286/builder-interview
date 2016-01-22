$(document).ready(function() {
	$("#start-game").click(function() {

		var game = new RACEGAME.Game($(".car-one"), $(".car-two"));
		game.start();
	});
});