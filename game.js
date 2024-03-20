// import Card from './Card.js'
import Deck from './Deck.js'
import Hand from './Hand.js'
import determineWinner from './determineWinner.js'

// Guiding thoughts:
// - keep console.logs in this file, so that our classes are testable 
  // - a log is a different domain. Asserting that console.log works effectively in node is not important.
  // Passing the correct message to the log is.
// we are only so good at testing at this point. So how should we balance experimenting with code versus knowing what tests to write? 

console.log(`GAME START\n`)

const deck = new Deck()

console.log(deck.displayCardCount())

const playerOneFourCards = deck.deal()
const playerTwoFourCards = deck.deal()

const playerOneHand = new Hand(playerOneFourCards, "Player 1")
const playerTwoHand = new Hand(playerTwoFourCards, "Player 2")

console.log(playerOneHand.displayCards())
console.log(playerTwoHand.displayCards())

console.log(playerOneHand.displayCardTotal())
console.log(playerTwoHand.displayCardTotal())

console.log(determineWinner(playerOneHand, playerTwoHand))