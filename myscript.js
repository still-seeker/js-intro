const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");

const conclusion = document.querySelector(".conclusion");
conclusion.style.display = "none";




function game(){

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
           
    }
    let i = 1;
    while(i <= totalRounds){
        round.textContent = `ROUND: ${i} of ${totalRounds}`;
        currentRound++;

        

    }
    //  {
        
    //     const gameContainer = document.querySelector(".game-container");
    //     const conclusive = document.querySelector(".conclusion");
    //     conclusive.style.display = "block";

    //     if (gameContainer){
    //         gameContainer.style.display = 'none';
    //     }

    

    //     const finalMessage = document.querySelector(".finalMessage");
    //     finalMessage.style.color = "yellow";
    //     finalMessage.style.fontSize = "25px";
    //     finalMessage.style.fontWeight = "bold"
    //     finalMessage.textContent = `FINAL SCORE:: #YOU: ${scorePlayer} | #COMPUTER: ${scoreComputer}`;
    //     const restart = document.querySelector("#finalBtn");
    //     restart.addEventListener = ("click", (e) => {
    //         scoreComputer = 0;
    //         scoreComputer = 0;
    //         currentRound = 1;
    //         const reset = document.querySelector(".game-container");
    //         reset.style.display = "block";
    //     });
        
    //}
}


game();





