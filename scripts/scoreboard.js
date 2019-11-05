class Scoreboard {
    constructor(game){
    this.canvas = $canvasScore;
    this.context = $canvasScore.getContext("2d");
    this.score = game.score.score;
    //this.highScore = ?
    }
WriteScore() {
this.context.font = "20px Arial";
this.context.fillText(`Current Score:${this.score}`,20, 20)
}

LifeBar(){
    
}

}