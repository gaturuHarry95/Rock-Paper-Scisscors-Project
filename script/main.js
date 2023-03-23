/*function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play*/

function getComputerChoice(){
    const randomNumber=Math.floor(Math.random() *3);
    switch(randomNumber){
        case 0:
       return 'Rock';
        case 1:
       return 'Paper';
        case 2:
        return 'Scissors';

    }
}


/*We create a function playRound that plays a single round of Rock Paper Scissors.
 The function should take two parameters - the playerSelection and computerSelection - and 
 then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

We make sure that the function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).*/

function playRound(playerSelection,computerSelection){
playerSelection = playerSelection.toLowerCase();
if(playerSelection === computerSelection.toLowerCase()){
    return "It's a tie";
}else if(
    (playerSelection === 'rock' && computerSelection === 'Scissors')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection === 'paper')
){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}else{
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}


}


/*We now throw a function called game. Use the previous function inside of this one to play a 5 round game that 
keeps score and reports a winner or loser at the end.*/
function game(){
    let playerScore=0;
    let computerScore=0;
   for(let i=0;i<5;i++){
    const playerSelection=prompt('Choose Rock ,Paper or Scissors')
    const computerSelection=getComputerChoice();
    const result=playRound(playerSelection,computerSelection);
    console.log(result);
   if(result.includes('Win')){
    playerScore++;
   }else if(result.includes('Lose')){
    computerScore++;
   }if(playerScore > computerScore){
    console.log('You win the game!')
   }else if(playerScore < computerScore){
    console.log('You lose the game!');
   }else{
    console.log('It was a tie');
   }

}
}
console.log(game());
