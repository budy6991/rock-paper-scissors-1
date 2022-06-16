let number = () => Math.floor(Math.random() *3);

const rps=["rock","paper","scissors"];



let playerScore = 0;
let computerScore = 0;
let i;
function result(computer, player){
  
  if (computer === "rock" && player === "rock"){console.log("its a tie")}
  else if(computer === "paper" && player === "paper"){console.log("its a tie")}
  else if(computer === "scissors" && player === "scissors"){console.log("its a tie")}

  else if(computer === "scissors" && player === "rock"){console.log("you get a point"), playerScore++}
  else if(computer === "rock" && player === "paper"){console.log("you get a point"), playerScore++}
  else if(computer === "paper" && player === "scissors"){console.log("you get a point"), playerScore++}

  else if(computer === "rock" && player === "scissors"){console.log("computer gets a point"), computerScore++}
  else if(computer === "paper" && player === "rock"){console.log("computer gets a point"), computerScore++}
  else if(computer === "scissors" && player === "paper"){console.log("computer gets a point"), computerScore++}
  else{console.log("please enter an acceptable answer"),i--}

}

for( i =1; i<6; i++){
  
  const x=number();
  //console.log(rps[x],x);

  let computer = rps[x]
  console.log("computer plays: ",computer);

  
  let player = prompt("please type rock paper or scissors");
  
  console.log("player plays: ",player);

  result(computer,player);

  console.log("computer score: ", computerScore, "player score: ",playerScore, "you have played ",i,"rounds")
}

console.log("FINAL SCORE","computer score: ", computerScore, "player score: ",playerScore)
if(computerScore>playerScore){console.log("computer wins!")}
else if(computerScore<playerScore){console.log("you win!")}
else{"it's a tie"}


