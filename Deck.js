import _ from 'lodash'
import Card from './Card.js'

const suits = ['♦', '♣', '♠', '♥']
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Deck {
  constructor() {
    this.cards = this.buildDeck()
  }

  buildDeck() {
    let cards = []
    suits.forEach(suit => {
      ranks.forEach(rank => {
        cards.push(new Card(rank, suit))
      })
    })
    return _.shuffle(cards)
  }

  printSummary() {
    return `There are ${this.cards.length} cards in the deck`
  }

  deal(){
    const fourCards = []

    // retrieve a card from the deck four times 
    // put said cards into "fourCards"
    for(let i = 1; i <= 4; i++){
      fourCards.push(this.cards.pop())
    }
    // return "fourCards"
    return fourCards
  }

}

export default Deck
