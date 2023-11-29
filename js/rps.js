const playerText = document.querySelector('#playerText');
const compText = document.querySelector('#compText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');

let player;
let computer;

let pWins = 0;
let cWins = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    compText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}))

function computerTurn(){
    const randNumber = Math.floor(Math.random() * 3) + 1;
    switch (randNumber){
        case 1:
        computer = "Rock"
        break;

        case 2:
        computer = "Paper"
        break;

        case 3:
        computer = "Scissors"
        break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Tie!";
    } 
    else if (computer == "Rock"){
        return (player == "Paper") ? winner() : loser();
    } 
    else if (computer == "Paper"){
        return (player == "Scissors") ? "You Win!" : "You lost!";
        
    } 
    else if (computer == "Scissors"){
        return (player == "Rock") ? "You Win!" : "You lost!";
        }
    
}

function resetGame() {
    setTimeout(function(){
      gameOver();
    },5000); 
}

var timer;
var timeLeft = 5;

function gameOver(){
    location.reload();
}

