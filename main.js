$(function() {
	// confirm("Shall we play a game?");
	// confirm("How about tic-tac-toe?");
	var playerOne = prompt("Player 1 - Do you choose X's or O's?");
	if ((playerOne == "x") || (playerOne == "X")) {
		playerTwo = "o";
	}
	else {
		playerTwo = "x";
	};
	$("button").on("click", function(){
		($(this).html("X"));
	})
	// if ((playerOne !== "x") && (playerOne !== "X")) {
	// 	playerOne = prompt("Choose X or O!")
	// }
	// if ((playerOne = "x") || (playerOne = "X")) {
	// 	$("#s1").on("click", function() {
	// 		$("#s1").html("X");
	// 	});
	// }
})