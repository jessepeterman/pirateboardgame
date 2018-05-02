// Define game state class
class gameState{
  constructor(space, lastSpace, nextSpace, roll, player, spaces){
    space,
    lastSpace,
    nextSpace,
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
        this.spaces[this.space].classList.remove(this.player);
    //   console.log(`Cleared space #${space}`);
    //   if(this.player === 'player-1'){
    //   this.spaces[this.space].classList.remove('player-2');
    // } else if(this.player === 'player-2'){
    //     this.spaces[this.space].classList.remove('player-1');
    //   }
  }

  clearLastSpace(space){
    if(this.lastSpace !== undefined){
      this.spaces[this.lastSpace].classList.remove(this.player);
    }
  }

  nextPlayer(player){
    if(player !== ''){
      if(player === 'player-1'){
        player = 'player-2';
      } else if(player === 'player-2'){
        player = 'player-1';
      }
    } else {
      turn.generateFirstPlayer();
    }
    return player;
  }

  generateFirstPlayer(player){
    const randomPlayer = Math.floor(Math.random()*2+1);

      if(randomPlayer === 1){
        player = 'player-1';
      } else if(randomPlayer === 2){
        player = 'player-2';
      } else {
        return player;
      }
      return player;
    }

}
