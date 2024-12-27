const options = ["rock", "paper", "scissors"];

function playerChoice(){
    let validatedInput = false;
    while (validatedInput === false){
        const choice = prompt("Rock", "Paper", "Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
        else {
            console.log("Error, please type: rock, paper or scissors");
        }
    }
}

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    if (random ===1){
        return "rock";
    }
    else if (random === 2){
        return "scissors";
    }
    else {
        return "paper";
    }
    
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log("It is a tie");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats scissors");
            scorePlayer++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win!! Paper beats rock");
            scorePlayer++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! scissors beats paper");
            scorePlayer++;
        }
        else{
            if (computerChoice === "rock" && playerChoice === "scissors"){
                console.log("You lose! Rock beats scissors");
                scoreComputer++;
            }
            else if (computerChoice === "paper" && playerChoice === "rock"){
                console.log("You lose! Paper beats rock");
                scoreComputer++;
            }
            else {
                console.log("You lose! Scissors beats paper");
                scoreComputer++;
            }
        }
    }
    
    for (let i = 0; i < 5 ; i++){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log("computer chooses: " +computerSelection);
        console.log("Your choice: " +playerSelection);
        playRound(playerSelection,computerSelection);
        console.log(`Player ${scorePlayer} VS Computer ${scoreComputer}`);
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Congrats you win!!");
    } else if (scorePlayer < scoreComputer){
        console.log("Better luck next time.");
    } else {
        console.log("it's a tie!");
    }
}
game();