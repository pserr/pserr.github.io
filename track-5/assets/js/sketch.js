let angle = 0;


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {


	let dx = mouseX - width/2;
	let dy = mouseY - height/2;
	let v = createVector(-dx, -dy, -100);
	v.normalize();


	pointLight(0, 255, 255, dx, dy, 300);
	//magenta
	pointLight(255, 0, 255, dx - 10, dy + 40, 300);
	//yellow
	pointLight(255, 255, 0, dx + 40, dy - 40, 300);
	//blue
	pointLight(0, 0, 255, dx + 60, dy, 300);
	//red
	pointLight(255, 0, 0, dx - 30, dy + 60, 300);
	//green
	pointLight(0, 255, 0, dx - 60, dy - 60, 300);

	specularMaterial(100);


	ambientLight(255);

	noStroke();
	rectMode(CENTER);

if ($("body").hasClass("black")){
	rotatingSphere();
} else if ($("body").hasClass("white")){
	rotatingBox();
}



	angle += 0.01;
}

function rotatingBox() {
	background(255);
	push();
	//cyan
	xtrans = random(400);
	ytrans = random(400);
	translate(200-xtrans, 200-ytrans, 0);
	rotateZ(frameCount * 0.02);
	rotateX(frameCount * 0.02);
	rotateY(frameCount * 0.02);
	// torus(80, 20, 10, 10);
	cone(10, 250);
	pop();
}

function rotatingSphere() {
	background(0);
	push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
	// torus(80, 20, 10, 10);
	sphere(150);
	pop();
	push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
	// torus(80, 20, 10, 10);
	sphere(150);
	pop();
	push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
	// torus(80, 20, 10, 10);
	sphere(150);
	pop();
	push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
	// torus(80, 20, 10, 10);
	sphere(150);
  pop();
}