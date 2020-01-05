export class Hud {

    constructor(config = {
        score: { label: '', width: 0, height: 0 },
        timer: { label: '', width: 0, height: 0 },
        bgImg: { label: '', width: 0, height: 0 }
    }) {

        this.scoreValue = 0;
        this.timerValue = 0;
        this.config = config;
    }


    load() {
        this.imgHud(this.config.bgImg);
        this.scoreUi(this.config.score);
        this.timerUi(this.config.timer);
    }

    scoreUi(config = {
        label: 'Score',
        width: 0,
        height: 0
    }) {

        this.score = createDiv(`${config.label} = ${this.scoreValue}`);
        this.score.position(config.width, config.height);
        this.score.id = 'score';
        this.score.style('font-family', 'Comic Sans MS'); 
        this.score.style('font-size', '30px'); 
        this.score.style('color', '#9b6700');
    }

    timerUi(config = {
        label: 'Time',
        width: 150,
        height: 20
    }) {
        this.timer = createDiv(`${config.label} = 0`);
        this.timer.position(config.width, config.height);
        this.timer.id = 'timer';
        this.timer.style('font-family', 'Comic Sans MS'); 
        this.timer.style('font-size', '30px'); 
        this.timer.style('color', '#9b6700');
    }
    
    showScore() {
        this.score.html(`${this.config.score.label} ${this.scoreValue}`);
    }



    showTimer() {
        if (frameCount % 60 == 0 && this.timerValue > 0) {
            this.timerValue++;
        }

        if (millis() > this.timerValue) {
            print("it's been 5 seconds!");
            this.timerValue = this.timerValue + 1000;
        }

        this.timer.html(`${this.config.timer.label} ${int((this.timerValue / 1000))}`);
    }



    imgHud(config = {
        label: 'Fundo',
        width: 8,
        height: 10
    }) {

        this.bgImg = createDiv('<img src="assets/imgs/scenario/hud.png"  height="50" width="400"></img>');
        this.bgImg.position(config.width, config.height);
        //this.bgImg.addImage(this.imgWall);
        this.bgImg.style('color', 'white');
    }




    gameOver(config = {
        onFinish: () => {}
    } ){
        var gameOverBg = createDiv('<img src="assets/imgs/scenario/gameover.png"  height="500" width="300"></img>');
        gameOverBg.position(55, height/2 - 250);
       
        var timeG = createDiv('');
        timeG.position(180, height/2 +33);
        timeG.style('font-family', 'Comic Sans MS'); 
        timeG.style('font-size', '30px'); 
        timeG.style('color', '#9b6700');
        timeG.html(` ${int((this.timerValue / 1000))}`);

        var sG = createDiv('');
        sG.position(180, height/2 +80);
        sG.style('font-family', 'Comic Sans MS'); 
        sG.style('font-size', '30px'); 
        sG.style('color', '#9b6700');
        sG.html(` ${this.scoreValue}`);


        setTimeout(function() { 
           if (config && typeof config.onFinish == 'function') {
               config.onFinish();
           }
        }, 4000 ); 
      
        
        //button.position(55, height/2 - 250);
    };


    pickBeer(config = {
        onFinish: () => {}
    } ){
        var pickBeerBg = createDiv('<img src="assets/imgs/scenario/beer.png"  height="500" width="300"></img>');
        pickBeerBg.position(55, height/2 - 250);
       
        var timeG = createDiv('');
        timeG.position(180, height/2 +33);
        timeG.style('font-family', 'Comic Sans MS'); 
        timeG.style('font-size', '30px'); 
        timeG.style('color', '#9b6700');
        timeG.html(` ${int((this.timerValue / 1000))}`);

        var sG = createDiv('');
        sG.position(180, height/2 +80);
        sG.style('font-family', 'Comic Sans MS'); 
        sG.style('font-size', '30px'); 
        sG.style('color', '#9b6700');
        sG.html(` ${this.scoreValue}`);


        setTimeout(function() { 
           if (config && typeof config.onFinish == 'function') {
               config.onFinish();
           }
        }, 4000 ); 
      
        
        //button.position(55, height/2 - 250);
    };
}