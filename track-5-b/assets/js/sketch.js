let angle = 0;

function preload() {
	// kitten = loadImage('kittens/kitten0.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(0);

	// var locY = (mouseY / height - 0.5) * (-2);
	// var locX = (mouseX / width - 0.5) * 2;
	
	let dx = mouseX - width/2;
	let dy = mouseY - height/2;
	let v = createVector(dx, dy, 0);
	v.normalize();

	ambientLight(255);
	// pointLight(0, 0, 255, mouseX-200, mouseY-200, 0);
	// pointLight(0, 255, 0, 0, 200, 300);
	directionalLight(255, 255, 255, v);

	 // ambientMaterial(255, 255, 255);
	//  specularMaterial(250);

	noStroke();
	rectMode(CENTER);


	// translate(mouseX - width/2, mouseY - height/2);
	// translate(0, 0, mouseX);
	// rotateX(angle);
	// rotateY(angle * 0.3);
	// rect(0, 0, 150, 100);


	push();
	// translate(0, 0, 0);
		// pointLight(0, 0, 255, mouseX-200, mouseY-200, 0);
		//cyan
		pointLight(0, 255, 255, 300, -400, 300);
		//magenta
		pointLight(255, 0, 255, 100, -400, 300);
		//yellow
		pointLight(255, 255, 0, 400, -400, 300);
		//blue
		pointLight(0, 0, 255, 100, -200, 300);
		//red
		pointLight(255, 0, 0, -100, -200, 300);
		//green
		pointLight(0, 255, 0, 0, 200, 300);
  specularMaterial(100);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
	// torus(80, 20, 10, 10);
	sphere(150);
  pop();

	angle += 0.01;
}