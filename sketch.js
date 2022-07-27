let movers = [];
let movers2 = [];
let attractors = [];
let attractor;
let test;
let attr_0f;
let attr_1f;
let attr_2f;
let attractors_feat = [];
let dist = [];
let iter=1;
let counter=1;


function setup () {
createCanvas (windowWidth, windowHeight);
for (let i = 0; i <50; i++) {
    let x=random(windowWidth);
    let y=random(windowHeight);
    let cx=random(255);
    let cy=random(255);
    let cz=random(255);
    movers[i]=new Mover (x,y,1,1,cx,cy,cz);
    movers2[i]=new Mover (x,y,1,1,cx,cy,cz);
}

attractors [0] =new Attractor ((windowWidth/3)*2,windowHeight/3,0,5,random(0,256),random(0,256),random(0,256));
attractors [1] =new Attractor (windowWidth/3,(windowHeight/3)*2,0,5,random(0,256),random(0,256),random(0,256));
attractors [2] =new Attractor (windowWidth/4,windowHeight/3.5,0,5,random(0,256),random(0,256),random(0,256));
attractor =attractors [0];
attractors_feat=attractors;
let attr0=attractors[0];
let attr1=attractors[1];
}

function draw () {
    step();
    if (iter < 2) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 3) { 
        // Increase counter everytime
        counter += 0.01; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 4) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 5) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
   else if (iter < 6) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
   else if (iter < 7) { 
        // Increase counter everytime
        counter += 0.01; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 8) { 
        // Increase counter everytime
        counter += 0.01; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else {
 
        // If iter increases by 11 then
        // stop the loop
        noLoop();
    }
}

class Mover {
    constructor(x,y,vx,vy,cx,cy,cz){
        this.pos=createVector(x,y);
        this.vel=createVector(vx,vy);
        this.vel.mult(0.1);
        this.acc=p5.Vector.random2D();
        this.lifespan = 150;
        this.shape = createVector(random(40, 50),random(40, 50));
        // this.mass=createVector(this.shape.x*this.shape.y*PI);
        this.mass=1;
        this.r=sqrt(this.mass)*2;
        this.featx=cx;
        this.featy=cy;
        this.featz=cz;
        this.color = createVector(this.featx,this.featy,this.featz);
        this.colori = createVector(this.featx,this.featy,this.featz);
        this.cluster=0;
        this.counter1=0;
        this.counter2=0;
    }

    show() {
        // stroke(255,this.lifespan);
        // strokeWeight(0);
        noStroke();
        fill(this.color.x, this.color.y, this.color.z,this.lifespan);
        ellipse(this.pos.x,this.pos.y,this.shape.x,this.shape.y);
    }


    //try to create loop by working with arrays
    clusterInit () {
            let feat=this.color;
            let attr_0f=attractors[0].color;
            let attr_1f=attractors[1].color;
            let attr_2f=attractors[2].color;
            let dist0 = feat.dist(attr_0f);
            let dist1 = feat.dist(attr_1f);
            let dist2 = feat.dist(attr_2f);
            if (dist0 < dist1 && dist0 < dist2){
                this.cluster=1;
                // this.color.set(10,10,10);
                // console.log("col1 " +this.particles[i].color.x);
                // console.log("dist2 " +distance2);
            }
            if (dist1 < dist0 && dist1 < dist2){
                this.cluster=2;
                // this.color.set(200,200,200);
                // console.log("dist1 " +distance1);
                // console.log("dist2 " +distance2);
            } 
            if (dist2 < dist0 && dist2 < dist1){
                this.cluster=3;
            }
            // console.log("cluster " +this.cluster);
            // console.log(dist0);
            // console.log(dist1);
            // // console.log(feat1);
                    
        }


    applyForce(force) {
        let f=p5.Vector.div(force,this.mass);
            this.acc.add(f);
    }

    attract (mover) {
        let force = p5.Vector.sub(this.pos,mover.pos);
        let distanceSq = constrain(force.magSq(),5,25);
        let G=1;
        let strength = G*(this.mass*mover.mass)/distanceSq;
        force.setMag(strength);
        mover.applyForce (force);
    }

    update () {
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.acc.set(0,0); 
        // this.acc.setMag(0.1);
        if (this.lifespan > 50){
        this.lifespan -= 1;
        this.counter1 += 1;
            }
        }

    updateFeat () {
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.acc.set(0,0); 
        // console.log(this.counter2);
        // this.acc.setMag(0.1);
        this.counter2 += 1;
        if (this.cluster==1){
        this.color.set(attr_0f);
            if (this.lifespan > 10 ){
            this.lifespan -= 1;
            }
        }
        if (this.cluster==2){
            this.color.set(attr_1f);
                if (this.lifespan > 10){
                this.lifespan -= 1;
                }
            }
        if (this.cluster==3){
            this.color.set(attr_2f);
                if (this.lifespan > 10){
                this.lifespan -= 1;
                }
            }
        }  

    resetFeat () {
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.acc.set(0,0); 
        this.color.set(this.colori);
            if (this.lifespan > 10){
            this.lifespan += 3;
            }
            // console.log(this.color.x);
            // console.log(this.colori.x);
        }
        

    }

class Attractor {
    constructor(x,y,vx,vy,R,G,B){
        this.pos=createVector(x,y);
        this.vel=createVector(vx,vy);
        this.vel.mult(random(0.1));
        this.acc=p5.Vector.random2D();
        this.lifespan = 255;
        this.shape = createVector(random(10, 20),random(10, 20));
        // this.mass=createVector(this.shape.x*this.shape.y*PI);
        this.mass=1;
        this.r=sqrt(this.mass)*2;
        // this.color = createVector(random(0, 256),random(0, 256),random(0, 256));
        this.color = createVector(R,G,B);
    }

    attract (mover) {
        let force = p5.Vector.sub(this.pos,mover.pos);
        let distanceSq = constrain(force.magSq(),5,5);
        let G=10;
        let strength = G*(this.mass*mover.mass)/distanceSq;
        force.setMag(strength);
        mover.applyForce (force);
    }
    
    show() {
        stroke(255);
        strokeWeight(2);
        fill(this.color.x, this.color.y, this.color.z);
        ellipse(this.pos.x,this.pos.y,this.shape.x*2,this.shape.y*2);
    }
    

}

function AveFeatCluster () {
    let counter1=1;
    let counter2=1;
    let counter3=1;
    attr_0f=attractors[0].color;
    attr_1f=attractors[1].color;
    attr_2f=attractors[2].color;
    // console.log(attr_0f.x);
       for (let i = 0; i < movers.length; i++) {
        let feat=movers[i].color;
        if (movers[i].cluster==1){
            attr_0f.add(feat);
            counter1 +=1;
        }
        if (movers[i].cluster==2){
            attr_1f.add(feat);
            counter2 +=1;
        }
        if (movers[i].cluster==3){
            attr_2f.add(feat);
            counter3 +=1;
        }
    } 
    attr_0f.div(counter1);
    attr_1f.div(counter2);
    attr_2f.div(counter3);
    // console.log(attr_0f.x);
}


function CreateMovers1 () {   
    
    frameRate(5);
    for (let mover of movers) {
    // mover.update();
    mover.show();
    }
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,random(255),random(255,random(255))));
    }

function MoversToCluster () {
    frameRate(5);
    for (let mover of movers) {
        mover.clusterInit();
        }
    for (let mover of movers) {
        mover.update();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
    }
}


function MoversMorphToCluster() {
    AveFeatCluster();
    for (let mover of movers) {
        mover.updateFeat();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
        }
}

function MoversResetFeat () {
    for (let mover of movers) {
        mover.resetFeat();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
        }
}

// function CreateMovers2 () {       
//     frameRate(1);
//     for (let mover of movers2) {
//     // mover.update();
//     mover.show();
//     }
//     let cx_0f=attr_0f.x*random(0.8,1);
//     let cy_0f=attr_0f.y*random(0.8,1);
//     let cz_0f=attr_0f.z*random(0.8,1);
//     let cx_1f=attr_1f.x*random(0.8,1);
//     let cy_1f=attr_1f.y*random(0.8,1);
//     let cz_1f=attr_1f.z*random(0.8,1);
//     movers2.push(new Mover(random(800),random(800),1,5,cx_0f,cy_0f,cz_0f));
//     movers2.push(new Mover(random(800),random(800),1,5,cx_1f,cy_1f,cz_1f));
//     }


function CreateMovers2 () {       
    frameRate(5);
    for (let mover of movers) {
        mover.update();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
        }
    let cx_0f=attr_0f.x*random(0.2,1);
    let cy_0f=attr_0f.y*random(0.2,1);
    let cz_0f=attr_0f.z*random(0.2,1);
    let cx_1f=attr_1f.x*random(0.2,1);
    let cy_1f=attr_1f.y*random(0.2,1);
    let cz_1f=attr_1f.z*random(0.2,1);
    let cx_2f=attr_2f.x*random(0.2,1);
    let cy_2f=attr_2f.y*random(0.2,1);
    let cz_2f=attr_2f.z*random(0.2,1);
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_0f,cy_0f,cz_0f));
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_1f,cy_1f,cz_1f));
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_2f,cy_2f,cz_2f));
    }


    function MoversToCluster2 () {
        frameRate(5);
        for (let mover of movers2) {
            mover.clusterInit();
            }
        for (let mover of movers2) {
            mover.update();
            mover.show();
            if (mover.cluster==1){
                attractors[0].attract(mover);
                }
            if (mover.cluster==2){
                attractors[1].attract(mover);
                }
        }
    }

    function MoversMorphToCluster2() {
        AveFeatCluster();
        for (let mover of movers2) {
            mover.updateFeat();
            mover.show();
            if (mover.cluster==1){
                attractors[0].attract(mover);
                }
            if (mover.cluster==2){
                attractors[1].attract(mover);
                }
            if (mover.cluster==3){
                attractors[2].attract(mover);
                }
            }
    }

function step () {
    switch (iter) {
        case 1:
            clear();
            CreateMovers1();
            break;
        case 2:
            clear();
            MoversToCluster();
            break;
        case 3:
            clear();
            MoversMorphToCluster();
            break;
        case 4:
            clear();
            MoversResetFeat();
            break;    
        case 5:
            clear();
            CreateMovers2();
            break;
        case 6:
            clear();
            MoversToCluster();
            break;
        case 7:
            clear();
            MoversMorphToCluster();
            break;
    }
    }

