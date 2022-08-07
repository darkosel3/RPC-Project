
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = function () {
  let randomChoice = Math.floor( Math.random() * 3 );
  return choices[randomChoice];
};



const playRound = function ( playerSelection, computerSelection ) {
  let player = playerSelection.charAt( 0 ).toUpperCase() + playerSelection.slice( 1 ).toLowerCase();
  let computer = computerSelection.charAt( 0 ).toUpperCase() + computerSelection.slice( 1 ).toLowerCase();

  if ( player === computer ) {
    console.log( "It's a draw" );
  } else if ( ( computer === 'Rock' && player === 'Scissors' ) || ( computer === 'Paper' && player === 'Rock' ) ) {
    return `You Lose! ${computer} beats ${player}`;
  } else {
    return `You Lose! ${player} beats ${computer}`;
  }
};
const playerSelection = 'rock';
const computerSelection = getComputerChoice();