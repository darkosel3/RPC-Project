
const choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = function () {
  let randomChoice = Math.floor( Math.random() * 3 );
  return choices[randomChoice];
};



const playRound = function ( playerSelection, computerSelection ) {
  let player = playerSelection.charAt( 0 ).toUpperCase() + playerSelection.slice( 1 ).toLowerCase();
  let computer = computerSelection;

  if ( player === computer ) {
    return `It's a draw ${player} vs ${computer} is equal!`;
  } else if ( ( computer === 'Rock' && player === 'Scissors' ) || ( computer === 'Paper' && player === 'Rock' ) ) {
    return `You Lose! ${computer} beats ${player}`;
  } else {
    return `You Win! ${player} beats ${computer}`;
  }
};

const game = function () {
  while ()
};


const playerSelection = 'rock';
const computerSelection = getComputerChoice();

