
let ctracker;

function setup() {
	createCanvas(windowWidth,windowHeight);
	noStroke();
	background(0);
	let cam1 = createCapture(VIDEO);
	// let cam2 = createCapture(VIDEO);
	cam1.size(320, 240);
	camY -= 100;

	cam1.position(camX, camY);
	// cam2.size(320, 240);
	// cam2.position(400, 400);


	ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
}

function draw() {
  background(255,255,255);
  
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  
  for (var i=0; i<positions.length; i++) {
    // set the color of the ellipse based on position on screen
    fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
    // draw ellipse at each position point
    ellipse(positions[i][0], positions[i][1], 10, 10);
  }
  
  
  fill(255,0,0);
  
  //make sure that the array is there
  if(positions.length > 0)
  {
  var noseX = positions[37][0]; 
var noseY = positions[37][1];
  ellipse(noseX, noseY, 100, 100);
  }
  
}