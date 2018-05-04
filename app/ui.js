class UI {
  constructor(){
    this.spaces =[];
    this.space1 = document.querySelector('.space1');
    this.space2 = document.querySelector('.space2');
    this.space3 = document.querySelector('.space3');
    this.space4 = document.querySelector('.space4');
    this.space5 = document.querySelector('.space5');
    this.space6 = document.querySelector('.space6');
    this.space7 = document.querySelector('.space7');
    this.space8 = document.querySelector('.space8');
    this.space9 = document.querySelector('.space9');
    this.space10 = document.querySelector('.space10');
    this.space11 = document.querySelector('.space11');
    this.space12 = document.querySelector('.space12');
    this.space13 = document.querySelector('.space13');
    this.space14 = document.querySelector('.space14');
    this.space15 = document.querySelector('.space15');
    this.space16 = document.querySelector('.space16');
    this.space17 = document.querySelector('.space17');
    this.space18 = document.querySelector('.space18');
    this.space19 = document.querySelector('.space19');
    this.space20 = document.querySelector('.space20');
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
    if(current >= winning-1){
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
        return;
      } else {
        this.spaces[space].classList.remove(player);
      }
  }


  clearLastSpace(lastSpace, player){
    console.log("youve cleared me");
    if(lastSpace !== undefined){
      this.spaces[lastSpace].classList.remove(player);
    }
  }

  movePlayer(move, player){
    if(move >= 19){
      move = 19;
    }
    console.log(`player moved ${move} space(s)`);
    this.spaces[move].classList.add(player);
  }



}
