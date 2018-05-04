class UI {
  constructor(){
    this.spaces =[];
    this.diceDisplay = document.querySelector('.dice');
    this.rollBtn = document.querySelector('.roll-btn');
    this.playerDisplay = document.getElementById('player-display')
  }

  displayCurrentPlayer(player){
    if(player === "player-1"){
      this.playerDisplay.style.background = "blue";
      this.playerDisplay.textContent = "It's Player 1's turn";
    } else if (player === "player-2"){
      this.playerDisplay.style.background = "rgb(146,68,194)";
      this.playerDisplay.textContent = "It's Player 2's turn";
    }
  }

  checkForWin(current, winning, lastSpace, player){
    console.log(`current: ${current}, winning: ${winning}`);
    if(current >= winning){
      this.clearLastSpace(lastSpace, player);
      this.rollBtn.classList.add('btn-disabled');
      setTimeout( () => alert(`${player}, you win!`), 750);
      this.spaces[19].classList.add([player]);
      return true;
    } else {
      return false;
    }
  }

  rollDisplay(roll){
    setTimeout( () => this.diceDisplay.textContent = roll, 100);
  }

  clearCurrentSpace(space, player){
      if(space >= 19){
        console.log('win!');
        return;
      } else {
        this.spaces[space].classList.remove(player);
      }
  }


  clearLastSpace(space, player){
    console.log("you/ve cleared me");
    if(space !== undefined){
      this.spaces[space].classList.remove(player);
    }
  }

  movePlayer(move, player){
    if(move >= 19){
      move = 19;
    } else {}
    setTimeout( () => this.spaces[move].classList.add(player), 750);
    console.log(`${player} moved to space#: ${move}`);
  }

}
