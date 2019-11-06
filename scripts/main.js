const $canvasScore = document.querySelector("#score");
const $canvas = document.querySelector("#game");
const soundBottle = new Audio();
soundBottle.src = "sounds/zapsplat_human_male_vomit_sick_into_bowl_002_17871.mp3"

const soundSoup = new Audio();
soundSoup.src = "sounds/zapsplat_human_sip_soda_from_can_001_12378.mp3"

const soundHangover = new Audio();
soundHangover.src = "sounds/hangover.mp3"

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
  game.resetGame();
document.getElementById("game").style.visibility = "visible"; 
document.getElementById("gameover-message").style.visibility = "hidden";
document.getElementById("printer").style.visibility = "hidden";
document.getElementById("printer").style.width = "0px";
document.getElementById("printer").style.height = "0px";
document.getElementById("play-again").style.visibility = "hidden";
document.getElementById("play-again").style.width = "0px";
document.getElementById("play-again").style.height = "0px";
console.log('click')

}