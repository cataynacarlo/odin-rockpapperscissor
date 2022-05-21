let playerscore = 0;
let computerscore = 0;

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

function playGame(player,computer,){
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    console.log("This is the decision of the AI:" + computer);
    console.log(playerscore);
    const resultcontainer = document.querySelector("#resultdiv");
    const computerscorecontainer = document.querySelector("#computerscore-container");
    const playerscorecontainer = document.querySelector("#playerscore-container");
    const playerimage = document.querySelector("#player-image");
    const computerimage = document.querySelector("#computer-image");



    if(player=="rock"){
        playerimage.src = "./images/rockimage.png"
        playerimage.style.transform = "rotate(360deg)";
    }
    else if(player=="paper"){
        playerimage.src = "./images/paperimage.png";
        playerimage.style.transform = "rotate(360deg)";    
    }
    else if(player=="scissors"){
        playerimage.src = "./images/scissorimage.png";
        playerimage.style.transform = "rotate(360deg)";  
    }

    if(computer=="rock"){
        computerimage.src = "./images/rockimage.png";
        computerimage.style.transform = "rotate(360deg)";
    }
    else if(computer=="paper"){
        computerimage.src = "./images/paperimage.png"    
        computerimage.style.transform = "rotate(360deg)";
    }
    else if(computer=="scissors"){
        computerimage.src = "./images/scissorimage.png";
        computerimage.style.transform = "rotate(360deg)";  
    }

    playerscorecontainer.textContent = playerscore.toString();
    computerscorecontainer.textContent = computerscore.toString();
    //computer wins scenario
    if((player=="rock" && computer=="paper") || (player=="paper" && computer=="scissors") || (player=="scissors" && computer=="rock")){
        console.log("Computer wins, "+ computer + " beats " + player);
        resultcontainer.style.cssText = "background-color: rgb(255, 31, 1);";
        resultcontainer.textContent = "Computer wins this round!";
        computerscore = computerscore + 1;
        computerscorecontainer.textContent = computerscore.toString();
        console.log("Computer score:" + computerscore.toString());
        console.log("Player score:" + playerscore.toString());
    
        //return 1;
    }

    //player wins scenario
    else if((player=="rock" && computer=="scissors") || (player=="paper" && computer=="rock") || (player=="scissors" && computer=="paper")){
        console.log("Player wins, "+ player + " beats " + computer);   
        resultcontainer.style.cssText = "background-color: rgb(45, 247, 18);";
        resultcontainer.textContent = "You win this round!";
        playerscore = playerscore + 1;
        playerscorecontainer.textContent = playerscore.toString();
        console.log("Computer score:" + computerscore.toString());
        console.log("Player score:" + playerscore.toString());
    
        //return 2;
    }
    //nobody wins
    else if((player=="rock" && computer=="rock") || (player=="paper" && computer=="paper") || (player=="scissors" && computer=="scissors")){
        console.log("Nobody wins. " + computer + " and " + player);    
        resultcontainer.style.cssText = "background-color: rgb(41, 5, 126);";
        resultcontainer.textContent = "Nobody won!";
        console.log("Computer score:" + computerscore.toString());
        console.log("Player score:" + playerscore.toString());
    
        //return 3;
    }
    //error
    else{
        console.log("Invalid input. Pls enter one of the following: Rock, Paper or Scissors");
    }

    console.log("Computer score:" + computerscore.toString());
    console.log("Player score:" + playerscore.toString());

    if(playerscore>=5){
        resultcontainer.textContent = "Player wins the game! ";
        playerscore = 0;
        computerscore = 0;
    }
    else if(computerscore>=5){
        resultcontainer.textContent = "Computer wins the game. :(";
        playerscore = 0;
        computerscore = 0;
    }

}



function game(){

    const rockchoice = document.querySelector('#rock');
    const paperchoice = document.querySelector('#paper');
    const scissorchoice = document.querySelector('#scissor');

    console.log("hello");
    console.log(rockchoice);
    console.log(paperchoice);
    console.log(scissorchoice);
    console.log("player score is" + playerscore.toString());
    console.log("computer score is" + computerscore.toString());


    rockchoice.addEventListener('click',()=> {playGame("rock",computerPlay())});
    paperchoice.addEventListener('click',() => {playGame("paper",computerPlay())});
    scissorchoice.addEventListener('click', () => {playGame("scissors",computerPlay())});


}

game();


