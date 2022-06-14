let number = () => Math.floor(Math.random() *3);

const rps=["rock","paper","scissors"];


let computer; 
let player;
let playerScore = 0;
let computerScore = 0;
function result(computer, player){
  
  if (computer === "rock" && player === "rock"){console.log("its a tie")}
  else if(computer === "paper" && player === "paper"){console.log("its a tie")}
  else if(computer === "scissors" && player === "scissors"){console.log("its a tie")}

  else if(computer === "scissors" && player === "rock"){console.log("you get a point"), playerScore++}
  else if(computer === "rock" && player === "paper"){console.log("you get a point"), playerScore++}
  else if(computer === "paper" && player === "scissor"){console.log("you get a point"), playerScore++}

  else if(computer === "rock" && player === "scissor"){console.log("computer gets a point"), computerScore++}
  else if(computer === "paper" && player === "rock"){console.log("computer gets a point"), computerScore++}
  else if(computer === "scissor" && player === "paper"){console.log("computer gets a point"), computerScore++}
  //else{console.log("please enter a acceptable answer")}

}

for(let i =0; i<=5; i++){
  

  const x=number();
  //console.log(rps[x],x);

  let computer = rps[x]
  console.log("computer plays: ",computer);

  
  let player = prompt("please type rock paper or scissors");
  
  console.log("player plays: ",player);

  result(computer,player);

  console.log("computer score: ", computerScore, "player score: ",playerScore)
}











console.log("FINAL SCORE","computer score: ", computerScore, "player score: ",playerScore)


