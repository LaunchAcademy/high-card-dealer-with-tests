import Card from '../../Card.js'

// const suits = ['♦', '♣', '♠', '♥']

describe('Card', () => {
  let twoCard
  let aceCard

  // the setup or the "given"
  beforeEach(() => {
    twoCard = new Card(2, '♦')
    aceCard = new Card(17, '♣')
  })

  // ideally, all tests have a describe, and it. Never one without the other

  // consider: given, when, then

  describe("when a card is created", () => {
    it("is instantiated with a rank property", () => {
      expect(twoCard.rank).toEqual(2)
    })

    it("is instantiated with a suit property", () => {
      expect(twoCard.suit).toEqual('♦')
    })
  })

  describe("#value", () => {
    describe("when the card is a numeric card", () => {
      it("returns the numeric value of the card", () => {
        expect(twoCard.value()).toEqual(2)
      })
    })

    describe("when the card is a face card", () => {
      it("returns the special face card value of the card", () => {
        expect(aceCard.value()).toEqual(14)
      })
    })
  })











































  // describe('a card is instantiated with the correct readable properties', () => {
  //   it("returns the rank of the card when accessed", () => {
  //     expect(twoCard.rank).toEqual(2)
  //   })

  //   it("returns the suit of a card when accessed ", () => {
  //     expect(twoCard.suit).toEqual('♦')
  //   })
  // })
  // we don't need to test an ace, because we can fairly assume that it would not have any different functionality

  // describe('#value', () => {
  //   it("returns the number value of a number card", () => {
  //     expect(twoCard.value()).toEqual(2)
  //   })

  //   // we need to test an additional card because the logic of `value` evaluates differently for "face" cards
  //   it("returns the correct number value for face cards (ace)", () => {
  //     expect(aceCard.value()).toEqual(14)
  //   })
  // })
})
