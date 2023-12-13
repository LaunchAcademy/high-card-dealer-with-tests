class Hand {
  constructor(arrayOfFourCards, playerName) {
    this.cards = arrayOfFourCards
    this.playerName = playerName
  }

  printCardSummary() {
    let summaryString = `${this.playerName} was dealt `

    this.cards.forEach((card) => {
      let cardString = `${card.printSummary()} `
      summaryString += cardString
    })

    return summaryString
  }

  totalValue() {
    let handTotal = 0
    this.cards.forEach(card => {
      handTotal += card.value()
    })
    return handTotal
  }

  printTheValue() {
    return `${this.playerName}'s hand value: ${this.totalValue()}`
  }
}

export default Hand