// card is imported because the class is needed for a test!
import Card from '../../Card.js'
import Deck from '../../Deck.js'

//  toBeInstanceOf
// .not.toMatchObject
// .toEqual

describe('Deck', () => {
  let firstDeck

  beforeEach(() => {
    firstDeck = new Deck()
  })

  describe('#buildDeck', () => {
    it("there are 52 cards in the cards property after build deck is called", () => {
      expect(firstDeck.cards.length).toEqual(52)
    })

    it("returns an array of Card objects", () => {
      expect(firstDeck.cards[0]).toBeInstanceOf(Card)
    })
  })

  describe("#printCardSummary", () => {
    it("returns a string describing how many cards are in the deck", () => {
      expect(firstDeck.printCardSummary()).toEqual(`There are ${firstDeck.cards.length} cards in the deck.\n`)
    })
  })
  
  describe("#deal", () => {
    it("should return an array of four cards", () => {
      const dealtCards = firstDeck.deal()
      expect(dealtCards.length).toEqual(4)
    })

    it("each element should be a card", () => {
      const dealtCards = firstDeck.deal()
      // expect(dealtCards[0]).toBeInstanceOf(Card)
      dealtCards.forEach((card) => {
        expect(card).toBeInstanceOf(Card)
      })  
    })
  })
})
