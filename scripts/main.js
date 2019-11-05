const $canvasScore = document.querySelector("#score");
const $canvas = document.querySelector("#game");


const game = new Game($canvas);

document.getElementById("start-button").onclick = function() {
  game.startGame();
};

document.getElementById("reset-button").onclick = function() {
  game.ResetGame();
};
