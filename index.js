function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];


}




class Counter {
    constructor(score) {
        this.score = score;
    }
    getScore(){
        return this.score;
    }

    addScore(number){
        this.score=this.score+number
    }


}

const counter = new Counter(0);

function singleRound(computerSelection, playerSelection){
    if (playerSelection === computerSelection) {
            return `It's a tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        counter.addScore(+1)
            return "You win! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        counter.addScore(+1)
            return "You win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        counter.addScore(+1)
            return "You win! Scissors beats Paper";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
            counter.addScore(-1)
            return "You lose! Paper beats Rock";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        counter.addScore(-1)
            return "You lose! Rock beats Scissors";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        counter.addScore(-1)
            return "You lose! Scissors beats Paper";
        }
}





function game(){


    for(let i=0; i<5; i++){
        const computerSelection = computerPlay();
        const playerSelection = prompt("Please choose Rock, Paper or Scissors").toLowerCase()
        console.log(singleRound(computerSelection, playerSelection));
    }


    if(counter.getScore()>0){
        console.log("You win with score of " + counter.getScore())

    } else if(counter.getScore()<0){
        console.log("You lost, computer wins with score of " + counter.getScore())

    }else if(counter.getScore()===0){
        console.log("It is a tie!")
    }
}

game()
