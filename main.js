$(function() {
	// confirm("Shall we play a game?");
	// confirm("How about tic-tac-toe?");
	playerOne = prompt("Player 1 - Do you choose X's or O's?");
	if ((playerOne === "x") || (playerOne === "X")) {
		playerTwo = "o";
	}
	else {
		playerTwo = "x";
	};
	// if ((playerOne = "x") || (playerOne = "X")) {
	// 	playerOneState = "X";
	// 	playerTwoState = "O";
	// }
	// else {
	// 	playerOneState = "O";
	// 	playerTwoState = "X";
	// }
	playerOneState = true;
	if (playerOne === "x") {
		
		if (playerOneState === true) {
			$("button").on("click", function(){
				($(this).html("X"));
				playerOneState = false;
				})
			}	
		else {
			$("button").on("click", function(){
				($(this).html("O"));
				})
				playerOneState = true;	
			}
		}
	// else {
	// 	playerOneState = true;
	// 	if (playerOneState = true) {
	// 		$("button").on("click", function(){
	// 			($(this).html("O"));
	// 			playerOneState = false;
	// 		})
	// 	}
	// 	else {
	// 		$("button").on("click", function(){
	// 			($(this).html("X"));
	// 		})
	// 		playerOneState = true;
	// 	}
	// }		

});
