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

function playGame(player,computer){
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    console.log("This is the decision of the AI:" + computer);

    //computer wins scenario
    if(player=="rock" && computer=="paper"){
        console.log("Computer wins, "+ computer + " beats " + player);
        return 1;
    }
    else if(player=="paper" && computer=="scissors"){
        console.log("Computer wins, "+ computer + " beats " + player);   
        return 1;
    }
    else if(player=="scissors" && computer=="rock"){
        console.log("Computer wins, "+ computer + " beats " + player);   
        return 1;
    }

    //player wins scenario
    else if(player=="rock" && computer=="scissors"){
        console.log("Player wins, "+ player + " beats " + computer);   
        return 2;
    }
    else if(player=="paper" && computer=="rock"){
        console.log("Player wins, "+ player + " beats " + computer);   
        return 2;
    }
    else if(player=="scissors" && computer=="paper"){
        console.log("Player wins, "+ player + " beats " + computer);   
        return 2;
    }

    //nobody wins
    else if(player=="rock" && computer=="rock"){
        console.log("Nobody wins. " + computer + " and " + player);    
        return 3;
    }
    else if(player=="paper" && computer=="paper"){
        console.log("Nobody wins. " + computer + " and " + player);        
        return 3;
    }
    else if(player=="scissors" && computer=="scissors"){
        console.log("Nobody wins. " + computer + " and " + player);        
        return 3;
    }
    
    //error
    else{
        console.log("Invalid input. Pls enter one of the following: Rock, Paper or Scissors");
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

game();
