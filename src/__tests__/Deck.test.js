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
    it("returns 52 cards", () => {
      expect(firstDeck.buildDeck().length).toEqual(52)
    })
  })
  
  // printSummary
})
