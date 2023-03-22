import Deck from './Deck.js'
import Hand from './Hand.js'

// Guiding thoughts:
// - keep console.logs in this file, so that our classes are testable 
  // - a log is a different domain. Asserting that console.log works effectively in node is not important.
  // Passing the correct message to the log is.

console.log(`GAME START\n`)

const deckOne = new Deck()

console.log(`There are ${deckOne.cards.length} cards in the deck.\n`)

const cardsForPlayerOne = deckOne.deal()
const cardsForPlayerTwo = deckOne.deal()

const playerOne = new Hand(cardsForPlayerOne)
const playerTwo = new Hand(cardsForPlayerTwo)

console.log(`Player 1 was dealt ${playerOne.printHand()}`)
console.log(`Player 2 was dealt ${playerTwo.printHand()}`)

console.log("\n")

console.log(`Player 1's hand value: ${playerOne.totalHandValue()}`)
console.log(`Player 2's hand value: ${playerTwo.totalHandValue()}`)

if (playerOne.totalHandValue() > playerTwo.totalHandValue()) {
  console.log("Player One wins the game!")
} else if (playerOne.totalHandValue() < playerTwo.totalHandValue()) {
  console.log("Player Two wins the game!")
} else {
  console.log("Tie!")
}

