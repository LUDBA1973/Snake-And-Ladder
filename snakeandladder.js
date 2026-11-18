// usecase 1 - single player start position 0
const start = 0;

// usecase 7 - 2 players playing the game
let player1Position = start;
let player2Position = start;

// usecase 4 - repeat till player reaches position 100
const end = 100;

// usecase 6 - number of times the die is rolled to win the game
let dieCount = 0;
let playerturn = 1;
while (player1Position < end && player2Position < end) {
// usecase 2 - player rolls the die to get a number between 1 to 6
const die = Math.floor(Math.random() * 6) + 1;
console.log("die roll :", die);
dieCount++;
// usecase 3 - player checks for options no-play, ladder, snake
const options = Math.floor(Math.random() * 3);
console.log("options :", options);
// usecase 7  - player 1
if(playerturn === 1){
    console.log("Player 1 turn");
// usecase 5 - Ensure player gets to exact winning position 100
let lastPosition = player1Position;
if (options === 0) {
  console.log("no play and player1 position remains same",player1Position);
}
else if (options === 1){
    console.log("ladder");
    player1Position += die;
    console.log("New Player1Position :", player1Position);

}
else if (options === 2) {
    console.log("snake");
    player1Position -= die;
    console.log("New Player1Position :", player1Position);
}
if (player1Position < start) {
    player1Position = start;
    console.log("Cant go below 0, reset to:", player1Position);

}
if (player1Position > end) {   
    player1Position = lastPosition;
    console.log("Cant go above 100, reset to:", player1Position);
}
// usecase 7 - player 1 gets another turn if ladder and position < 100
if(options === 1 && player1Position < end){
    console.log("Player 1 gets another turn");
}
else{
    playerturn = 2;
}
}
// usecase 7 - player 2 
else{
    console.log("Player 2 turn");
    let lastPosition = player2Position;
    if (options === 0) {
  console.log("no play and player2 position remains same",player2Position);
}
else if (options === 1){
    console.log("ladder");
    player2Position += die;
    console.log("New Player2Position :", player2Position);

}
else if (options === 2) {
    console.log("snake");
    player2Position -= die;
    console.log("New Player2Position :", player2Position);
}
if (player2Position < start) {
    player2Position = start;
    console.log("Cant go below 0, reset to:", player2Position);

}
if (player2Position > end) {   
    player2Position = lastPosition;
    console.log("Cant go above 100, reset to:", player2Position);
}
// usecase 7 - player 2 gets another turn if ladder and position < 100
if(options === 1 && player2Position < end){
    console.log("Player 2 gets another turn");
}
else{
    playerturn = 1;
}
}
}
console.log("Total die rolls:", dieCount);
console.log("game over");
if(player1Position === end){
    console.log("Player 1 reached position 100 and won the game!");
}
else if(player2Position === end){
    console.log("Player 2 reached position 100 and won the game!");
}
