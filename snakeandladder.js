// usecase 1 - single player start position 0
const start = 0;
let playerPosition = start;
console.log("playerPosition", playerPosition);

// usecase 4 - repeat till player reaches position 100
const end = 100;
while (playerPosition < end) {
// usecase 2 - player rolls the die to get a number between 1 to 6
const die = Math.floor(Math.random() * 6) + 1;
console.log("die roll :", die);

// usecase 3 - player checks for options no-play, ladder, snake
const options = Math.floor(Math.random() * 3);
console.log("options :", options);
// usecase 5 - Ensure player gets to exact winning position 100
let lastPosition = playerPosition;
if (options === 0) {
  console.log("no play and player position remains same",playerPosition);
}
else if (options === 1){
    console.log("ladder");
    playerPosition += die;
    console.log("New PlayerPosition :", playerPosition);

}
else if (options === 2) {
    console.log("snake");
    playerPosition -= die;
    console.log("New PlayerPosition :", playerPosition);
}
if (playerPosition < start) {
    playerPosition = start;
    console.log("Cant go below 0, reset to:", playerPosition);

}
if (playerPosition > end) {
    playerPosition = lastPosition;
    console.log("Cant go above 100, reset to:", playerPosition);
}
}
