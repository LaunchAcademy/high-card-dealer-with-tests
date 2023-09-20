import Hand from '../../Hand.js'
import Card from '../../Card.js'

// const suits = ['♦', '♣', '♠', '♥']

describe('Hand', () => {
  let handOne
  let twoCard 
  let threeCard 
  let fourCard 
  let aceCard 

  beforeEach(() => {
    twoCard = new Card(2, '♦')
    threeCard = new Card(3, '♦')
    fourCard = new Card(4, '♦')
    aceCard = new Card("A", '♦')
    handOne = new Hand([twoCard, threeCard, fourCard, aceCard], "Player 1")
  })

  describe('when a new Hand is created', () => {
    it("returns the cards of the hand when accessed", () => {
      expect(handOne.cards).toEqual([twoCard, threeCard, fourCard, aceCard])
    })
  })

  describe("#logSummaryOfCards", () => {
    it("returns a stringy digest of each of the cards in the hand", () => {
      expect(handOne.logSummaryOfCards()).toEqual("Player 1 was dealt: 2♦, 3♦, 4♦, A♦")
    })
  })

  describe("#logValue", () => {
    it("returns a string indicating the value of all of the cards in the hand", () => {
      expect(handOne.logValue()).toEqual("Player 1's hand value: 23")
    })
  })

  // .....
})
