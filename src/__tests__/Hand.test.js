import Hand from '../../Hand.js'
import Card from '../../Card.js'

// const suits = ['♦', '♣', '♠', '♥']

describe('Hand', () => {
  let handOne 
  let cardOne 
  let cardTwo 
  let cardThree 
  let cardFour

  beforeEach(() => {
    cardOne = new Card("2", "♥")
    cardTwo = new Card("3", "♥")
    cardThree = new Card("4", "♥")
    cardFour = new Card("A", "♥")
    handOne = new Hand([cardOne, cardTwo, cardThree, cardFour])
  })

  describe("#printCardSummary", () => {
    it("returns a string describing the player and the player's cards", () => {
    })
  })
})
