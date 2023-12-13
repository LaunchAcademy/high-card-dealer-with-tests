import Card from '../../Card.js'

// const suits = ['♦', '♣', '♠', '♥']

describe('Card', () => {
  let cardOne
  beforeEach(() => {
    cardOne = new Card("2", "♥")
  })

  describe("#printSummary", () => {
    it("returns the rank and suit of the card", () => {
      expect(cardOne.printSummary()).toEqual(`${cardOne.rank} ${cardOne.suit}`)
    })
  })
})