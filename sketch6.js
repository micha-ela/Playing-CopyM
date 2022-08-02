//experiment with images
// pixels

// index 02

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
 for (let col =0; col < img.width ; col+=10){
    for (let row =0; row < img.height ; row+=10){
        let c=img.get(col,row);
        stroke(color(c));
        strokeWeight(5);
        point(col,row);

    
    }
   


 }


}

function draw(){


}