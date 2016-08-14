var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var dataCardNumber = [];
var score = 0;

var gameBoard = document.getElementById('game-board'); //creates game board


function createBoard() {
	gameBoard.innerHTML = '';
	for (var i = 0; i <= 3; i++) {
		var cardElement = document.createElement('div'); //this creates the div:
		cardElement.className = 'card'; //gives the div var the class name of 'card':
		cardElement.setAttribute('data-card', cards[i]); //adds a data attribute of 'data-card' to each card, while the cards[i] assigns the string to the data card based on the index number:
		cardElement.setAttribute('data-card-number', i); //adds a data attribute of 'data-card-number' to each card, while the i assigns the index number to the data card (to make sure we dont click the same card twice):
		cardElement.addEventListener('click', isTwoCards); //sets a click event listener, which then will run the function isTwoCards:
		cardElement.style.backgroundImage = "url('images/back.jpg')";
		gameBoard.appendChild(cardElement); //finally, the cardElement divs (with all the above attributes/data) are appended to the gameBoard div
	}
}

createBoard();

function isTwoCards() { //function to see if two cards are in play
	console.log('The two cards function is starting');
	
	//'this' is grabbing the 'click' from whatever called this function, in this case the event Listener
	//'this.getAttribute('data-card')' equates to 'queen' or 'king' depending on which 'this' is being called
	this.style.backgroundImage = "url('images/my_" + this.getAttribute('data-card') + ".jpg')";
	cardsInPlay.push(this.getAttribute('data-card')); //'this' is the same as the line above, from the click event inside gameBoard. Also, it's pushing the data- attribute into the corresponding array:
	dataCardNumber.push(this.getAttribute('data-card-number'));
	console.log(cardsInPlay); //this just tests to see which cards get pushed into the arrays:
	console.log(dataCardNumber);

	if (cardsInPlay.length === 2) {
		console.log('this is the second card clicked');
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

//function to alert if player found a match
function isMatch() {
	console.log('the isMatch function is starting');
	if (cardsInPlay[0] === cardsInPlay[1]) {
		document.getElementById('match').textContent = "Thats a match!"
		console.log(cardsInPlay);
		console.log(dataCardNumber);
		flipCardsWhenDone();
		score += 1;
		document.getElementById('score').textContent = "Your score is now " + score + "!"
	} else if (dataCardNumber.length === 2 && cardsInPlay[0] != cardsInPlay [1]) {
		console.log('the cards arent a match, need to flip wrong cards here');
		document.getElementById('match').textContent = "Sorry, try again!"

		console.log(cardsInPlay);
		flipWrongCards();
	}
}

	//this function needs to run when all cards are flipped over
	//it will turn all the cards from queen/king to back.img
function flipCardsWhenDone() {
	if (dataCardNumber.length === 4) {
		document.getElementById('match').textContent = "Congratulations! You found all the matches! Keep going to increase your score!"
		dataCardNumber = [];
		createBoard();
	}
}

	//this function will run when two cards are flipped AND they are not matches
function flipWrongCards() {
	dataCardNumber = [];
	createBoard();
}