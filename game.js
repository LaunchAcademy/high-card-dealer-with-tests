// import Card from './Card.js'
import Deck from './Deck.js'
import Hand from './Hand.js'

// Guiding thoughts:
// - keep console.logs in this file, so that our classes are testable 
  // - a log is a different domain. Asserting that console.log works effectively in node is not important.
  // Passing the correct message to the log is.
// we are only so good at testing at this point. So how should we balance experimenting with code versus knowing what tests to write? 

console.log(`GAME START\n`)

const deck = new Deck()

console.log(deck.printCardSummary())

// deal four cards to each player(a Hand is sort of a player)
const playerOneCards = deck.deal()
const playerTwoCards = deck.deal()

const playerOneHand = new Hand(playerOneCards, "Player 1")
const playerTwoHand = new Hand(playerTwoCards, "Player 2")

// console.log(`Player 1 was dealt ${playerOneHand.printCardSummary()}\n`)
console.log(playerOneHand.printCardSummary())

// console.log(`Player 2 was dealt ${playerTwoHand.printCardSummary()}\n`)
console.log(playerTwoHand.printCardSummary())

console.log(playerOneHand.printTheValue())
console.log(playerTwoHand.printTheValue())

if (playerOneHand.totalValue() > playerTwoHand.totalValue()) {
  console.log("Player 1 wins")
} else if (playerOneHand.totalValue() < playerTwoHand.totalValue()) {
  console.log("Player 2 wins")
} else {
  console.log("Tie!")
}
