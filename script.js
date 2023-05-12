var images = [
    "imgs/Love1.png",
    "imgs/img-me-6.png",
    "imgs/img-me-7.png",
    "imgs/img-me-1.png",
    "imgs/img-me-2.png",
    "imgs/img-me-3.png", 
    "imgs/img-me-4.png", 
    "imgs/img-me-5.png" 
  ];
  
var gameBoard = document.getElementById("game-board");
var startButton = document.getElementById("start-button");
var cards = [];
var flippedCards = [];
var matchedCards = [];

function createCard(image) {
  var card = document.createElement("div");
  card.className = "card";

  var front = document.createElement("div");
  front.className = "front";
  front.style.backgroundImage = "url('" + image + "')";

  var back = document.createElement("div");
  back.className = "back";

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", flipCard);

  return card;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function startGame() {
  var shuffledImages = shuffle(images.concat(images));
  for (var i = 0; i < shuffledImages.length; i++) {
    var card = createCard(shuffledImages[i]);
    cards.push(card);
    gameBoard.appendChild(card);
  }
}

function flipCard() {
  if (
    flippedCards.length < 2 &&
    !this.classList.contains("flipped") &&
    !matchedCards.includes(this)
  ) {
    this.classList.add("flipped");
    flippedCards.push(this);
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}

function checkMatch() {
  var card1 = flippedCards[0];
  var card2 = flippedCards[1];

  var image1 = card1.firstChild.style.backgroundImage;
  var image2 = card2.firstChild.style.backgroundImage;

  if (image1 === image2) {
    matchedCards.push(card1, card2);
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }

  flippedCards = [];

  if (matchedCards.length === cards.length) {
    setTimeout(function () {
      alert("Parabéns! Você venceu o jogo!");
      resetGame();
    }, 500);
  }
}

function resetGame() {
  gameBoard.innerHTML = "";
  cards = [];
  flippedCards = [];
  matchedCards = [];
  startButton.disabled = false;
}

function showCards() {
  for (var i = 0; i <  cards.length; i++) {
    cards[i].classList.add("flipped");
  }

  setTimeout(function () {
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove("flipped");
    }
    startButton.disabled = true;
  }, 5000);
}

startButton.addEventListener("click", showCards);
startGame();

// Quanto me AMA
function verificarAmor() {
  const numeroInput = document.getElementById('numero');
  const numero = parseInt(numeroInput.value);
  
  if (numero <= 0) {
    alert("Você não min ama :(((");
  }
  else if (numero < 1000) {
    alert("Eu amo mais bobão!!");
  }
  else if (numero <= 10000) {
    alert("Eu amo muitão mais bobão!!");
  }
  else if (numero <= 100000000) {
    alert("Você me ama bastante mas eu amo mais!!");
  }
  else if (numero <= 100000000) {
    alert("Desiste eu amo maissss");
  }
  else if (numero <= 10000000000) {
    alert("Vamos parar!! Eu amo engual okay");
  }
  else if (numero <= 1000000000000000) {
    alert("Viuuu se num desiste né! A gente ama engual!!!");
  }
}
