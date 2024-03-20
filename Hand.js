class Hand {
  constructor(arrayOfCards, playerName) {
    this.cards = arrayOfCards
    this.playerName = playerName
  }

  displayCards() {
    let cardSummaryString = `${this.playerName} was dealt`
    this.cards.forEach(card => {
      cardSummaryString += ` ${card.rank}${card.suit},`
    })

    cardSummaryString = cardSummaryString.slice(0, -1); 
    return cardSummaryString
  }

  displayCardTotal() {
    //  computes the total value of the cards in the hand 
    const cardTotal = this.cardTotal()

    // spits out a string describing that total for the player
     return `${this.playerName}'s hand value: ${cardTotal}`
  }

  cardTotal() {
    let valueSum = 0
    this.cards.forEach(card => {
      valueSum += card.value()
    })
    return valueSum
  }
}

export default Hand