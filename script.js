
function computerPlay(){
    let computer_decision = Math.floor((Math.random() * 3) + 1);
    if(computer_decision==1){
        return "rock";
    }
    else if(computer_decision==2){
        return "paper";
    }
    else if(computer_decision==3){
        return "scissors";
    }
}

function playGame(player,computer,playerscore,computerscore){
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    console.log("This is the decision of the AI:" + computer);
    console.log(playerscore);
    const resultcontainer = document.querySelector("#resultdiv");
    const scorecontainer = document.querySelector("#scorediv");
    
    //computer wins scenario
    if(player=="rock" && computer=="paper"){
        console.log("Computer wins, "+ computer + " beats " + player);
        resultcontainer.style.cssText = "background-color: red;";
        computerscore = computerscore + 1;
        scorecontainer.textContent = computerscore.toString();
        console.log("Computer score:" + computerscore.toString());
        console.log("Player score:" + playerscore.toString());
    
        return 1;
    }
    else if(player=="paper" && computer=="scissors"){
        console.log("Computer wins, "+ computer + " beats " + player);   
        resultcontainer.style.cssText = "background-color: red;";
        computerscore = computerscore + 1;
        scorecontainer.textContent = toString(computerscore);
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 1;
    }
    else if(player=="scissors" && computer=="rock"){
        console.log("Computer wins, "+ computer + " beats " + player);   
        resultcontainer.style.cssText = "background-color: red;";
        computerscore = computerscore + 1;
        scorecontainer.textContent = toString(computerscore);
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 1;
    }

    //player wins scenario
    else if(player=="rock" && computer=="scissors"){
        console.log("Player wins, "+ player + " beats " + computer);   
        resultcontainer.style.cssText = "background-color: green;";
        playerscore = playerscore + 1;
        scorecontainer.textContent = toString(playerscore);
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 2;
    }
    else if(player=="paper" && computer=="rock"){
        console.log("Player wins, "+ player + " beats " + computer);   
        resultcontainer.style.cssText = "background-color: green;";
        playerscore = playerscore + 1;
        scorecontainer.textContent = toString(playerscore);
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 2;
    }
    else if(player=="scissors" && computer=="paper"){
        console.log("Player wins, "+ player + " beats " + computer);   
        resultcontainer.style.cssText = "background-color: green;";
        playerscore = playerscore + 1;
        scorecontainer.textContent = toString(playerscore);
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 2;
    }

    //nobody wins
    else if(player=="rock" && computer=="rock"){
        console.log("Nobody wins. " + computer + " and " + player);    
        resultcontainer.style.cssText = "background-color: pink;";
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 3;
    }
    else if(player=="paper" && computer=="paper"){
        console.log("Nobody wins. " + computer + " and " + player);        
        resultcontainer.style.cssText = "background-color: pink;";
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 3;
    }
    else if(player=="scissors" && computer=="scissors"){
        console.log("Nobody wins. " + computer + " and " + player);        
        resultcontainer.style.cssText = "background-color: pink;";
        console.log("Computer score:" + toString(computerscore));
        console.log("Player score:" + toString(playerscore));
    
        return 3;
    }
    //error
    else{
        console.log("Invalid input. Pls enter one of the following: Rock, Paper or Scissors");
    }

    console.log("Computer score:" + computerscore.toString());
    console.log("Player score:" + playerscore.toString());
    if(playerscore>=5){
        scorecontainer.textContent = "Player wins! Congratulations";
    }
    else if(computerscore>=5){
        scorecontainer.textContent = "Computer wins! AI will take over us!!";
    }
}

function game(){
    let i;
    playerScore = 0;
    computerScore = 0;
    for(i=0;i<5;i++){
        let playerdecision = String(prompt("Enter your decision:"));
        let winner = playGame(playerdecision,computerPlay());
        if(winner == 1){
            computerScore++;
        }
        else if(winner == 2){
            playerScore++;
        }
    }
    if(playerScore>computerScore){
        console.log("Player wins!!!");
    }
    else{
        console.log("Computer wins!!");
    }
}

//game();

const rockchoice = document.querySelector('#rock');
const paperchoice = document.querySelector('#paper');
const scissorchoice = document.querySelector('#scissor');


var playerscore = 0;
var computerscore = 0;



console.log("hello");
console.log(rockchoice);
console.log(paperchoice);
console.log(scissorchoice);
console.log("player score is" + playerscore.toString());
console.log("computer score is" + computerscore.toString());
rockchoice.addEventListener('click',()=> {playGame("rock",computerPlay(),playerscore,computerscore)});
paperchoice.addEventListener('click',() => {playGame("paper",computerPlay(),playerscore,computerscore)});
scissorchoice.addEventListener('click', () => {playGame("scissors",computerPlay(),playerscore,computerscore)});