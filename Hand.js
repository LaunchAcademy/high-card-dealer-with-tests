class Hand {
  constructor(fourCards, playerString){
    this.cards = fourCards
    this.player = playerString
  }

  logSummaryOfCards(){
    let summaryString = `${this.player} was dealt: `

    const cardStringsArray = this.cards.map((card) => {
      return card.printSummary()
    })

    return summaryString += cardStringsArray.join(", ")
    // return summaryString + this.cards.map(card => `${card.rank}${card.suit}`).join(", ")
  }

  totalValue(){
    let totalValue = 0
    this.cards.forEach(card => {
      totalValue += card.value()
    })
    return totalValue
  }

  logValue(){
    return `${this.player}'s hand value: ${this.totalValue()}`
  }
}

export default Hand
