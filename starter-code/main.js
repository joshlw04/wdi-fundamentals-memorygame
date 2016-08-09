var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


//creates game board
var gameBoard = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i <= 3; i++) {
		//this creates the div
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		cardElement.innerHTML = '<img src="images/back.jpg">'
		gameBoard.appendChild(cardElement);
	}
}

createBoard();

//function to see if two cards are in play
function isTwoCards() {
	//'this' is grabbing the 'click' from whatever called this function
	this.innerHTML = '<img src="images/my_' + this.getAttribute('data-card') + '.jpg">'

	//'this' is the same as the line above
	cardsInPlay.push(this.getAttribute('data-card'));
	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

//function to alert if player found a match
function isMatch() {
	
	
	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You found a match!");
 		cardsInPlay = [];
	} else {
		alert("Sorry, not a match!");
		cardsInPlay = [];
	}
	
		
}

