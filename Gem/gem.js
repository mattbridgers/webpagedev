//stub function, doesn't to anything
function TODO()
{
		console.log('TODO - something needs to be coded');
}

//global variable for the gem
var gem;

//returns the gem position based on the number of squares on the board
function newGem(size)
{
	console.log('new game');
	//TODO - replace below with logic to randomize the gem position
	gem = Math.floor(Math.random() * 9) + 1;
	console.log('new game number: ' + gem);
	return gem;
}

//the size variable will allow for bigger gameboards in later editions
function buildGameBoard(size)
{
	console.log('build game board');
	
	var gameBoardDiv = jQuery('#gameBoard');
	var colSize = Math.sqrt(size);
	var rowSize = Math.sqrt(size);
	var gameBoard = '';
	//using a counter to id the game board pieces, later used to match guesses to gem position
	var counter = 1;
	
	//build the game board using two for loops for rows, then columns
	for(var row=0; row<rowSize; row++)
	{
		gameBoard += '<div class="gameBoardRow">';
		for(var col=0; col<colSize; col++)
		{
			gameBoard += '<div id="'+ counter +'" class="gameSquare" onclick="checkGuessClick(this.id)">'+ counter++ +'</div>';
		}
		gameBoard += '</div>';
		gameBoard += "<br />";
	}
	
	//attach the board via jQuery and DOM manipulation
	gameBoardDiv.append( gameBoard );
	
	//generate the gem position
	newGem(size);
}

/*
	adds click events to the game board divs.
*/
function checkGuessClick( guess )
{
	console.log('check guess click ' + guess + ' gem value ' + gem);
	var gamePiece = '#'+guess;
	var message = document.getElementById("message");
	var guessSquare = document.getElementById(guess);
	
	//TODO - insert logic here to check the guess
	if( guess == gem )
	{
		message.innerHTML = "<p>Correct Guess</p>";
		guessSquare.innerHTML = "*";
	}
	else
	{
		message.innerHTML = "<p>Wrong Guess</p>";
		guessSquare.innerHTML = "X";
	}
	  else if(guess > 9) {
                        alert("not allowable");
                       
}

//make sure guess is in the allowable values (nine squares, possible guess 1-9)
//see if guess matches the assigned squre for the gem
function checkGuessButton( guess )
{
	console.log('check guess button');
	
	var guess = jQuery('#inputGuess')[0].value;
	
	console.log( jQuery('#inputGuess')[0] );
	
	var gamePiece = '#'+guess;
	
	if( guess == gem )
	{
		
	}
	else
	{
		
	}

	//TODO - insert logic here
	//TODO - use div id message to display any necessary messages
}

//this function resets the gameboard and clears the game message and generates a new gem
function clearGameBoard(size)
{
	for(var i=0; i<=size; i++)
	{
		jQuery('#'+i).html(i);
	}
	jQuery('#message').html('');
	
	newGem(size);
	
}
