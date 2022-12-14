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
    aceCard = new Card('A', '♣')
    handOne = new Hand([twoCard, threeCard, fourCard, aceCard])
  })

  describe('a hand is instantiated with the correct readable properties', () => {
    it("returns the cards of a hand when accessed", () => {
      expect(handOne.cards).toEqual([twoCard, threeCard, fourCard, aceCard])
    })
  })

  describe('#value', () => {
    it("returns the total numeric value of the cards in the hand", () => {
      expect(handOne.value()).toEqual(23)
    })
  })

  describe('#printHand', () => {
    it("returns a formatted string containing details about each card in the hand", () => {
      expect(handOne.printHand()).toEqual("2♦ 3♦ 4♦ A♣ ")
    })
  })
})
