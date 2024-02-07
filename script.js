while(true){

    function getComputerChoice(){
        let array =  ['rock', 'paper', 'scissors']
        let pick_one = array[Math.floor(Math.random() * array.length)];
        return pick_one;
    }
    
    let computerChoice = getComputerChoice();

    userInput=prompt("Input");
    userInput = userInput.toLowerCase();


    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    
    }else{
        alert("Please type in 'rock, 'paper' or 'scissors'");
        userInput=prompt("Input");
    }

    if(computerChoice === userInput ){
        alert("It's a tie!");
    }else if(computerChoice === 'rock' && userInput === 'paper'){
        alert("You win! Paper beats rock.");
    }else if(computerChoice === 'paper' && userInput === 'rock'){
        alert("You loose! Paper beats rock.");
    }else if(computerChoice === 'rock' && userInput === 'scissors'){
        alert("You lose! Rock beats scissors.");
    }else if(computerChoice === 'scissors' && userInput === 'rock'){
        alert("You win! Rock beats scissors.");
    }else if(computerChoice === 'paper' && userInput === 'scissors'){
        alert("You win! Scissors beat paper.");
    }else(alert("You lose! Scissors beat paper"));

    console.log(computerChoice);
    console.log(userInput);
    


    break;
}
