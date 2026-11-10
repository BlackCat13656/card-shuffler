const drawPile = document.querySelector(".draw-pile");
const discardPile = document.querySelector(".discard-pile");
const cardValueText = document.querySelector(".shuffler-text");
const restartBtn = document.querySelector(".restart-btn");

const deck = [];

deckMaker();

function deckMaker() {
  for (let i = 1; i < 14; i++) {
    for (let j = 1; j < 5; j++) {
      deck.push([i, j]);
    }
  }
}

function cardSelection() {
  const deckSize = deck.length;
  const cardPosition = Math.floor(Math.random() * deckSize);
  const card = deck.splice(cardPosition, 1);
  return card;
}

// player clicks draw pile
//   Restart Button appears

//   generateDeck ()

//   if (!lastCard) {
//     drawCard() {
//        -random draw card get put into discard pile facing up and showing its value
//        -card value text appears on paragraph container
//     }
//   } else {
//     showLastCard()

//   }

console.log(cardSelection());
console.log(deck);
