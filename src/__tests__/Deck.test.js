// Card is imported because the class is needed for a test!
import Card from '../../Card.js'
import Deck from './../../Deck.js'

describe('Deck', () => {
  let firstDeck

  beforeEach(() => {
    firstDeck = new Deck()
  })



  describe('#buildDeck', () => {

    it("returns an array of with a length of 52", () => {
      expect(firstDeck.buildDeck().length).toEqual(52)
    })
    
    it("creates card objects", () => {
      expect(firstDeck.buildDeck()[0]).toBeInstanceOf(Card)
      // expect(firstDeck.cards[0]).toBeInstanceOf(Card)
    })
  })

  describe('#deal', () => {
    it("returns an array", () => {
      expect(firstDeck.deal()).toBeInstanceOf(Array)
    })

    it("returns an array of four elements", () => {
      expect(firstDeck.deal().length).toEqual(4)
    })

    it("returns an array made up of Card object", () => {
     expect(firstDeck.deal()[0]).toBeInstanceOf(Card)
      // firstDeck.deal().forEach((card) => {
      //   expect(card).toBeInstanceOf(Card)
      // })
    })
  })
})








