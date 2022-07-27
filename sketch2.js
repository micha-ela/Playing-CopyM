@@ -0,0 +1,107 @@
let buttons = [];
let img;
let valueX;
let valueY;
  
// function preload() {
//   img = loadImage('test.png');
// }


function setup () {
canvas = createCanvas (windowWidth*0.96, windowHeight);
canvas.position(0,0);
buttons[0] = new Button (width*0.7,height*0.1,width*0.08);
buttons[1] = new Button (width*0.8,height*0.1,width*0.08);
buttons[2] = new Button (width*0.9,height*0.1,width*0.08);
}

function draw () {
    // canvas.drawingContext.globalCompositeOperation = 'source-over'; //<-- set this
    // background(75);
    CreateButtons();
    text('Yes',width*0.7,height*0.1);
       for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].option==1){
            textFont('coordinates');
            textSize(24);
            text('hi beautiful world',width*0.7,height*0.25);
        }
        if (buttons[i].option==2){
            textFont('coordinates');
            textSize(24);
            text('hi hi akin',width*0.7,height*0.35);
        }
        console.log(buttons[i].option);
}

}

function mouseClicked (){
    for (let button of buttons) {
        // mover.update();
        // button.show();
        button.clicked();

}
}

function mouseReleased() {
    for (let button of buttons) {
        // mover.update();
        // button.show();
        button.released();

}
}

class Button {
    constructor(x,y,diam){
        this.pos=createVector(x, y);
        this.diam=diam;
        this.color = createVector(255,20,147);
        this.transp = 100;
        this.option=0;
        this.text="put your text here";
    }

    show() {
        // stroke(255,this.lifespan);
        // strokeWeight(0);
        noStroke();
        fill(this.color.x, this.color.y, this.color.z,this.transp);
        circle(this.pos.x,this.pos.y,this.diam);
    }

    clicked () {
        var d=dist(mouseX,mouseY,this.pos.x,this.pos.y);
        if (d<50) {
            this.color=createVector(0,0,0);
        }
        if (mouseX < width*0.6+50) {
            this.option=1;
        }
        if (mouseX > width*0.6+50 && mouseX < width*0.75+50  ) {
            this.option=2;
        }

    }

    released() {
        this.color = createVector(255,20,147);
        this.option=0;

    }
}

function CreateButtons () {   
    
    frameRate(5);
    for (let button of buttons) {
    // mover.update();
    button.show();
    // button.clicked();
    }
   
    }
