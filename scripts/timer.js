class Timer {
  constructor(game) {
    this.game = game;
    this.context = game.contextScore;
    this.minutes = 0;
    this.seconds = 0;
    this.initialTime = 0;
    this.interval;
  }
  startTimer() {
    this.interval = setInterval(() => {
      this.initialTime += 1;
      this.seconds += 1;
      //   console.log("interval timer", this.initialTime);
    }, 1000);
  }

  getMinutes() {
    // console.log("CHECKING FOR MINUTES", this.initialTime);

    if (this.seconds === 60) {
      console.log("ADD A MINUTE");
      this.minutes += 1;
    }
    console.log("minutes variable", this.minutes);
  }

  getSeconds() {
    if (this.seconds >= 60) {
      this.seconds = 0;
    }
  }

  drawTimer() {
    // console.log("timer", this.initialTime);
    this.context.fillText(
      `Timer: ${this.minutes}:${Math.floor(this.seconds)} `,
      20,
      100
    );
  }
}
