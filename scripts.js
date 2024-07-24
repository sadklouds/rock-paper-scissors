// console.log("Hello world!")

let computerChoice; 
let humanChoice;


playGame(5);

function playGame(roundCount){
    let humanScore = 0;
    let computerScore = 0;
    let scoreArray = [2];
    let result = null;

    for(let i = 0; i < roundCount; i++){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        scoreArray =  playRound(humanChoice, computerChoice);
        humanScore += scoreArray[0];
        computerScore += scoreArray[1];
    }
    
    if(humanScore > computerScore){
        result = "human wins!";
    }else if (humanScore < computerScore){
          result = "computer wins!";
    }else{
        result= "Draw!";
    }

    console.log(` Finals scores \n human score: ${humanScore} \n computer score: ${computerScore} \n End result: ${result}`);
}

function getComputerChoice(){
    let max = 3;
    let result = Math.floor(Math.random() * max);
    if (result == 0){
        return "rock";
    } else if (result == 1){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice;
    let validChoice = false;
    while(validChoice == false){
        choice = prompt("Please enter 'rock, 'paper' or 'scissors'.").toLowerCase();
        choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors"){
            validChoice = true;
        }
    }
    return choice;
}

function playRound(humanChoice, computerChoice){

    let humanScore = 0;
    let computerScore = 0;
    let scores = [2];

    if(humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" ||
        humanChoice == "scissors" && computerChoice == "scissors" ){
        console.log(`Draw!, player chose ${humanChoice} and computer chose ${computerChoice}`);
        return scores = [humanScore, computerScore];
    }

    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
        return scores = [humanScore, computerScore];
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
        return scores = [humanScore, computerScore];
    }

    if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
        return scores = [humanScore, computerScore];
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
        return scores = [humanScore, computerScore];
    }

    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
        return scores = [humanScore, computerScore];
    }else{
        computerScore += 1;
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
        return scores = [humanScore, computerScore];
    }
}