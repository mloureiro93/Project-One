const $canvasScore = document.querySelector("#score");
const $canvas = document.querySelector("#game");
const soundBottle = new Audio();
soundBottle.src =
  "sounds/zapsplat_human_male_vomit_sick_into_bowl_002_17871.mp3";

const soundSoup = new Audio();
soundSoup.src = "sounds/zapsplat_human_sip_soda_from_can_001_12378.mp3";

const soundHangover = new Audio();
soundHangover.src = "sounds/hangover.mp3";

const game = new Game($canvas, $canvasScore);

document.getElementById("instructions-button").onclick = function() {
  document.getElementById('pop-up').style.display='block'
  document.getElementById("game-flex-container").style.zIndex = -1;

  };

document.getElementById("return").onclick = function() {
  console.log("click");
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("game-flex-container").style.zIndex = 1;
};

document.getElementById("start-button").onclick = function() {
  console.log("pooo");
  game.startGame();
  game.timer.startTimer();
  document.getElementById("start-button").style.display = "none";

  document.getElementById("start-button").style.width = "0px";
  document.getElementById("start-button").style.height = "0px";
  document.getElementById("game").style.width = "350px";
};
document.getElementById("gameover-message").style.display = "none";

document.getElementById("play-again").onclick = function() {
  game.resetGame();
  document.getElementById("game-section-container").style.display = "flex";
  document.getElementById("gameover-message").style.display = "none";
};
