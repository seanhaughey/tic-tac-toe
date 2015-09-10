$(function() {
	var playerState = true;
	var board = {
		s1 : "", s2 : "", s3 : "", 
		s4 : "", s5 : "", s6 : "", 
		s7 : "", s8 : "", s9 : "",
	};
	var movesCounter = 0;
	// confirm("Shall we play a game?");
	// confirm("How about tic-tac-toe?");
	playerOne = prompt("Player 1 - Do you choose X's or O's?");
	while ((playerOne !== "x") && (playerOne !== "X") && (playerOne !== "o") && (playerOne !== "O")) {
		playerOne = prompt ("You must choose X or O!");
	}
	if ((playerOne === "x") || (playerOne === "X")) {
		playerTwo = "o";
	}
	else {
		playerTwo = "x";
	};
	if (playerOne === "x") {
		
		
		$("button.square").on("click", function(){
			var gotWinner;
			var boardPlace;
			var boardPlaceId = $(this).attr('id');
			boardPlace = $("#" + boardPlaceId);

			if ((boardPlace.html === "X") || (boardPlace.html === "O")) 
			{
			return;
			}
			else if (playerState == true) {
				(boardPlace.html("X"));
				playerState = false;
				board[boardPlaceId] = "X";
				}
			else if (playerState == false){
				(boardPlace.html("O"));
				playerState = true;
				board[boardPlaceId] = "O";
			}
			movesCounter ++;
			if (((board.s1 === "X") && (board.s2 === "X") && (board.s3 === "X")) ||
				((board.s4 === "X") && (board.s5 === "X") && (board.s6 === "X")) ||
				((board.s7 === "X") && (board.s8 === "X") && (board.s9 === "X")) ||
				((board.s1 === "X") && (board.s4 === "X") && (board.s7 === "X")) ||
				((board.s2 === "X") && (board.s5 === "X") && (board.s8 === "X")) ||
				((board.s3 === "X") && (board.s6 === "X") && (board.s9 === "X")) ||
				((board.s1 === "X") && (board.s5 === "X") && (board.s9 === "X")) ||
				((board.s3 === "X") && (board.s5 === "X") && (board.s7 === "X"))) {
				gotWinner = "yes";
				alert("X wins!!");
			}
				
			else if (((board.s1 === "O") && (board.s2 === "O") && (board.s3 === "O")) ||
				((board.s4 === "O") && (board.s5 === "O") && (board.s6 === "O")) ||
				((board.s7 === "O") && (board.s8 === "O") && (board.s9 === "O")) ||
				((board.s1 === "O") && (board.s4 === "O") && (board.s7 === "O")) ||
				((board.s2 === "O") && (board.s5 === "O") && (board.s8 === "O")) ||
				((board.s3 === "O") && (board.s6 === "O") && (board.s9 === "O")) ||
				((board.s1 === "O") && (board.s5 === "O") && (board.s9 === "O")) ||
				((board.s3 === "O") && (board.s5 === "O") && (board.s7 === "O"))
				) {
				gotWinner = "yes";
				alert("O wins!!");
			}
			else if (movesCounter === 9){
				alert("It's a tie!!");
				gotWinner = "yes";
			}
			if (gotWinner === "yes") {
					for (var i = 1; i <= 9; i++) {
						$('#s' + i).html("Choose this square");
						board['s' + i] = "";
					};
				movesCounter = 0;
				playerState = true;
			}
			return;
		})
	}
	else {
		$("button.square").on("click", function(){
			var gotWinner;
			var boardPlace;
			var boardPlaceId = $(this).attr('id');
			boardPlace = $("#" + boardPlaceId);
			if ((boardPlace.html === "X") || (boardPlace.html === "O")) {
			return;
			}
			if (playerState == true) {
				(boardPlace.html("O"));
				playerState = false;
				board[boardPlaceId] = "O";
				}
			else {
				(boardPlace.html("X"));
				playerState = true;
				board[boardPlaceId] = "X";
			}
			movesCounter ++;
			if (((board.s1 === "X") && (board.s2 === "X") && (board.s3 === "X")) ||
				((board.s4 === "X") && (board.s5 === "X") && (board.s6 === "X")) ||
				((board.s7 === "X") && (board.s8 === "X") && (board.s9 === "X")) ||
				((board.s1 === "X") && (board.s4 === "X") && (board.s7 === "X")) ||
				((board.s2 === "X") && (board.s5 === "X") && (board.s8 === "X")) ||
				((board.s3 === "X") && (board.s6 === "X") && (board.s9 === "X")) ||
				((board.s1 === "X") && (board.s5 === "X") && (board.s9 === "X")) ||
				((board.s3 === "X") && (board.s5 === "X") && (board.s7 === "X"))
			) {
				alert("X wins!!");
				gotWinner = "yes";
			}
			else if (((board.s1 === "O") && (board.s2 === "O") && (board.s3 === "O")) ||
				((board.s4 === "O") && (board.s5 === "O") && (board.s6 === "O")) ||
				((board.s7 === "O") && (board.s8 === "O") && (board.s9 === "O")) ||
				((board.s1 === "O") && (board.s4 === "O") && (board.s7 === "O")) ||
				((board.s2 === "O") && (board.s5 === "O") && (board.s8 === "O")) ||
				((board.s3 === "O") && (board.s6 === "O") && (board.s9 === "O")) ||
				((board.s1 === "O") && (board.s5 === "O") && (board.s9 === "O")) ||
				((board.s3 === "O") && (board.s5 === "O") && (board.s7 === "O"))
				) {
				alert("O wins!!");
				gotWinner = "yes";
			}
			else if (movesCounter > 9){
				alert("It's a tie!!");
				gotWinner = "yes";
			}
			if (gotWinner === "yes") {
					for (var i = 1; i <= 9; i++) {
						$('#s' + i).html("Choose this square");
						board['s' + i] = "";
					};
				movesCounter = 0;
				playerState = true;
				// playerState = true;
			}
			return;	
		})
	// return;
	}
// return;
})
	
			
