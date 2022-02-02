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
    }
    else if(player=="paper" && computer=="scissors"){
        console.log("Computer wins, "+ computer + " beats " + player);   
    }
    else if(player=="scissors" && computer=="rock"){
        console.log("Computer wins, "+ computer + " beats " + player);   
    }

    //player wins scenario
    else if(player=="rock" && computer=="scissors"){
        console.log("Player wins, "+ player + " beats " + computer);   
    }
    else if(player=="paper" && computer=="rock"){
        console.log("Player wins, "+ player + " beats " + computer);   
    }
    else if(player=="scissors" && computer=="paper"){
        console.log("Player wins, "+ player + " beats " + computer);   
    }

    //nobody wins
    else if(player=="rock" && computer=="rock"){
        console.log("Nobody wins. " + computer + " and " + player);    
    }
    else if(player=="paper" && computer=="paper"){
        console.log("Nobody wins. " + computer + " and " + player);        
    }
    else if(player=="scissors" && computer=="scissors"){
        console.log("Nobody wins. " + computer + " and " + player);        
    }
    
    //error
    else{
        console.log("Invalid input. Pls enter one of the following: Rock, Paper or Scissors");
    }
}

let playerdecision = String(prompt("Enter your decision:"));


playGame(playerdecision,computerPlay())