class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  value() {
    if (this.rank === "J"){
      return 11
    } 
    if (this.rank === "Q"){
      return 12
    }
    if (this.rank === "K"){
      return 13
    }
    if (this.rank === "A"){
      return 14
    }
    return this.rank
  }
}

export default Card
