class Hand {
  constructor(cards) {
    this.cards = cards
  }

  // j = 11, q = 12, k = 13, a = 14
  value() {
    let totalValue = 0 

    this.cards.forEach((card) => {
      totalValue += card.value()
    })

    return totalValue
  }

  printHand() {
    let printString = ""

    this.cards.forEach((card) => {
      printString += `${card.rank}${card.suit} `
    })

    return printString 
    // formatted string of cards
  }
}

export default Hand
