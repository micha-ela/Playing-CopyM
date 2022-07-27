let valueX;
let valueY;
  
function setup() {
      
    // Create Canvas
    createCanvas(500, 500);
}
   
function draw() {
      
    // Set the background color
    background(200); 
      
    // SEt the filled color
    fill('green');
      
    // Set the font size
    textSize(25);
      
    text('Click mouse to change color', 30, 30);
      
    // Fill color according to mouseClicked() 
    fill(valueX, 255-valueY, 255-valueX);
      
    // Draw ellipse  
    ellipse(mouseX, mouseY, 115, 115);
}
  
function mouseClicked() {
    valueX = mouseX%255;
    valueY = mouseY%255;
}