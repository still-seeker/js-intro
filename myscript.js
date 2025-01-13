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
   let totalRounds = 5;
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

        if (currentRound <= totalRounds + 1) {
            if (currentRound === totalRounds + 1) {
                round.textContent = `ROUND: ${currentRound} of ${totalRounds}`;
                currentRound++;
                round.textContent =  `ROUND: ${currentRound} of ${totalRounds}`;
                const gameContainer = document.querySelector(".game-container");
                const conclusive = document.querySelector(".conclusion");
                conclusive.style.display = "block";
    
                if (gameContainer){
                    gameContainer.style.display = 'none';
                }
    
            
    
                const finalMessage = document.querySelector(".finalMessage");
                finalMessage.style.color = "yellow";
                finalMessage.style.fontSize = "25px";
                finalMessage.style.fontWeight = "bold"
                finalMessage.textContent = `FINAL SCORE:: #YOU: ${scorePlayer} | #COMPUTER: ${scoreComputer}`;
                
         
            }
            else {
               round.textContent = `ROUND: ${currentRound} of ${totalRounds}`;
                currentRound++;
            }

        }
        
    }
}

// function resett (t) {
//     setTimeout("location.reload(true);", t);
// }

            
// const restart = document.querySelector("#finalBtn");
// restart.addEventListener = ("click", function() {
//     // scoreComputer = 0;
//     // scoreComputer = 0;
//     // currentRound = 1;
//     // totalRounds= 5;
//     // const conclusion1 = document.querySelector(".conclusion");
//     // if (conclusion1) {conclusion1.style.display = "none";}
    
//     // const reset = document.querySelector(".game-container");
//     // if (reset) {reset.style.display = "block";}
//     window.location.reload();
    
    
// });


   



game();





