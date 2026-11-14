const drawPile = document.querySelector(".draw-pile");
const discardPile = document.querySelector(".discard-pile");
const textLabel = document.querySelector(".text-label");
const restartBtn = document.querySelector(".restart-btn");

const deck = [];

deckMaker();

function drawCard() {
  if (deck.length === 52) {
    restartBtn.style.visibility = "visible";
    discardPile.classList.add("active");
    textLabel.classList.add("active");
  }

  if (deck.length === 1) {
    drawPile.disabled = true;
    textLabel.classList.remove("active");
    textLabel.textContent = "That's the last card, partner!";
  }

  const [card] = cardSelection();
  const [value, suit] = card;

  if (suit === "♥" || suit === "♦") {
    discardPile.style.color = "var(--red-color)";
  } else {
    discardPile.style.color = "var(--text-color)";
  }

  discardPile.innerHTML = `<div class="card-top-value">
                <span class="value">${value}</span>
                <span class="suit">${suit}</span>
              </div>
              <div class="card-middle-value">${suit}</div>
              <div class="card-bottom-value">
                <span class="value">${value}</span>
                <span class="suit">${suit}</span>
              </div>`;
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

function restartShuffle() {
  deck.length = 0;
  deckMaker();

  discardPile.classList.remove("active");
  discardPile.innerHTML = `<span class="discard-label">Discard</span>`;
  discardPile.style.color = "";

  textLabel.classList.remove("active");
  textLabel.textContent = "Click the deck to draw";
  restartBtn.style.visibility = "hidden";
  drawPile.disabled = false;

  drawPile.focus();
}

// EVENT LISTENERS
drawPile.addEventListener("click", drawCard);
restartBtn.addEventListener("click", restartShuffle);
