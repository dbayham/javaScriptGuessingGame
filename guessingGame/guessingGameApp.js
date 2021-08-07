alert("Welcome to our Guessing Game");

let userInput;
const winningGuess = Math.floor(Math.random()*11); //Math.floor(Math.random()*11) will randomnize the number between 1 - 10
let youWon = false;
let numberOfTries = 0;

function askForUserInput(){
    return prompt("Choose a number between 1 and 10");
}

while(!youWon && numberOfTries<3){
    userInput = askForUserInput();
    if(userInput === winningGuess){
        alert("GREAT GUESS YOU WON!");
        youWon = true;
    }else{
        alert("YOU LOSE!");
    }
    numberOfTries++;
    console.log(numberOfTries);

}
if(youWon){
    alert("Great Job, Game Over!")
}else{
alert(`Game Over! The correct number was ${winningGuess}`);
}