let angle = 0;

function preload() {
	kitten = loadImage('kittens/kitten0.png');
}

function setup() {
	createCanvas(400, 300, WEBGL);
}

function draw() {
	background(0);

	// var locY = (mouseY / height - 0.5) * (-2);
	// var locX = (mouseX / width - 0.5) * 2;
	
	let dx = mouseX - width / 2;
	let dy = mouseY - height / 2;
	let v = createVector(dx, dy, 0);
	v.normalize();

	ambientLight(255);
	// pointLight(0, 0, 255, mouseX-200, mouseY-200, 0);
	// pointLight(0, 255, 0, 0, 200, 300);
	// directionalLight(255, 255, 0, v);

	 // ambientMaterial(255, 255, 255);
	texture(kitten);

	noStroke();
	rectMode(CENTER);


	// translate(mouseX - width/2, mouseY - height/2);
	// translate(0, 0, mouseX);
	rotateX(angle);
	rotateY(angle * 0.3);
	// rect(0, 0, 150, 100);

  plane(200, 200);

	angle += 0.01;
}