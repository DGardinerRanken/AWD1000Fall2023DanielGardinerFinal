const game = () => { 
    let playerScore = 0; 
    let computerScore = 0; 
    let moves = 0; 
  
    const playGame = () => { 
        const rockBtn = document.querySelector('.rock'); 
        const paperBtn = document.querySelector('.paper'); 
        const scissorBtn = document.querySelector('.scissor'); 
        const playerOptions = [rockBtn,paperBtn,scissorBtn]; 
        const computerOptions = ['rock','paper','scissors'] 
          
        playerOptions.forEach(option => { 
            option.addEventListener('click',function(){ 
  
                const movesLeft = document.querySelector('.movesleft'); 
                moves++; 
                movesLeft.innerText = `Moves Left: ${10-moves}`; 
                  
  
                const choiceNumber = Math.floor(Math.random()*3); 
                const computerChoice = computerOptions[choiceNumber]; 
  
          
                winner(this.innerText,computerChoice) 
                  
           
                if(moves == 10){ 
                    gameOver(playerOptions,movesLeft); 
                } 
            }) 
        }) 
          
    } 
  
    const winner = (player,computer) => { 
        const result = document.querySelector('.result'); 
        const playerScoreBoard = document.querySelector('.p-count'); 
        const computerScoreBoard = document.querySelector('.c-count'); 
        const playerChoice = document.querySelector('.p-choice');
        const computerChoice = document.querySelector('.c-choice');
        player = player.toLowerCase(); 
        computer = computer.toLowerCase(); 
        if(player === computer){ 
            result.textContent = 'Tie'
        } 
        else if(player == 'rock'){ 
            if(computer == 'paper'){ 
                result.textContent = 'Computer Wins'; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
                computerChoice.textContent = "Paper"
                playerChoice.textContent = "Rock"
            }else{ 
                result.textContent = 'Player Wins'
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
                playerChoice.textContent = "Rock"
                computerChoice.textContent = "Scissors"
            } 
        } 
        else if(player == 'scissors'){ 
            if(computer == 'rock'){ 
                result.textContent = 'Computer Wins'; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
                computerChoice.textContent = "Rock"
                playerChoice.textContent = "Scissors"
            }else{ 
                result.textContent = 'Player Wins'; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
                playerChoice.textContent = "Scissors"
                computerChoice.textContent = "Paper"
            } 
        } 
        else if(player == 'paper'){ 
            if(computer == 'scissors'){ 
                result.textContent = 'Computer Wins'; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
                computerChoice.textContent = "Scissors"
                playerChoice.textContent = "Paper"
            }else{ 
                result.textContent = 'Player Wins'; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
                playerChoice.textContent = "Paper"
                computerChoice.textContent = "Rock"
            }  
                
            
        } 
    } 
    const reloadBtn = document.querySelector('.reload');
    reloadBtn.innerText = 'Restart'; 
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => { 
            window.location.reload(); 
        }) 
  
    const gameOver = (playerOptions,movesLeft) => { 
  
        const chooseMove = document.querySelector('.move'); 
        const result = document.querySelector('.result'); 
         
  
        playerOptions.forEach(option => { 
            option.style.display = 'none'; 
        }) 
  
       
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none'; 
  
        if(playerScore > computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46'; 
        } 
        else if(playerScore < computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Lost The Game'; 
            result.style.color = 'red'; 
        } 
        else{ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'Tie'; 
            result.style.color = 'grey'
        } 
        
    } 
    playGame();    
} 
game();

