// for using prompt in terminal 
const prompt = require("prompt-sync")();
// usecase 8 - multiple players playing the game
let number = Number(prompt("Enter number of players: "));
if(isNaN(number) ||  number == 0){
    console.log("No players to play the game");
}
else{
    console.log("Game starts with ", number, "players");

// usecase 1 - single player start position 0
const start = 0;
// // usecase 7 - 2 players playing the game
// let player1Position = start;
// let player2Position = start;
// usecase 4 - repeat till player reaches position 100
const end = 100;
let playerpositions=[];
for(let i=0;i<number;i++){
    playerpositions.push(start);
}
// usecase 6 - number of times the die is rolled to win the game
let dieCount = 0;

let player = 0;
let winner = null;

while (winner === null) {
// usecase 2 - player rolls the die to get a number between 1 to 6
const die = Math.floor(Math.random() * 6) + 1;
console.log("die roll :", die);
dieCount++;
// usecase 3 - player checks for options no-play, ladder, snake
const options = Math.floor(Math.random() * 3);
console.log("options :", options);
// usecase 8 - player turn based on player number
const playernumber = player + 1;
console.log("Player", playernumber, "turn");
let lastPosition = playerpositions[player];
// usecase 5 - Ensure player gets to exact winning position 100
if (options === 0) {
  console.log("no play and ",playernumber, "position remains same",playerpositions[player]);
}
else if (options === 1){
    console.log("ladder");
    playerpositions[player]+= die;
    console.log("New Player", playernumber, "Position :", playerpositions[player]);

}
else if (options === 2) {
    console.log("snake");
    playerpositions[player]-= die;
    console.log("New Player", playernumber, "Position :", playerpositions[player]);
}
if (playerpositions[player] < start) {
    playerpositions[player] = start;
    console.log("Cant go below 0, reset to:", playerpositions[player]);

}
if (playerpositions[player] > end) {   
    playerpositions[player] = lastPosition;
    console.log("Cant go above 100, reset to:", playerpositions[player]);
}
if (playerpositions[player] === end) {
    winner = playernumber;
}
// usecase 7 - player 1 gets another turn if ladder and position < 100
if (options === 1 && playerpositions[player] < end) {
    console.log("Player", playernumber, "got a ladder and gets another turn");
    continue;
}
// Move to the next player
player = (player + 1) % number; 
}


console.log("Total die rolls:", dieCount);
console.log("game over");
if (winner) {
    console.log("Player", winner, "reached position 100 and won the game!");
}
}
