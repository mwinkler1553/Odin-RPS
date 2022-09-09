const options = ['rock' , 'paper' , 'scissors'];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

var playerSelection = prompt("Please type rock, paper, or scissors");

