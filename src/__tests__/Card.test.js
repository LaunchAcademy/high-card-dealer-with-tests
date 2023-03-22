import Card from '../../Card.js'

// const suits = ['♦', '♣', '♠', '♥']

describe('Card', () => {
  let twoCard
  let aceCard

  beforeEach(() => {
    twoCard = new Card(2, "♦")
    aceCard = new Card("A", "♥")
  })

  describe("when a Card is created", () => {
    it("has a rank property that can be accessed", () => {
      expect(twoCard.rank).toEqual(2)
    })

    it("has a suit property that can be accessed", () => {
      expect(twoCard.suit).toEqual("♦")
    })
  })

  describe("#value", () => {
    describe("when the card is a number card", () => {
      it("returns the number value", () => {
        expect(twoCard.value()).toEqual(2)
      })
    })

    describe("when the card is a face card", () => {
      it("returns the appropriate number value", () => {
        expect(aceCard.value()).toEqual(14)
      })
    })
  })












































