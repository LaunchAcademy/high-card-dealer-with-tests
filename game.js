// import Card from './Card.js'
import Deck from './Deck.js'
import Hand from './Hand.js'

// Guiding thoughts:
// - keep console.logs in this file, so that our classes are testable 


// Log intro message
console.log("GAME START")

console.log("\n")
// initialize deck of cards 
// say how many cards are in the deck
const deck = new Deck()

console.log(deck.printSummary())
console.log("\n")


// create two hands of cards so that we can calculate their value and see what was dealt
// each hand should be initialized with four cards

const hand1 = new Hand(deck.deal(), "Player 1")
const hand2 = new Hand(deck.deal(), "Player 2")

// print out what was dealt
console.log(hand1.logSummaryOfCards())
console.log(hand2.logSummaryOfCards())
console.log("\n")

// calculate value
// display values
console.log(hand1.logValue())
console.log(hand2.logValue())
console.log("\n")

// determine winner and generate output
if (hand1.totalValue() > hand2.totalValue()){
  console.log("Player 1 wins")
}
if (hand1.totalValue() < hand2.totalValue()){
  console.log("Player 2 wins")
}
if (hand1.totalValue() === hand2.totalValue()){
  console.log("It's a tie!")
}