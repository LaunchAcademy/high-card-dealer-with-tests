import Card from '../../Card.js'

// const suits = ['♦', '♣', '♠', '♥']

describe('Card', () => {
  let twoCard
  let aceCard 

  beforeEach(() => {
    twoCard = new Card(2, '♦')
    aceCard = new Card("A", '♦')
  })

  describe('when a new Card is created', () => {
    it("returns the rank of the card when accessed", () => {
      expect(twoCard.rank).toEqual(2)
    })

    it("returns the suit of a card when accessed ", () => {
      expect(twoCard.suit).toEqual('♦')
    })
  })

  describe("#printSummary", () => {
    it("returns a string summary with the rank and suit", () => {
      expect(twoCard.printSummary()).toEqual("2♦")
    })
  })

  describe("#value", () => {
    it("returns the computed value for a number card", () => {
      expect(twoCard.value()).toEqual(2)
    })

    it("returns the computed value for a number card", () => {
      expect(aceCard.value()).toEqual(14)
    })
  })
})












































