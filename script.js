let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {  
  const choices = ['Rock','Paper','Scissors'];
  const result = Math.floor(Math.random(choices.length)* 8)
  if(result <= 2){
    return choices[0];
  } else if(result > 2 && result <= 5){
    return choices[1];
  } else{
    return choices[2];
  }
}

const getHumanChoice = () => {
  const playerChoices = prompt('Rock, Paper, or Scissors?');
  return playerChoices
}

const playRound = (humanChoice,computerChoice) => {
  if(humanChoice.toLowerCase() === 'rock'){
    switch(computerChoice){
      case 'Rock' :
        alert('Draw!');
        break;
      case 'Paper':
        computerScore++;
        alert('You lost! Computer choice paper');
        break;
      case 'Scissors' :
        humanScore++;
        alert('You won! Computer choice Scissors'); 
        break;
    }
  } else if(humanChoice.toLowerCase() === 'scissors'){
    switch(computerChoice){
      case 'Rock' :
        computerScore++;
        alert('You Lost! Computer choice rock');
        break
      case 'Paper' :
        humanScore++;
        alert ('You Won! Computer choice paper');
        break;
      case 'Scissors':
        alert('Draw!');
        break; 
    }
  } else if(humanChoice.toLowerCase() === 'paper'){
    switch(computerChoice){
      case 'Rock' :
        humanScore++;
        alert('You Won! Computer choice rock');
        break;
      case 'Paper' :
        alert('Draw!');
        break;
      case 'Scissors':
        computerScore++;
        alert('You Lost! computer choice scissors'); 
        break;
    }
  } else {
    alert('Invalid Choice');
  }
}

const playGame = () => {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection,computerSelection)
}

while(humanScore < 5 && computerScore < 5){
  playGame();
  console.log(humanScore,computerScore)
  if(humanScore === 5){
    alert(`YOU WON! Your Score: ${humanScore} || Computer Score: ${computerScore}`);
  } else if (computerScore === 5){
    alert(`YOU LOST! Your Score: ${humanScore} || Computer Score: ${computerScore}`);
  }
}
