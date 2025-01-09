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
    
}
let rnd = 0;
function round() {
    const gameRound = document.querySelector(".round");
    for (let i = 0; i < 5; i++){
        playRound(humanChoice);
        rnd++;
        gameRound.textContent = `ROUND: ${rnd}`;
    }
}
