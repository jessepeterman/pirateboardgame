// Define game state class
class gameState{
  constructor(){
    this.space,
    this.lastSpace,
    this.nextSpace,
    this.roll,
    this.player,
    this.spaces,
    this.turn
  }

  createRandomNum(roll){
    const rollNumber = Math.floor(Math.random()*6+1);
    return rollNumber;
  }


  nextPlayer(player){
    if(player !== ''){
      if(player === 'player-1'){
        player = 'player-2';
      } else if(player === 'player-2'){
        player = 'player-1';
      }
    }
    // } else {
    //   turn.generateFirstPlayer();
    // }
    return player;
  }

  generateFirstPlayer(){
    const randomPlayer = Math.floor(Math.random()*2+1);
      let player;
      if(randomPlayer === 1){
        player = 'player-1';
      } else if(randomPlayer === 2){
        player = 'player-2';
      } else {
        return player;
      }
      return player;
    }


    // displayCurrentPlayer(){
    //   if(currentPlayer === "player-1"){
    //     playerDisplay.style.background = "blue";
    //     playerDisplay.textContent = "It's Player 1's turn";
    //   } else if (currentPlayer === "player-2"){
    //     playerDisplay.style.background = "rgb(146,68,194)";
    //     playerDisplay.textContent = "It's Player 2's turn";
    //   }
    // }

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
      return 0;
      } else if(p2 === 0){
        return 0;
      } else{
        return space;
      }
    }

}
