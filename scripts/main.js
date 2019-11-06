const $canvasScore = document.querySelector("#score");
const $canvas = document.querySelector("#game");

const game = new Game($canvas, $canvasScore);
document.getElementById("gameover-message").style.visibility = "hidden";
document.getElementById("printer").style.visibility = "hidden";
document.getElementById("printer").style.width = "0px";
document.getElementById("printer").style.height = "0px";
document.getElementById("play-again").style.visibility = "hidden";
document.getElementById("play-again").style.width = "0px";
document.getElementById("play-again").style.height = "0px";


document.getElementById("start-button").onclick = function() {
  game.startGame();
  document.getElementById("start-button").style.visibility = "hidden";
  document.getElementById("start-button").style.width = "0px";
  document.getElementById("start-button").style.height = "0px";
  document.getElementById("game").style.width = "350px";
};


document.getElementById("play-again").onclick = function() {

}