class Player {
  constructor(name, color, currentSpace, nextSpace, turnNumber, isTurn){
    name,
    color,
    currentSpace,
    nextSpace,
    turnNumber,
    isTurn
  }

  iterateTurn(){
    console.log(`${this.name}'s turn number is: ${this.turnNumber}`)
  }
}
