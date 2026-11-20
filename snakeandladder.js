// for using prompt in terminal 
const prompt = require("prompt-sync")();
// usecase 8 - multiple players playing the game
// usecase 1 - single player start position 0
const start = 0;
// usecase 4 - repeat till player reaches position 100
const end = 100;
// play again option
let play='';
while(play!=='no'){
    let number = Number(prompt("Enter number of players: "));
if(isNaN(number) ||  number <= 0){
    console.log("No players to play the game");
}
else{
    console.log("Game starts with ", number, "players");
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
dieCount++;
// usecase 8 - player turn based on player number
const playernumber = player + 1;
console.log("Player", playernumber, "turn","die roll:",die,);
if (playerpositions[player] === 0) {
    if (die === 1) {
        playerpositions[player] = 1;
        console.log("Player", playernumber, "got 1 and moved to position 1");
        continue;
    }
    else {
        console.log("Player", playernumber, "needs to roll 1 to start, position remains same",playerpositions[player]);
        player = (player + 1) % number;
       continue;
    }
}
let lastPosition = playerpositions[player];
playerpositions[player] += die;
console.log("Player", playernumber, "moved to position", playerpositions[player]);
// usecase 5 - Ensure player gets to exact winning position 100
if (playerpositions[player] < start) {
    playerpositions[player] = start;
    console.log("Cant go below 0, reset to:", playerpositions[player]);

}
if (playerpositions[player] > end) {   
    playerpositions[player] = lastPosition;
    console.log("Cant go above 100, reset to:", playerpositions[player]);
}
// usecase 3 - for ladder and snake
switch (playerpositions[player]) {
    // fir ladders in board
    case 8:
        playerpositions[player] = 37;
        console.log("Player", playernumber, "got a ladder and moved to position 37");
        break;
    case 13:
        playerpositions[player] = 34;
        console.log("Player", playernumber, "got a ladder and moved to position 34");
        break;
    case 40:
        playerpositions[player] = 68;
        console.log("Player", playernumber, "got a ladder and moved to position 68");
        break;
    case 52:
        playerpositions[player] = 81;
        console.log("Player", playernumber, "got a ladder and moved to position 81");
        break;
    case 88:
        playerpositions[player] = 99;
        console.log("Player", playernumber, "got a ladder and moved to position 99");
        break;
        // for snake in board
    case 17:
        playerpositions[player] = 7;
        console.log("Player", playernumber, "got a snake and moved to position 7");
        break;
    case 54:
        playerpositions[player] = 34;
        console.log("Player", playernumber, "got a snake and moved to position 34");
        break;
    case 62:
        playerpositions[player] = 19;
        console.log("Player", playernumber, "got a snake and moved to position 19");
        break;
    case 94:
        playerpositions[player] = 80;
        console.log("Player", playernumber, "got a snake and moved to position 80");
        break;  
}
console.log("Player", playernumber, "is at position", playerpositions[player]);
if (playerpositions[player] === end) {
    winner = playernumber;
    break;
}
// extra turn if player rolls a 6
if (die === 6) {
    console.log("Player", playernumber, "rolled a 6 and gets another turn");
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
play = prompt("Do you want to play again? (yes/no): ").toLowerCase();
}
}
