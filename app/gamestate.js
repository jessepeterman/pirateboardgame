// Define game state class
class gameState{
  constructor(space, roll, player, spaces){
    space,
    roll,
    player,
    spaces
  }

  movePlayer(){
    console.log(`player moved from space ${this.space}, ${this.roll} spaces`);
  }



}

// Init game state
const turn = new gameState;
turn.space = currentSpace;
turn.roll = rollNumber;
turn.player = currentPlayer;
turn.spaces = [
  space1,
  space2,
  space3,
  space4,
  space5,
  space6,
  space7,
  space8,
  space9,
  space10,
  space11,
  space12,
  space13,
  space13,
  space14,
  space15,
  space16,
  space17,
  space18,
  space19,
  space20
];

// adjust move for 0-based indexing in spaces array
currentMove = turn.space+turn.roll-1;

turn.movePlayer(currentMove);
console.log(turn);
// console.log(turn.spaces[currentMove]);

turn.spaces[currentMove].classList.toggle('player-1');
