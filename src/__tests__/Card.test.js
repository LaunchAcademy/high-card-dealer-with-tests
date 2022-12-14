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

  describe('#value', () => {
    describe("when the card is numeric", () => {
      it("returns the correct number value", () => {
        expect(twoCard.value()).toEqual(2)
      })
    })

    describe("when the card is a face card", () => {
      it("returns the correct game value", () => {
        expect(aceCard.value()).toEqual(14)
      })
    })
  })
})












































