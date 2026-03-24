let gameover = false;

function getComputerChoice() {
   const choices = ['rock' , 'scissors' ,'paper'];
   let index= Math.floor(Math.random() * 3);
   return choices[index];
}

const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function getResult(player, computer) {
    const WinMap = {
        'rock' : 'scissors',
        'scissors' : 'paper',
        'paper' : 'rock'
    }
    if (player === computer) {
        return "It's a tie!";
    }
    if(WinMap[player] === computer){
        return "You win!";
    }else{
        return "You lose!";
    }
}

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice){

    if(gameover) return; // stop game if over

    let computerchoice = getComputerChoice();
    let result = getResult(playerchoice ,computerchoice);

    if(result === "You win!"){
        playerScore++;
    }else if(result === "You lose!"){
        computerScore++;
    }

    // update UI
    resultElement.innerText = 
    `You: ${playerchoice} | Computer: ${computerchoice} → ${result}`;

    scoreElement.innerText = 
    `Score → You: ${playerScore}, Computer: ${computerScore}`;

    if(playerScore === 5){
        resultElement.innerText = "🎉 You won the game!";
        gameover = true;
    }

    if(computerScore === 5){
        resultElement.innerText = "😢 Computer won the game!";
        gameover = true;
    }
}

const Rock = document.getElementById('rock');
const Paper = document.getElementById('paper');
const Scissors =  document.getElementById('scissors');


Rock.addEventListener('click', function(){
    playgame('rock');
})

Paper.addEventListener('click', function(){
    playgame('paper');
})
Scissors.addEventListener('click', function(){
    playgame('scissors');
})

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    gameover = false;

    resultElement.innerText = "Game reset!";
    scoreElement.innerText = "You: 0 | Computer: 0";
});



