// Define game state class
class gameState{
  constructor(space, roll, player, spaces){
    space,
    roll,
    player,
    spaces
  }

  createRandomNum(roll){
    const rollNumber = Math.floor(Math.random()*6+1);
    return rollNumber;
  }

  movePlayer(move){
    console.log(`player moved from space ${this.space}, ${this.roll} spaces`);
    this.spaces[move].classList.add(this.player);
  }

  clearCurrentSpace(space){
    this.spaces[space].classList.remove(this.player);
  }

  nextPlayer(player){
    if(player === 'player-1'){
      player = 'player-2';
    }
    return player;
  }
}
