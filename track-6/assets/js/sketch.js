// line challenge solution

var freq_slider;
var amplitude_slider;
var time_slider;


  
var startX = 50;
var startY = 350;
var endX = 350;
var endY = 50;


var t = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);



}


function draw() {
	background(50);
	ellipseMode(CENTER);

	var frequency = 50 / 10;
	var amplitude = 50 / 100;
	var timeStep = 50/ 1000;

	t+=timeStep;
	noiseDetail(1, .5);



	fill(255);
	noStroke();
  
  

  
  
	for(i = 0; i < 1; i+=.02) {
		frameRate(30);
		var x = lerp(mouseX, pmouseX + 100, i);
		var y = lerp(mouseY, pmouseY+ 100, i);
		var offsetX = noise(i * frequency + t) * amplitude * 100;
		var offsetY = noise(i * frequency + t, 100) * amplitude * 100;

		ellipse(x + offsetX, y + offsetY, 10, 10);
	}



}
