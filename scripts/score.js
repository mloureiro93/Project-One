class Score {
    constructor(game) {
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
    this.score = this.score - this.soupScore
    }
}