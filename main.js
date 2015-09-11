$(function() {
	var playerState = true;
	var playerOneWin = 0;
	var playerTwoWin = 0;
	var board = {
		s1 : "", s2 : "", s3 : "", 
		s4 : "", s5 : "", s6 : "", 
		s7 : "", s8 : "", s9 : "",
	};
	var movesCounter = 0;
	var boardReset = function() {
		for (var i = 1; i <= 9; i++) {
			$('#s' + i).html("");
			board['s' + i] = "";
		};
		movesCounter = 0;
		playerState = true;
		$(".square").removeClass("deny");
	}
	confirm("Shall we play a game?");
	confirm("How about Global Thermonuclear War?");
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
	$("#newGame").on("click", function() {
		boardReset();
	});
	$("#newRound").on("click", function() {
		location.reload();
	})
	if (playerOne === "x") {
		$("button.square").on("click", function(){
			var gotWinner;
			var boardPlace;
			var boardPlaceId = $(this).attr('id');
			boardPlace = $("#" + boardPlaceId);

			if ($(this).hasClass("deny")) {
        	alert("I don't think so!")
        	return;
        }
			else if (playerState == true) {
				(boardPlace).html("X");
				playerState = false;
				board[boardPlaceId] = "X";
				boardPlace.addClass("deny");
				}
			else if (playerState == false){
				(boardPlace).html("O");
				playerState = true;
				board[boardPlaceId] = "O";
				boardPlace.addClass("deny");
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
				gotWinner = "yes";
				playerOneWin ++;
				$("#playerOneScore").text(playerOneWin);
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
				playerTwoWin ++;
				$("#playerTwoScore").text(playerTwoWin);
				alert("O wins!!");
			}
			else if (movesCounter === 9){
				alert("It's a tie!!");
				gotWinner = "yes";
			}
			if (gotWinner === "yes") {
				boardReset();
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

			if ($(this).hasClass("deny")) {
        	alert("I don't think so!")
        	return;
        }
			else if (playerState == true) {
				(boardPlace).html("O");
				playerState = false;
				board[boardPlaceId] = "O";
				boardPlace.addClass("deny");
				}
			else if (playerState == false){
				(boardPlace).html("X");
				playerState = true;
				board[boardPlaceId] = "X";
				boardPlace.addClass("deny");
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
				playerTwoWin ++;
				$("#playerTwoScore").text(playerTwoWin);
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
				playerOneWin ++;
				$("#playerOneScore").text(playerOneWin);
				alert("O wins!!");
				gotWinner = "yes";
			}
			else if (movesCounter === 9){
				alert("It's a tie!!");
				gotWinner = "yes";
			}
			if (gotWinner === "yes") {
				boardReset();
			}
			return;	
		})

	// return;
	}

// return;
})
	
			
