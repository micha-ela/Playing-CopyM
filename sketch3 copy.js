function setup() {  
     
    // Create Canvas of given size 
    var cvs = createCanvas(600, 250);
}
  
function draw() {
    
  // Set the background color
  background('green'); 
    
  // Use createDiv() function to
  // create a div element
  var myDiv = createDiv('Welcome to GeeksforGeeks');
    
  // Set the position of div element
  myDiv.position(150, 100);  
    
  // Set the font-size of text
  myDiv.style('font-size', '24px');
    
  // Set the font color
  myDiv.style('color', 'white');
    
  // Use remove() function to remove div element
//   myDiv.remove();
}

function mousePressed() {
    remove(); // remove whole sketch on mouse press
  }