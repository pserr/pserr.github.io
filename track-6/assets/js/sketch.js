let camX = 300;
let camY = 300;

let ballX1 = 0;
let ballY1 = 200;
let ballX2 = 70;
let ballY2 = 500;
let ballX3 = 400;
let ballY3 = 300;
let ballX4 = 300;
let ballY4 = 20;
let ballX5 = 70;
let ballY5 = 130;

let ballSpeedX1 = 2;
let ballSpeedY1 = 0.8;
let ballSpeedX2 = -0.8;
let ballSpeedY2 = -2;
let ballSpeedX3 = -0.3;
let ballSpeedY3 = -1;
let ballSpeedX4 = 0.3;
let ballSpeedY4 = 1;
let ballSpeedX5 = 2.3;
let ballSpeedY5 = 1.2;



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
}

function draw() {

	background(0);


	if (ballX1 < 15) {
			ballSpeedX1 = abs(ballSpeedX1);
	}
	if (ballX1 > windowWidth - 15) {
			ballSpeedX1 = -abs(ballSpeedX1);
	}

	if (ballX2 < 15) {
		ballSpeedX2 = abs(ballSpeedX2);
	}
	if (ballX2 > windowWidth - 15) {
			ballSpeedX2 = -abs(ballSpeedX2);
		}

	if (ballX3 < 15) {
			ballSpeedX3 = abs(ballSpeedX3);
		}
	if (ballX3 > windowWidth - 15) {
				ballSpeedX3 = -abs(ballSpeedX3);
			}

			if (ballX4 < 15) {
				ballSpeedX4 = abs(ballSpeedX4);
			}
		if (ballX4 > windowWidth - 15) {
					ballSpeedX4 = -abs(ballSpeedX4);
				}

				if (ballX5 < 15) {
					ballSpeedX5 = abs(ballSpeedX5);
				}
			if (ballX5 > windowWidth - 15) {
						ballSpeedX5 = -abs(ballSpeedX5);
					}

	
	if (ballY1 < 15) {
		ballSpeedY1 = abs(ballSpeedY1);
	}
if (ballY1 > windowHeight - 15) {
		ballSpeedY1 = -abs(ballSpeedY1);
}
	if (ballY2 < 15) {
		ballSpeedY2 = abs(ballSpeedY2);
	}
if (ballY2 > windowHeight - 15) {
		ballSpeedY2 = -abs(ballSpeedY2);
}
if (ballY3 < 15) {
	ballSpeedY3 = abs(ballSpeedY3);
}
if (ballY3 > windowHeight - 15) {
	ballSpeedY3 = -abs(ballSpeedY3);
}
if (ballY4 < 15) {
	ballSpeedY4 = abs(ballSpeedY4);
}
if (ballY4 > windowHeight - 15) {
	ballSpeedY4 = -abs(ballSpeedY4);
}
if (ballY5 < 15) {
	ballSpeedY5 = abs(ballSpeedY5);
}
if (ballY5 > windowHeight - 15) {
	ballSpeedY5 = -abs(ballSpeedY5);
}


	ballX1 += ballSpeedX1;
	ballY1 += ballSpeedY1;
	ballX2 += ballSpeedX2;
	ballY2 += ballSpeedY2;
	ballX3 += ballSpeedX3;
	ballY3 += ballSpeedY3;
	ballX4 += ballSpeedX4;
	ballY4 += ballSpeedY4;
	ballX5 += ballSpeedX5;
	ballY5 += ballSpeedY5;

	// ellipse(ballX1, ballY1, 5, 5);
	// ellipse(ballX2, ballY2, 5, 5);
	// ellipse(ballX3, ballY3, 5, 5);
	// ellipse(ballX4, ballY4, 5, 5);
	// ellipse(ballX5, ballY5, 5, 5);
	strokeWeight(1);
	stroke(100);
	line(ballX1, ballY1, ballX2, ballY2);
	line(ballX1, ballY1, ballX3, ballY3);
	line(ballX1, ballY1, ballX4, ballY4);
	line(ballX1, ballY1, ballX5, ballY5);

	line(ballX2, ballY2, ballX3, ballY3);
	line(ballX2, ballY2, ballX4, ballY4);
	line(ballX2, ballY2, ballX5, ballY5);

	line(ballX3, ballY3, ballX4, ballY4);
	line(ballX3, ballY3, ballX5, ballY5);

	line(ballX4, ballY4, ballX5, ballY5);
	// line(ballX1, ballY1, ballX2, ballY2);
	// for (i=0; i < 1; i+= 0.02) {
	// 	var offsetX = noise(i * frequency + t) * amplitude * 100;
	// 	var offsetY = noise(i * frequency + t, 100) * amplitude * 100;
	// 	var x = lerp(ballX1, ballX2, i);
	// 	var y = lerp(ballY1, ballY2, i);
	// 	var h = lerp(h1,h2,i);
	// 	fill(h, 100, 100);
	// 	ellipse(x + offsetX, y + offsetY, 10, 10);
	// }

}