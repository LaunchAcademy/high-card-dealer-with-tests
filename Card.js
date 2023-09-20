class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  printSummary(){
    return `${this.rank}${this.suit}`
  }

  value(){
    if (this.rank === "J"){
      return 11
    } 
    if (this.rank === "Q") {
      return 12
    }
    if (this.rank === "K") {
      return 13
    } 
    if (this.rank === "A") {
      return 14
    }
    return this.rank 
  }

}

export default Card







// static outputCardMaterial() {
//   return "paper"
// }

// static generateJokerCard(){
//   return new Card("Joker", "")
// }

// static generateRandomCard(){
//   // find a random combo of rank and suit
//   return newCard(randomRank, randomSuit)
// }