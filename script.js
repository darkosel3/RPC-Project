
const choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = function () {
  let randomChoice = Math.floor( Math.random() * 3 );
  return choices[randomChoice];
};



const playRound = function ( playerSelection, computerSelection ) {
  let player = playerSelection.charAt( 0 ).toUpperCase() + playerSelection.slice( 1 ).toLowerCase();
  let computer = computerSelection;

  if ( player === computer ) {
    return 2;
  } else if ( ( computer === 'Rock' && player === 'Scissors' ) || ( computer === 'Paper' && player === 'Rock' ) ) {
    return 0;
  } else {
    return 1;
  }
};

const stringResult = function ( result, player, computer ) {
  if ( result === 0 ) {
    return `You Lose! ${computer} beats ${player}`;
  } else if ( result === 1 ) {
    return `You Win! ${player} beats ${computer}`;
  } else {
    return `${player} vs ${computer} is equal!`;
  }
};


// prompt( "Choose rock,paper or scissors" )
const game = function () {
  let score = [0, 0];
  while ( score[0] <= 5 || score[1] <= 5 ) {
    let playerSelection = prompt( 'Choose Rock,Paper,Scissors' );
    console.log( playerSelection );
    let computerSelection = getComputerChoice();
    let result = playRound( playerSelection, computerSelection );
    let string = stringResult( result, playerSelection, computerSelection );
    if ( result < 2 ) {
      score[result]++;
    } else {
      score[0]++;
      score[1]++;
    };
    alert( string + `,Computer ${score[1]} Player ${score[0]}` );
  }
};
// `You Lose! ${computer} beats ${player}` - 0
// `You Win! ${player} beats ${computer}` - 1
// `It's a draw ${player} vs ${computer} is equal!` - 2
game();
