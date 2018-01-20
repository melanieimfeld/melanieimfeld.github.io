new p5();

function setup() {                          
  createCanvas(windowWidth, windowHeight);
   background(13,30,46);   
  fill(69,86,93);  
    textFont('Helvetica');
    textSize(windowWidth/45);
    text("Draw a star-sprangled Sky by pressing the Mouse.",windowWidth/25,windowHeight/25, 200,200);
    fill(255); 
    arc(windowWidth/2,windowHeight/8,80,80,PI+HALF_PI,TWO_PI+HALF_PI);  
  
}

function draw() {      
 var rad =random(1,15); 
  var jit = pow(frameCount%3,3);               

    //console.log(jit);

if (mouseIsPressed) {
   fill(255);
   noStroke();
  ellipse(mouseX, mouseY, rad +jit, rad+ jit);


}

resetbutton();

if (mouseX < windowWidth-50 & mouseX > windowWidth-70 & mouseY < windowHeight-50 & mouseY > windowHeight-80) {
  background(3,30,46);
    fill(69,86,93);  
    textFont('Helvetica');
    textSize(windowWidth/45);
    text("Draw a star-sprangled Sky by pressing the Mouse.",windowWidth/25,windowHeight/25, 200,200);
    fill(255); 
    arc(windowWidth/2,windowHeight/8,80,80,PI+HALF_PI,TWO_PI+HALF_PI);  
}


}


function resetbutton() {
  push();
  stroke(69,86,93);  
  strokeWeight(6);
  line(windowWidth-50,windowHeight-80,windowWidth-80,windowHeight-50);
  line(windowWidth-80,windowHeight-80,windowWidth-50,windowHeight-50);
pop();
}
