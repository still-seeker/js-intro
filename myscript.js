const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");

rock.addEventListener("click", () => playRound('rock'));
paper.addEventListener("click", () => playRound('paper'));
scissors.addEventListener("click", () => playRound('scissors'));


let scorePlayer = 0;
let scoreComputer = 0;
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

let currentRound = 1;
const totalRounds = 5;
const round = document.querySelector(".round");

function playRound(humanChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    if (humanChoice === computerChoice){
        result.textContent = "It is a tie";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        result.textContent = "You win! Rock beats scissors";
        scorePlayer++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        result.textContent = "You win!! Paper beats rock";
        scorePlayer++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        result.textContent = "You win! scissors beats paper";
        scorePlayer++;
    }
    else{
        if (computerChoice === "rock" && humanChoice === "scissors"){
            result.textContent = "You lose! Rock beats scissors";
            scoreComputer++;
        }
        else if (computerChoice === "paper" && humanChoice === "rock"){
            result.textContent = "You lose! Paper beats rock";
            scoreComputer++;
        }
        else {
            result.textContent = "You lose! Scissors beats paper";
            scoreComputer++;
        }

    }

    //update the score display
    playerScore.textContent = `Player Score: ${scorePlayer}`;
    computerScore.textContent = `Computer Score: ${scoreComputer}`;

    if (currentRound < totalRounds) {
        round.textContent = `ROUND: ${currentRound} of ${totalRounds}`;
        currentRound++;
   
    }

    else if (currentRound == totalRounds){
        round.textContent = 'FINAL ROUND';
     
    }

    else {
        if (scorePlayer > scoreComputer)
            result.textContent = "CONGRATULATIONS!! YOU WIN";
        else if (scorePlayer < scoreComputer)
            result.textContent = "BETTER LUCK NEXT TIME";
        else 
            result.textContent = "OOPS:) THE GAME ENDS IN A DRAW";
    }
    
    
}




