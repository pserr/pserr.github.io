// var ctracker;

function setup() {
  // setup canvas
  createCanvas(800,600);

  // setup camera capture
  let cam = createCapture(VIDEO);
  cam.size(400, 300);
  cam.position(0, 0);
  
  //hide video feed
  // videoInput.hide();
  

  // var cnv = createCanvas(800, 600);
  // cnv.position(0, 0);

  // // setup tracker
  // ctracker = new clm.tracker();
  // ctracker.init(pModel);
  // ctracker.start(videoInput.elt);

  // noStroke();
}

// function draw() {
//   background(255,255,255);
  
//   // get array of face marker positions [x, y] format
//   var positions = ctracker.getCurrentPosition();
  
//   for (var i=0; i<positions.length; i++) {
//     // set the color of the ellipse based on position on screen
//     fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
//     // draw ellipse at each position point
//     ellipse(positions[i][0], positions[i][1], 10, 10);
//   }
  
//   /*
//   fill(255,0,0);
  
//   //make sure that the array is there
//   if(positions.length > 0)
//   {
//   var noseX = positions[37][0]; 
// var noseY = positions[37][1];
//   ellipse(noseX, noseY, 100, 100);
//   }
//   */
// }