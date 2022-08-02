//experiment with images
// rectangles

// index 04


let img;
let cnv;

function preload() {
    img = loadImage('Beeld/03kl(1).png');
    // console.log(img.width);
}

function setup (){
    console.log(img.width);
 cnv=createCanvas(img.width,img.height);

//  let newCanvasX=(windowWidth - img.width)/2;
//  let newCanvasY=(windowHeight - img.width)/2;
 cnv.position(0,0);
 background(0);
 for (let col =0; col < img.width ; col+=2){
    for (let row =0; row < img.height ; row+=2){
        let xPos=col;
        let yPos=row;
        let c=img.get(col,row);
        push();
        translate(xPos,yPos);
        rotate(radians(random(360)));
        noFill();
        stroke(color(c));
        strokeWeight(random(5));
        point(xPos,yPos);
        // fill(color(c));
        // rect(col,row,10,10);
        strokeWeight(random(3));
        curve(xPos,yPos,sin(xPos)*random(60),cos(xPos)*sin(xPos)*random(90),random(10),
        random(80),cos(yPos)*sin(xPos)*random(1410),cos(xPos)*sin(xPos)*50);
        pop();
    
    }
   


 }


}

function draw(){


}