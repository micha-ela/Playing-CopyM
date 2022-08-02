
// experiment with video => page in index01

var video;
var vScale = 5;

var particles = [];

var slider;

function setup() {
  canvas = createCanvas (640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  for (var i = 0; i < 2500; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  slider = createSlider(0, 255, 127);
  background(51);
}

function draw() {
  background(51);
  video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}



function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(4, 32);
  
    this.update = function() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
  
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    };
  
    this.show = function() {
      noStroke();
      var px = floor(this.x / vScale);
      var py = floor(this.y / vScale);
      var col = video.get(px, py);
      //console.log(col);
      fill(col[0], col[1], col[2], slider.value());
      ellipse(this.x, this.y, this.r, this.r);
    };
  }