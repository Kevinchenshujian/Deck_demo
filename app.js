//Deck implementation using function
function initializeDeck() {
  const deck = [];
  const suits = ["heart", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numberCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numberCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);

//Deck implementation using object, which reduce multiple arguments input, and
//make the code more clear

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["heart", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    console.log(values);
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numberCards) {
    const cards = [];
    for (let i = 0; i < numberCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
