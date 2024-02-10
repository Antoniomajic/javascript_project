/*while(true){ 

    function getComputerChoice(){
        let array =  ['rock', 'paper', 'scissors']
        let pick_one = array[Math.floor(Math.random() * array.length)];
        return pick_one;
    }
    
    let computerSelection = getComputerChoice();

    userInput=prompt("Type in rock, paper, or scissors.");
    userInput = userInput.toLowerCase();


    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    
    }else{
        alert("Please type in 'rock, 'paper' or 'scissors'");
        userInput=prompt("Input");
    }

    if(computerSelection === userInput ){
        alert("It's a tie!");
    }else if(computerSelection === 'rock' && userInput === 'paper'){
        alert("You win! Paper beats rock.");
    }else if(computerSelection === 'paper' && userInput === 'rock'){
        alert("You loose! Paper beats rock.");
    }else if(computerSelection === 'rock' && userInput === 'scissors'){
        alert("You lose! Rock beats scissors.");
    }else if(computerSelection === 'scissors' && userInput === 'rock'){
        alert("You win! Rock beats scissors.");
    }else if(computerSelection === 'paper' && userInput === 'scissors'){
        alert("You win! Scissors beat paper.");
    }else(alert("You lose! Scissors beat paper"));

    console.log(computerSelection);
    console.log(userInput);
    


    break;
}
*/

// This function gets random "computer" choice
function getComputerChoice(){
    let array =  ['rock', 'paper', 'scissors']
    let pick_one = array[Math.floor(Math.random() * array.length)];
    return pick_one;
}



// this function prompts player to submit his selection
function getPlayerSelection(){
    let playerChoice  = prompt("Type in rock, paper, or scissors.").toLowerCase();
    if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
        return playerChoice;
    }else{
        alert("Please type in 'rock, 'paper' or 'scissors'");
        return getPlayerSelection(); // this is recursion, it makes sure player submits the correct option, if not it keeps calling function over and over again
    }
     
} 

// this is for keeping score
let computerScore = 0;
let playerScore = 0;

// this function plays a single round of the game
function singleRound(computerSelection, playerSelection){

    computerSelection = getComputerChoice();
    playerSelection = getPlayerSelection();
    
    

    if(computerSelection === playerSelection ){
        return console.log("It's a tie!");
    }else if(computerSelection === 'rock' && playerSelection === 'paper'){
        playerScore += 1;
        return console.log("You win! Paper beats rock.");
    }else if(computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore += 1;
        return console.log("You lose! Paper beats rock.");
    }else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        computerScore += 1;
        return console.log("You lose! Rock beats scissors.");
    }else if(computerSelection === 'scissors' && playerSelection === 'rock'){
        playerScore += 1;
        return console.log("You win! Rock beats scissors.");
    }else if(computerSelection === 'paper' && playerSelection === 'scissors'){
        playerScore += 1;
        return console.log("You win! Scissors beat paper.");
    }else{
        computerScore += 1;
        return console.log("You lose! Scissors beat paper");
    }
}

// five rounds, could do loop but not for now
function playGame(){
    console.log("First round: ") + console.log(singleRound());
    console.log("Second round: ") + console.log(singleRound());
    console.log("Third round: ") + console.log(singleRound());
    console.log("Fourth round: ") + console.log(singleRound());
    console.log("Fifth round: ") + console.log(singleRound());

    // final score
    let scoreBoard = console.log("Score: Computer: " + computerScore + " / Player: " + playerScore);
    if(computerScore > playerScore){
        return console.log("Game over! You lost!") + scoreBoard;
    }else return console.log("Congrats! You have won!") + scoreBoard;
}

playGame();


