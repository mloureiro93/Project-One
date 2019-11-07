class Score {
    constructor(game) {
    this.game = game;
    this.context = game.context;    
    this.score = 0;
    this.sojuScore = 20;
    this.beerScore = 10;
    this.soupScore = 10;
    }
    

    SojuPoints(){
    this.score = this.score + this.sojuScore
    }

    BeerPoints() {
    this.score = this.score + this.beerScore
    }

    SoupPoints() {
    if (this.score === 0){
        this.score === 0
    } else {
    this.score = this.score - this.soupScore
    }
}

    LevelUpdate() {
        
    if (this.game.score.score >= 30 && this.game.score.score < 70 ) {
    console.log('Level 2')    
    this.game.sojuSpeed = 450
    this.game.beerSpeed = 450
    this.game.soupSpeed = 5000
        }
    if (this.game.score.score >= 70 && this.game.score.score <= 140 ) {
    console.log('Level 3')    
    this.game.sojuSpeed = 350
    this.game.beerSpeed = 350
    this.game.soupSpeed = 4000
        }  
    if (this.game.score.score > 200) {
    console.log('Level 4')    
    this.game.sojuSpeed = 250
    this.game.beerSpeed = 250
    this.game.soupSpeed = 3000
    }
}

// HighScore() {
//     if (this.)
// }
    
    }



