
let currentSpace = 0;
let currentMove;
let currentPlayer = '';
let numberOfPlayers = 2;
let spaceTracker = [];
let turnNumber = 0;
let p1TurnNumber = 0;
let p2TurnNumber = 0;
winningSpace = 20;

// Game Loop to implement in future update
// while (true)
// {
//   processInput(); // event handlers
//   update();  // update player turn, gameState,
//   render(); // display it on the screen/UI
// }

// Load on dom Load
// document.addEventListener('DOMContentLoaded', loadPlayers);
//
// player1 = loadPlayer1();
//
// player1.turnNumber++;
// player1.turnNumber++;
// player1.turnNumber++;
//
//
// console.log(player1);


// Add roll button event listener

document.getElementsByClassName('roll-btn')[0].addEventListener('click', function(){
  program();
});

var spaceDivs = document.getElementsByClassName("space");

for(var i = 0; i < spaceDivs.length; i++){
   //do something to each div like
}


function program(){
  const ui = new UI;

  ui.spaces = spaceDivs;

  player1 = loadPlayer1();
  player2 = loadPlayer2();

  // Init game state
  const turn = new gameState;

  // Increment turn counter
  turnNumber++;

  if(currentPlayer === ''){
    currentPlayer = turn.generateFirstPlayer(currentPlayer);
  }

  // console.log(p1TurnNumber + " " + p2TurnNumber);
  // currentSpace = turn.checkForFirstTurn(p1TurnNumber, p1TurnNumber, currentSpace);
  // console.log(`Current Space: ${currentSpace}`);

  if(player1.name === currentPlayer){
    player2.isTurn = false;
    player1.isTurn = true;
    p1TurnNumber++;
  }
  if(player2.name === currentPlayer){
    player1.isTurn = false;
    player2.isTurn = true;
    p2TurnNumber++;
  }

  ui.displayCurrentPlayer();

  // Clear last space
  spaceTracker.push(currentSpace);

  // Assign game state variables

  turn.space = spaceTracker[turnNumber -1];
  turn.roll = turn.createRandomNum();
  turn.lastSpace = spaceTracker[turnNumber-2];
  turn.nextSpace = turn.space+turn.roll;
  turn.player = currentPlayer;

  // Display current game game
  console.log(`Game count: ${turnNumber} - ${p1TurnNumber} - ${p2TurnNumber}`);
  console.log(turn);

  // Start board with correct player color

  // Clear player's current space, and assign new space to current space for next player
  setTimeout( () => ui.clearCurrentSpace(currentSpace, turn.player), 200);
  // setTimeout( () => ui.clearLastSpace(turn.lastSpace, currentPlayer), );
  // currentSpace = turn.space+turn.roll;
  setTimeout( () => ui.clearLastSpace(spaceTracker[turnNumber-2], currentPlayer), );
  currentSpace = turn.space+turn.roll;


  // Set dice roll display (add animation & 3D dice)
  ui.rollDisplay(turn.roll);

  // Move the player to next space
  setTimeout( () => ui.movePlayer(turn.nextSpace, currentPlayer), 750);

  console.log(spaceTracker);
  // Listen for a win
  if(ui.checkForWin(currentSpace, winningSpace, spaceTracker[turnNumber-1], currentPlayer)){
  } else {

  // If no win, switch to next player
    currentPlayer = turn.nextPlayer(currentPlayer);

    // setTimeout( () => turn.displayCurrentPlayer(), 1500);
    ui.displayCurrentPlayer(turn.player);
  }
// });
}
