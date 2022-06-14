const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const btnLizard = document.createElement('button');
const btnSpock = document.createElement('button');

const container = document.querySelector('.container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Pick one';

btnRock.classList.add('buttons');
btnPaper.classList.add('buttons');
btnScissors.classList.add('buttons');
btnLizard.classList.add('buttons');
btnSpock.classList.add('buttons');

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
btnLizard.textContent = "Lizard";
btnSpock.textContent = "Spock";


container.appendChild(content);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
container.appendChild(btnLizard);
container.appendChild(btnSpock);


let number = () => Math.floor(Math.random() *3);

const rps=["rock","paper","scissors","lizard","spock"];



let playerScore = 0;
let computerScore = 0;
let i;
player = "rock";
function result(computer, player){
  
  if (computer === "rock" && player === "rock"){console.log("its a tie")}
  else if(computer === "paper" && player === "paper"){console.log("its a tie")}
  else if(computer === "scissors" && player === "scissors"){console.log("its a tie")}
  else if(computer === "lizard" && player === "lizard"){console.log("its a tie")}
  else if(computer === "spock" && player === "spock"){console.log("its a tie")}
  

  else if(computer === "scissors" && player === "rock"){console.log("(and as it always has) Rock crushes Scissors"), playerScore++}
  else if(computer === "rock" && player === "paper"){console.log("Paper covers Rock"), playerScore++}
  else if(computer === "paper" && player === "scissors"){console.log("Scissors cuts Paper"), playerScore++}
  else if(computer === "lizard" && player === "scissors"){console.log("Scissors decapitates Lizard"), playerScore++}
  else if(computer === "lizard" && player === "rock"){console.log("Rock crushes Lizard"), playerScore++}
  else if(computer === "spock" && player === "lizard"){console.log("Lizard poisons Spock"), playerScore++}
  else if(computer === "scissors" && player === "spock"){console.log("Spock smashes Scissors"), playerScore++}
  else if(computer === "paper" && player === "lizard"){console.log("Lizard eats Paper"), playerScore++}
  else if(computer === "spock" && player === "paper"){console.log("Paper disproves Spock"), playerScore++}
  else if(computer === "rock" && player === "spock"){console.log("Spock vaporizes Rock"), playerScore++}



  else if(computer === "rock" && player === "scissors"){console.log("computer gets a point"), computerScore++}
  else if(computer === "paper" && player === "rock"){console.log("computer gets a point"), computerScore++}
  else if(computer === "scissors" && player === "paper"){console.log("computer gets a point"), computerScore++}
  else{console.log("please enter a acceptable answer"),i--}

}

//for( i =1; i<6; i++){
  
  const x=number();
  //console.log(rps[x],x);

  let computer = rps[x]
  console.log("computer plays: ",computer);

  
  //let player = prompt("please type rock paper or scissors");
  
  console.log("player plays: ",player);

  result(computer,player);

  console.log("computer score: ", computerScore, "player score: ",playerScore, "you have played ",i,"rounds")
//}

console.log("FINAL SCORE","computer score: ", computerScore, "player score: ",playerScore)
if(computerScore>playerScore){console.log("computer wins!")}
else if(computerScore<playerScore){console.log("you win!")}
else{"it's a tie"}


