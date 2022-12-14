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

