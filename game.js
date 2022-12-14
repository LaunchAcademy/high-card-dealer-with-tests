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


// get the value of the hands 

const playerOneHandValue = playerOneHand.value()
const playerTwoHandValue = playerTwoHand.value()

// print out the values of the hands 

console.log(`Player One's hand value is: ${playerOneHandValue}`)
console.log(`Player Two's hand value is: ${playerTwoHandValue}`)

// determine who the winner is 

let gameSummaryMessage = ""
if (playerOneHandValue > playerTwoHandValue){
  gameSummaryMessage = "Player One wins!"
} else if (playerOneHandValue < playerTwoHandValue){
  gameSummaryMessage = "Player Two wins!"
} else if (playerOneHandValue === playerTwoHandValue){
  gameSummaryMessage = "Its a tie!"
} 

console.log(gameSummaryMessage)