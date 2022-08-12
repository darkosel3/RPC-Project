
let btns = document.querySelectorAll( ".btn" );
const choices = ['Rock', 'Paper', 'Scissors'];
const resultHtml = document.querySelector("#result")
const resultPara = document.querySelector("#resultPara")

let score = [0, 0];
let mySelection;
let computerSelection;
let winner;
let result

const displayWinner = function(string){
  if(string === 'Tied') {
    resultHtml.innerText =`It is ${string}`
  }else{
   resultHtml.innerText = `${string} is the winner!!!🙌🙌🙌 `
  }
}

const displayResult = function(string){
  resultHtml.innerText = string
  resultPara.innerText = `Player ${score[0]} Computer ${score[1]}`
}

const getComputerChoice = function () {
  let randomChoice = Math.floor( Math.random() * 3 );
  return choices[randomChoice];
};

const checkForWinner = function () {
  if(score[0] === 5 && score[1] === 5) {
    return "Tied"
  } else if ( score[0] === 5 ) {
    return "Player";
  } else if ( score[1] === 5 ) {
    return "Computer";
  }
};


const playRound = function ( playerSelection, computerSelection ) {
  let player = playerSelection.charAt( 0 ).toUpperCase() + playerSelection.slice( 1 ).toLowerCase();
  let computer = computerSelection;
  if ( player === computer ) {
    score[0]++;
    score[1]++;
    return 2;
  } else if ( ( computer === 'Rock' && player === 'Scissors' ) || ( computer === 'Paper' && player === 'Rock' ) ) {
    score[1]++;
    return 0;
  } else {
    score[0]++;
    return 1;
  }
};

const stringResult = function ( result, player, computer ) {
  let playerOne = player.charAt( 0 ).toUpperCase() + player.slice( 1 ).toLowerCase();
  if ( result === 0 ) {
    return `You Lose! ${computer} beats ${playerOne}`;
  } else if ( result === 1 ) {
    return `You Win! ${playerOne} beats ${computer}`;
  } else {
    return `${playerOne} vs ${computer} is equal!`;
  }
};

btns.forEach( element => {
  element.addEventListener( 'click', function ( e ) {
    
      mySelection = this.getAttribute( 'data-type' );
      computerSelection = getComputerChoice();
      result = playRound( mySelection, computerSelection );
      stringRes = stringResult(result, mySelection,computerSelection)
      displayResult(stringRes)
      if ( score[0] === 5 || score[1] === 5) {
        winner = checkForWinner();
        displayWinner(winner);
        score = [0,0]
      }
 
  } );

} );




// Returns the winner of the round


//Given the winner returns String 


// prompt( "Choose rock,paper or scissors" )
// const game = function () {
//   let weHaveWinner = checkForWinner();
//   let playerSelection = mySelection; //
//   let computerSelection = getComputerChoice();
//   let result = playRound( playerSelection, computerSelection );
//   let string = stringResult( result, playerSelection, computerSelection );
//   if ( result < 2 ) {
//     score[result]++;
//   } else {
//     score[0]++;
//     score[1]++;
//   };
  // if ( score[0] === 5 ) {
  //   return string + `Player won!` + `,Computer ${score[1]} Player ${score[0]}`;
  // } else if ( score[1] === 5 ) {
  //   return string + `Computer won!` + `,Computer ${score[1]} Player ${score[0]}`;
  // }
  // alert( string + `,Computer ${score[1]} Player ${score[0]}` ); 
//}
// `You Lose! ${computer} beats ${player}` - 0
// `You Win! ${player} beats ${computer}` - 1
// `It's a draw ${player} vs ${computer} is equal!` - 2

// const game = function () {
//   let score = [0, 0];


// };

