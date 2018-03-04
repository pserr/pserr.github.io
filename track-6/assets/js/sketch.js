let camX = 300;
let camY = 300;

function setup() {
	createCanvas(400,400);
	// background(255);
	let cam1 = createCapture(VIDEO);
	// let cam2 = createCapture(VIDEO);
	cam1.size(320, 240);
	camY -= 100;

	cam1.position(camX, camY);
	// cam2.size(320, 240);
	// cam2.position(400, 400);
}

function draw() {

}