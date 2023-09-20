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

    it("each of the cards is a card object", () => {
      expect(firstDeck.buildDeck()[0]).toBeInstanceOf(Card)
    })

    it("the cards returned are unique ", () => {
      expect(firstDeck.buildDeck()[0]).not.toMatchObject(firstDeck.buildDeck()[1])
    })
  })
  
  describe("#printSummary", () => {
    it("returns a string with a message of how many cards are in the deck", () => {
      expect(firstDeck.printSummary()).toEqual("There are 52 cards in the deck")
    })
  })

  describe('#deal', () => {
    it.only("returns the top four cards of the deck as an array of FOUR cards", () => {

      console.log(firstDeck.deal())

      expect(firstDeck.deal().length).toEqual(4)
    })

    it("ensures each of the elements returned from deal is a Card object", () => {
      firstDeck.deal().forEach((card) => {
        expect(card).toBeInstanceOf(Card)
      })
      // expect(firstDeck.deal()[0]).toBeInstanceOf(Card)
    })
  })
})
