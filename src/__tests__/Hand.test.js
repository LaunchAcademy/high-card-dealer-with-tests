import Hand from '../../Hand.js'
import Card from '../../Card.js'

// const suits = ['♦', '♣', '♠', '♥']

describe('Hand', () => {
  let handOne
  let twoCard 
  let threeCard
  let sixCard
  let aceCard 

  beforeEach(() => {
    twoCard = new Card(2, "♦")
    threeCard = new Card(3, "♣")
    sixCard = new Card(6, "♠")
    aceCard = new Card("A", "♥")

    handOne = new Hand([twoCard, threeCard, sixCard, aceCard])
  })

  describe("when a Hand is created", () => {
    it("has a 'cards' property that can be accessed", () => {
      expect(handOne.cards).toEqual([twoCard, threeCard, sixCard, aceCard])
    })
  })

  describe("#printHand", () => {
    it("return a string that describes what cards are in the 'cards' property", () => {
      expect(handOne.printHand()).toEqual("2♦, 3♣, 6♠, A♥")
    })
  })

  describe("#totalHandValue", () => {
    it("return the total computed value of the cards in the hand", () => {
      expect(handOne.totalHandValue()).toEqual(25)
    })
  })

})
