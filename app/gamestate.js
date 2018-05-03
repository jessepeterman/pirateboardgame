// Define game state class
class gameState{
  constructor(space, lastSpace, nextSpace, roll, player, spaces, turn){
    space,
    lastSpace,
    nextSpace,
    roll,
    player,
    spaces,
    turn
  }

  createRandomNum(roll){
    const rollNumber = Math.floor(Math.random()*6+1);
    return rollNumber;
  }

  movePlayer(move){
    if(move > 20){
      move = 20;
    }
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

    checkForWin(current, winning){
      console.log(`current: ${current}, winning: ${winning}`);
      if(current >= winning){
        rollBtn.classList.add('btn-disabled');
        setTimeout( () => alert(`${this.player}, you win!`), 750);
        this.spaces[20].classList.add(this.player);
        return true;
      } else {
        return false;
      }
    }

    displayCurrentPlayer(){
      if(currentPlayer === "player-1"){
        playerDisplay.style.background = "blue";
        playerDisplay.textContent = "It's Player 1's turn";
      } else if (currentPlayer === "player-2"){
        playerDisplay.style.background = "rgb(146,68,194)";
        playerDisplay.textContent = "It's Player 2's turn";
      }
    }

    iteratePlayerTurn(p1, p2){
      if(currentPlayer === 'player-1'){
        p1++;
        console.log(`player 1 turn number: ${p1}`);
      } else if(currentPlayer === 'player-2'){
        console.log("it's player 2's turn...");
        p2++;
        console.log(`player 2 turn number: ${p2}`);
      }
    }

    checkForFirstTurn(p1, p2, space){
      if(p1 === 0){
      return (space = 0);
      } else if(p2 === 0){
        return (space = 0);
      }
    }

}
