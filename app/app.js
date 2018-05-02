
let currentSpace = 1;
let rollNumber = 3;
let currentPlayer = "Player 1";

const space1 = document.querySelector('.space1');
const space2 = document.querySelector('.space2');
const space3 = document.querySelector('.space3');
const space4 = document.querySelector('.space4');
const space5 = document.querySelector('.space5');
const space6 = document.querySelector('.space6');
const space7 = document.querySelector('.space7');
const space8 = document.querySelector('.space8');
const space9 = document.querySelector('.space9');
const space10 = document.querySelector('.space10');
const space11 = document.querySelector('.space11');
const space12 = document.querySelector('.space12');
const space13 = document.querySelector('.space13');
const space14 = document.querySelector('.space14');
const space15 = document.querySelector('.space15');
const space16 = document.querySelector('.space16');
const space17 = document.querySelector('.space17');
const space18 = document.querySelector('.space18');
const space19 = document.querySelector('.space19');
const space20 = document.querySelector('.space20');

let spaces = {0:space1, 1:space2, 2:space3, 3:space4, 4:space5};

// Define game state class
class gameState{
  constructor(space, roll, player, spaces){
    space,
    roll,
    player,
    spaces
    // [
    //   space1,
    //   space2,
    //   space3,
    //   space4,
    //   space5,
    //   space6,
    //   space7,
    //   space8,
    //   space9,
    //   space10,
    //   space11,
    //   space12,
    //   space13,
    //   space13,
    //   space14,
    //   space15,
    //   space16,
    //   space17,
    //   space18,
    //   space19,
    //   space20
    // ]
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
