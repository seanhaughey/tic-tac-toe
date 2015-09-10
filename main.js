$(function() {
	var playerState = true;
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
	
	if (playerOne === "x") {
		
		
		$("button.square").on("click", function(){
			if (($("button.square") === "X") || ($("button.square") === "O")) 
			{
			return;
			}
			
			else if (playerState == true) {
				($(this).html("X"));
				playerState = false;
				}
			else {
				($(this).html("O"));
				playerState = true;	
			}
		})	
		}
	else {
		$("button.square").on("click", function(){
			if (($("button.square") === "X") || ($("button.square") === "O")) {
			return;
			}
			else if (playerState == true) {
				($(this).html("O"));
				playerState = false;
				}
			else {
				($(this).html("X"));
				playerState = true;	
			}
		})	
		}
	})
