# tic-tac-toe

This is a basic tic-tac-toe game using HTML, CSS and JavaScript with Bootstrap and jQuery.

It can be accessed here:
http://financial-controller-patrick-25070.bitballoon.com/

My approach was to create stories and build my site in this order I listed these. I began with a wireframe. Then did pseudocode for the HTML and CSS needed to create the board grid and buttons and implemented the code. I also built an object in JS to hold the board places.

I then did pseudocode for the move selection button clicks and did the JS code using the .on("click") function and arguement. I also implemented JS code to not allow to a square to be chosen twice. (without pseudocoding) This worked when a square was clicked on a second time but then the game piece changed on every click after. After working on this for a few hours, I decided to move on.

I then did the code (without pseudocoding) for the player alternation. I got stuck on this for hours due to setting a varialbe in the wrong place. This taught me to pseudocode! The code uses a player state that alternates between true and false to determine who's move it is.

Next I did pseudocode for determining a winner. I then wrote the JS pretty easily using if/else if/else statements.

Next I did pseudocode to determine a tie. I easily did this using a counter in my JS counting up to 9 moves. However, I struggled for a little on an edge case - when a player wins in 9 moves. This was alerting a win for the player and then a tie after the fist alert was cleared. I fixed this by changing the 'else' statement in front of the tie determination to 'else if'.

At this point I revisited not allowing a player to choose a square already occupied. A fellow student showed me the .addClass function which I then implemented and got this to work.

Next I pseudocoded my clear screen functionality. In JS, I created a function that reset all of the keys in the board object to empty strings, remove the text from the onscreen board, reset the move counter, reset the player state to true and remove the 'deny' class from the board buttons.

Next I went into my CSS and added new fonts, a background image and basically made the game pretty.

Finally, I pseudocoded the scoreboard and implemented it in JS using a games won counter and the jQuery .text function to update the board.

The only unsolved problem at this point for me is making my code DRY. I would like to clean it up a bit.
