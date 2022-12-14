import Card from './Card.js'
import Deck from './Deck.js'
import Hand from './Hand.js'

// Guiding thoughts:
// - keep console.logs in this file, so that our classes are testable 
  // - a log is a different domain. Asserting that console.log works effectively in node is not important.
  // Passing the correct message to the log is.

console.log(`GAME START\n`)

let deck = new Deck()

console.log(`There are ${deck.cards.length} cards in the deck.\n`)

const playerOneHand = new Hand(deck.deal())
const playerTwoHand = new Hand(deck.deal())

console.log(`Player One was dealt: ${playerOneHand.printHand()}`)
console.log(`Player Two was dealt: ${playerTwoHand.printHand()}`)

const playerOneHandValue = playerOneHand.value()
const playerTwoHandValue = playerTwoHand.value() 

console.log(`Player One's hand value is: ${playerOneHandValue}`)
console.log(`Player Two's hand value is: ${playerTwoHandValue}`)

let gameSummary
if (playerOneHandValue > playerTwoHandValue){
  gameSummary = "Player One wins the game"
} else if (playerOneHandValue < playerTwoHandValue){
  gameSummary = "Player Two wins the game"
} else if (playerOneHandValue === playerTwoHandValue) {
  gameSummary = "It's a tie!"
}
console.log(gameSummary)