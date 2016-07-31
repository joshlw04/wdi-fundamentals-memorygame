console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

/*if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else if (cardOne && cardThree); {
	alert("Sorry, not a match!");
}
*/

var gameBoard = document.getElementById('game-board');

function createBoard() {
	for (var i = 1; i <= 4; i++) {
	var card = document.createElement('div');
	card.className = 'card';
	gameBoard.appendChild(card);
	}
}

createBoard();

























/*
var gameBoard = document.createElement('div');
var card = document.createElement('div');

f
}

function createBoard() {
	for (i = 0; i <=4; i++ ) {
		document.createElement('div');
		
	}
	
}
*/