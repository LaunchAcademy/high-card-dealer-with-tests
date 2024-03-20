const determineWinner = (playerOne, playerTwo) => {
  if (playerOne.cardTotal() > playerTwo.cardTotal()) {
    return `${playerOne.playerName} wins the game!`
  } else if (playerOne.cardTotal() < playerTwo.cardTotal()) {
    return `${playerTwo.playerName} wins the game!`
  } else {
    return "Tie!"
  }
}

// does this function only return something, or does it also manipulate a variable outside of its scope
// does it refer to variables outside of its scope

export default determineWinner
