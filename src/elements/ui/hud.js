export class Hud {

    constructor(config = {
        score: { label: '', width: 0, height: 0 },
        timer: { label: '', width: 0, height: 0 }
    }) {

        this.scoreValue = 0;
        this.timerValue = 0;
        this.config = config;

        this.scoreUi(config.score);
        this.timerUi(config.timer);
    }

    scoreUi(config = {
        label: 'Score',
        width: 0,
        height: 0
    }) {

        this.score = createDiv(`${config.label} = ${this.scoreValue}`);
        this.score.position(config.width, config.height);
        this.score.id = 'score';
        this.score.style('color', 'white');
    }

    timerUi(config = {
        label: 'Time',
        width: 150,
        height: 20
    }) {
        this.timer = createDiv(`${config.label} = 0`);
        this.timer.position(config.width, config.height);
        this.timer.id = 'timer';
        this.timer.style('color', 'white');
    }
    
    showScore() {
        this.score.html(`${this.config.score.label} = ${this.scoreValue}`);
    }



    showTimer() {
        if (frameCount % 60 == 0 && this.timerValue > 0) {
            this.timerValue++;
        }

        if (millis() > this.timerValue) {
            print("it's been 5 seconds!");
            this.timerValue = this.timerValue + 1000;
        }

        this.timer.html(`${this.config.timer.label} = ${int((this.timerValue / 1000))}`);
    }
}