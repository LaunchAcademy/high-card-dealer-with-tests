// card is imported because the class is needed for a test!
import Card from '../../Card.js'
import Deck from '../../Deck.js'

describe('Deck', () => {
  let firstDeck

  beforeEach(() => {
    firstDeck = new Deck()
  })

  describe('#buildDeck', () => {
    it("returns 52 cards", () => {
      expect(firstDeck.buildDeck().length).toEqual(52)
    })

    it("each of the cars is a card object", () => {
      expect(firstDeck.buildDeck()[0]).toBeInstanceOf(Card)
    })

    it("the cards returned are unique ", () => {
      expect(firstDeck.buildDeck()[0]).not.toMatchObject(firstDeck.buildDeck()[1])
    })
  })

  describe('#deal', () => {
    it("returns the top four cards of the deck as an array", () => {
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
