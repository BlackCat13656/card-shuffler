// player clicks draw pile
// start Button appears
// generateDeck ()
// if (!lastCard)
// drawCard()
// -random draw card get put into discard pile facing up and showing its value
// -card value text appears on paragraph container
// else
// showLastCard()

const drawPile = document.querySelector(".draw-pile");
const discardPile = document.querySelector(".discard-pile");
const cardValueText = document.querySelector(".shuffler-text");
const restartBtn = document.querySelector(".restart-btn");

const deck = [];

deckMaker();

function drawCard() {
  if (deck.length === 52) {
    restartBtn.style.visibility = "visible";
  }

  if (deck.length === 0) {
    drawPile.disabled = true;
    cardValueText.textContent = "No more cards in the deck!";
  }

  const [card] = cardSelection();
  const [value, suit] = card;
  cardValueText.textContent = `${value} of ${suit}`;
}

// Generate a 52 standard card deck
function deckMaker() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const suits = ["♠", "♥", "♦", "♣"];

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push([values[i], suits[j]]);
    }
  }
}

// extracts a single card from deck and returns it, deck updated
function cardSelection() {
  const deckLength = deck.length;
  const cardPosition = Math.floor(Math.random() * deckLength);
  const card = deck.splice(cardPosition, 1);
  return card;
}

// EVENT LISTENERS
drawPile.addEventListener("click", drawCard);
