class Hand {
  constructor(cards) {
    this.cards = cards
  }

  printHand(){
    let printString = ""
    
    this.cards.forEach((card) => {
      printString += `${card.rank}${card.suit} `
    })

    return printString
  }

  value(){
    let totalValue = 0 
    
    this.cards.forEach((card) => {
      totalValue += card.value() 
    })
    
    return totalValue
  }


}

export default Hand
