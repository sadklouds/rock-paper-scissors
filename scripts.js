let computerChoice; 
let humanChoice;
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
const playButtons = document.querySelectorAll(".play-button");
const playAgain = document.querySelector("#play-again");

const scoreContainer = document.querySelector("div.scores");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResults = document.querySelector(".round-result");
const result = document.querySelector("#result");

playGame();

function playGame(){
    humanScore = 0;
    computerScore = 0;
    playAgain.disabled = true;
    playerScoreDisplay.textContent = "PlayerScore: "+ humanScore;
    computerScoreDisplay.textContent = "ComputerScore: " + computerScore;

        playButtons.forEach((button) =>{
                button.addEventListener("click", () =>{
                
                    playRound(button.id);
                    playerScoreDisplay.textContent = "PlayerScore: "+ humanScore;
                    computerScoreDisplay.textContent = "ComputerScore: " + computerScore;
                    console.log(` human score: ${humanScore} \n computer score: ${computerScore}`); 
                   
                });
        });

        playAgain.addEventListener("click", () =>{
            playButtons.forEach((button) =>{
                button.disabled = false;
            });
            playGame();
        });
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

function playRound(humanChoice){

    if(humanScore > 4 || computerScore > 4){
        playButtons.forEach((button) =>{
            button.disabled = true;
        });
        playAgain.disabled = false;
        return;
    }

    computerChoice = getComputerChoice();

    if(humanChoice == computerChoice ){
            result.textContent = (`Draw!, player chose ${humanChoice} and computer chose ${computerChoice}`);
        return;
    }

    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        result.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
        return;
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        result.textContent = `you lose! ${computerChoice} beats ${humanChoice}`;
        return;
    }

    if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        result.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
        return;
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        result.textContent = `you lose! ${computerChoice} beats ${humanChoice}`;
        return;
    }

    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
       result.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
        return;
    }else{
        computerScore += 1;
        result.textContent = `you lose! ${computerChoice} beats ${humanChoice}`;
        return;
    }
}