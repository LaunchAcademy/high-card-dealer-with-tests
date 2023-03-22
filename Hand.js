class Hand {
  constructor(arrayOfCards){
    this.cards = arrayOfCards
  }

  printHand(){
    let cardStrings = []

    this.cards.forEach((card) => {
      cardStrings.push(`${card.rank}${card.suit}`) 
    })

    return cardStrings.join(", ")
  }

  totalHandValue(){
    let total = 0

    this.cards.forEach((cardObject) => {
      total += cardObject.value
    })
 
    return total
  }
}

export default Hand
