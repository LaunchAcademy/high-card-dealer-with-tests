// card is imported because the class is needed for a test!
import Card from '../../Card.js'
import Deck from '../../Deck.js'

describe('Deck', () => {
  let firstDeck

  beforeEach(() => {
    firstDeck = new Deck()
  })

  // we could test the following, but it would be especially redundant considering that our `cards` property will hold the return value of `buildDeck`
  // describe('a deck is instantiated with the correct readable properties', () => {
  //   it("the cards property contains the correct number of cards", () => {
  //     expect(firstDeck.cards.length).toEqual(52)
  //   })
  // })

  describe('#buildDeck', () => {
    it("returns 52 cards", () => {
      expect(firstDeck.buildDeck().length).toEqual(52)
    })

    it("each of the cards is a card object", () => {
      expect(firstDeck.buildDeck()[0]).toBeInstanceOf(Card)
    })

    it("the cards property contains unique cards", () => {
      expect(firstDeck.buildDeck()[0]).not.toMatchObject(firstDeck.buildDeck()[1])
    })
  })

  describe('#deal', () => {
    it("returns the top four cards of a deck as an array", () => {
      const newDeck = new Deck()
      const lastFourCards = newDeck.cards.slice(-4)
      const dealtCards = newDeck.deal()

      expect(dealtCards).toContain(lastFourCards[0])
      expect(dealtCards).toContain(lastFourCards[1])
      expect(dealtCards).toContain(lastFourCards[2])
      expect(dealtCards).toContain(lastFourCards[3])
    })
  })
})
