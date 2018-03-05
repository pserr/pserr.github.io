function setup() {
 createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
	stroke("#FFF");
	// frameRate(60);
}

function draw() {
	line(mouseX, mouseY, pmouseX, pmouseY);
}