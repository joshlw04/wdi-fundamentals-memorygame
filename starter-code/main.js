var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var dataCardNumber = [];


//creates game board
var gameBoard = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i <= 3; i++) {
				//this creates the div:
		var cardElement = document.createElement('div');
				//gives the div var the class name of 'card':
		cardElement.className = 'card';
				//adds a data attribute of 'data-card' to each card, while the cards[i] assigns the string to the data card based on the index number:
		cardElement.setAttribute('data-card', cards[i]);
				//adds a data attribute of 'data-card-number' to each card, while the i assigns the index number to the data card (to make sure we dont click the same card twice):
		cardElement.setAttribute('data-card-number', i);
				//sets a click event listener, which then will run the function isTwoCards:
		cardElement.addEventListener('click', isTwoCards);
				//adds the image to 'back' of each div:
		cardElement.innerHTML = '<img src="images/back.jpg">'
				//finally, the cardElement divs (with all the above attributes/data) are appended to the gameBoard div
		gameBoard.appendChild(cardElement);
	}
}

createBoard();

//function to see if two cards are in play
function isTwoCards() {
	//'this' is grabbing the 'click' from whatever called this function, in this case the event Listener
	this.innerHTML = '<img src="images/my_' + this.getAttribute('data-card') + '.jpg">'

	//'this' is the same as the line above, from the click event inside gameBoard. Also, its pushing the data- attribute into the corresponding array:
	cardsInPlay.push(this.getAttribute('data-card'));
	dataCardNumber.push(this.getAttribute('data-card-number'));

	//this just tests to see which cards get pushed into the arrays:
	console.log(cardsInPlay);
	console.log(dataCardNumber);

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		dataCardNumber = [];
	}
}

//function to alert if player found a match
function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match!");
 		cardsInPlay = [];
	} else {
 		alert("Sorry, not a match!");
 		cardsInPlay = [];
		var allCards = document.getElementsByClassName('card');
		for (var i = 0; i <= allCards.length; i++) {
			console.log(allCards[i]);
			allCards[i].innerHTML = '<img src="images/back.jpg">';

		}
// 		innerHTML = '<img src="images/back.jpg">';

	}
}




















