let movers = [];
let attractors = [];
let attractor;
let test;
let attr_0f;
let attr_1f;


function setup () {
createCanvas (800,800);
for (let i = 0; i <10; i++) {
    let x=random(800);
    let y=random(800);
    movers[i]=new Mover (x,y,1,1);
}
attractors [0] =new Attractor (600,200,0,5,0,0,0);
attractors [1] =new Attractor (200,400,0,5,255,255,255);
attractor =attractors [0];
background(50);
}

function draw(){

    background(0,5);
    let ml = millis();
    
 
if (ml<100) {
    frameRate(1);

   
    for (let mover of movers) {
    // mover.update();
    mover.show();
    }
    movers.push(new Mover(random(800),random(800),1,5));
    
}

if (ml >=100 && movers[0].lifespan > 50) {
    frameRate(5);
    for (let attractor of attractors) {
        // attractor.update();
        // attractor.show();
        }


    //definieer cluster   

    for (let mover of movers) {
            // mover.update();
            mover.clusterInit();
            }


    let attr0=attractors[0];
    let attr1=attractors[1];

      for (let mover of movers) {
        mover.update();
        mover.show();
        if (mover.cluster==1){
        attr0.attract(mover);
        }
        if (mover.cluster==2){
            attr1.attract(mover);
            }
        }
        // attractor.show();
        
  }

   if (ml >=100 && movers[0].lifespan == 50) {
    for (let mover of movers) {
        mover.updateFeat();
        mover.show();
        if (mover.cluster==1){
        attr0.attract(mover);
        }
        if (mover.cluster==2){
            attr1.attract(mover);
            }
        }
   }

}



    
        
    // elkaar aantrekken
    // for (let mover of movers) {
    //     for (let other of movers) {
    //         if (mover!==other && mover.cluster==1 && other.cluster==1){
    //         mover.attract(other);
    //         }
    //     }
    //     for (let other of movers) {
    //         if (mover!==other && mover.cluster==2 && other.cluster==2){
    //         mover.attract(other);
    //         }
    //     }
    // }
    // for (let mover of movers) {
    //     for (let other of movers) {
    //         if (mover!==other && mover.cluster==1){
    //         mover.attract(other);
    //         }
    //     }
    // }
    // for (let mover of movers && attractors) {
    //   if (mover.cluster==0){
    //         attractor[0].attract(mover);
    //         }
    //   if (mover.cluster==1){
    //             attractor[1].attract(mover);
    //         }
    //     }




class Mover {
    constructor(x,y,vx,vy){
        this.pos=createVector(x,y);
        this.vel=createVector(vx,vy);
        this.vel.mult(0.1);
        this.acc=p5.Vector.random2D();
        this.lifespan = 255;
        this.shape = createVector(random(10, 20),random(10, 20));
        // this.mass=createVector(this.shape.x*this.shape.y*PI);
        this.mass=1;
        this.r=sqrt(this.mass)*2;
        this.color = createVector(random(0, 256),random(0, 256),random(0, 256));
        this.cluster=0;
    }

    show() {
        stroke(255,this.lifespan);
        strokeWeight(2);
        fill(this.color.x, this.color.y, this.color.z,this.lifespan);
        ellipse(this.pos.x,this.pos.y,this.shape.x,this.shape.y);
    }


    //try to create loop by working with arrays
    clusterInit () {
            let feat=this.color;
            let attr_0f=attractors[0].color;
            let attr_1f=attractors[1].color;
            let dist0 = feat.dist(attr_0f);
            let dist1 = feat.dist(attr_1f);
            if (dist0 < dist1){
                this.cluster=1;
                // this.color.set(10,10,10);
                // console.log("col1 " +this.particles[i].color.x);
                // console.log("dist2 " +distance2);
            }
            if (dist1 < dist0){
                this.cluster=2;
                // this.color.set(200,200,200);
                // console.log("dist1 " +distance1);
                // console.log("dist2 " +distance2);
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
            }
        }

        updateFeat () {
            this.vel.add(this.acc);
            this.vel.limit(10);
            this.pos.add(this.vel);
            this.acc.set(0,0); 
            // this.acc.setMag(0.1);
            this.color.set(attr_0f.color);
                if (this.lifespan < 255){
                this.lifespan += 1;
                }
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
        let distanceSq = constrain(force.magSq(),10,10);
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

function UpdateFeat () {
    let counter1=1;
    let counter2=1;
    attr_0f=attractors[0].color;
    attr_1f=attractors[1].color;
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
    } 
    attr_0f.div(counter1);
    attr_1f.div(counter2);
    // console.log(attr_0f.x);
}




