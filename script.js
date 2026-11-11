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

function startShuffler() {
  if (deck.length != 0) {
    restartBtn.style.visibility = "visible";
  }

  const [card] = cardSelection();
  cardValueText.innerText = [...card];
}

// Generate a 52 standard card deck
function deckMaker() {
  for (let i = 1; i < 14; i++) {
    for (let j = 1; j < 5; j++) {
      deck.push([i, j]);
    }
  }
}

// extracts a single card from deck and returns it, deck updated
function cardSelection() {
  const deckSize = deck.length;
  const cardPosition = Math.floor(Math.random() * deckSize);
  const card = deck.splice(cardPosition, 1);
  return card;
}

// EVENT LISTENERS
drawPile.addEventListener("click", startShuffler);
