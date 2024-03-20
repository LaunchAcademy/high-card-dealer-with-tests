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
      firstDeck.cards = []
    })

    it("returns an array of Card objects", () => {
      expect(firstDeck.cards[0]).toBeInstanceOf(Card)
    })
  })

  describe("#displayCardCount", () => {
    describe("when working with a standard 52 card deck", () => {
      it("it returns a string saying there are 52 cards", () => {
        expect(firstDeck.displayCardCount()).toEqual("There are 52 cards in the deck.")
      })
    })

    describe("when a card is added to the initial standard deck", () => {
      it("it returns a string saying there are 53 card", () => {
        const addedCard = new Card("1", "♣")
        firstDeck.cards.push(addedCard)
        expect(firstDeck.displayCardCount()).toEqual("There are 53 cards in the deck.")
      })
    })
  })

  describe("#deal", () => {
    it("remove four cards from the deck", () => {
      firstDeck.deal()
      expect(firstDeck.cards.length).toEqual(48)
    })

    it("returns an array", () => {
      expect(firstDeck.deal()).toBeInstanceOf(Array)
    })

    it("returns an array containing four cards", () => {
      expect(firstDeck.deal().length).toEqual(4)
    })

    it("returns an array of cards objects", () => {
      const dealtCards = firstDeck.deal()
      dealtCards.forEach((card) => {
        expect(card).toBeInstanceOf(Card)
      })
    })
  })
})
