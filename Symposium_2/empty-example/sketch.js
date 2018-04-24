// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let wX;
let wY;
let ballX1 = 100;
let ballY1 = 200;
let ballX2 = 70;
let ballY2 = 500;
let ballX3 = 400;
let ballY3 = 300;
let ballX4 = 300;
let ballY4 = 20;
let ballX5 = 70;
let ballY5 = 130;
let ballX6 = 70;
let ballY6 = 330;
let ballX7 = 370;
let ballY7 = 230;
let ballX8 = 470;
let ballY8 = 430;

let ballSpeedX1 = 0.8;
let ballSpeedY1 = 0.2;
let ballSpeedX2 = -0.2;
let ballSpeedY2 = -0.8;
let ballSpeedX3 = -0.3;
let ballSpeedY3 = -0.5;
let ballSpeedX4 = 0.3;
let ballSpeedY4 = 0.5;
let ballSpeedX5 = 0.1;
let ballSpeedY5 = 0.4;
let ballSpeedX6 = 0.1;
let ballSpeedY6 = 0.4;
let ballSpeedX7 = 0.1;
let ballSpeedY7 = 0.4;
let ballSpeedX8 = 0.1;
let ballSpeedY8 = 0.4;





function setup() {
	let canvasY = windowHeight * 0.8;
	createCanvas(windowWidth, canvasY);
	noStroke();
		background(0);


    
}

function draw() {
    background(0);
    fill(255);
		noStroke();
		
		let wX = windowWidth;
		let wY = windowHeight * 0.8;


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
					if (ballX6 < 15) {
						ballSpeedX6 = abs(ballSpeedX6);
					}
				if (ballX6 > windowWidth - 15) {
							ballSpeedX6 = -abs(ballSpeedX6);
						}
						if (ballX7 < 15) {
							ballSpeedX7 = abs(ballSpeedX7);
						}
					if (ballX7 > windowWidth - 15) {
								ballSpeedX7 = -abs(ballSpeedX7);
							}
						if (ballX7 < 15) {
							ballSpeedX7 = abs(ballSpeedX7);
						}
					if (ballX8 > windowWidth - 15) {
								ballSpeedX8 = -abs(ballSpeedX8);
							}
							if (ballX8 > windowWidth - 15) {
								ballSpeedX8 = -abs(ballSpeedX8);
							}

	
	if (ballY1 < 35) {
		ballSpeedY1 = abs(ballSpeedY1);
	}
if (ballY1 > wY - 15) {
		ballSpeedY1 = -abs(ballSpeedY1);
}
	if (ballY2 < 35) {
		ballSpeedY2 = abs(ballSpeedY2);
	}
if (ballY2 > wY - 15) {
		ballSpeedY2 = -abs(ballSpeedY2);
}
if (ballY3 < 35) {
	ballSpeedY3 = abs(ballSpeedY3);
}
if (ballY3 > wY - 15) {
	ballSpeedY3 = -abs(ballSpeedY3);
}
if (ballY4 < 35) {
	ballSpeedY4 = abs(ballSpeedY4);
}
if (ballY4 > wY - 15) {
	ballSpeedY4 = -abs(ballSpeedY4);
}
if (ballY5 < 35) {
	ballSpeedY5 = abs(ballSpeedY5);
}
if (ballY5 > wY - 15) {
	ballSpeedY5 = -abs(ballSpeedY5);
}
if (ballY6 < 35) {
	ballSpeedY6 = abs(ballSpeedY6);
}
if (ballY6 > wY - 15) {
	ballSpeedY6 = -abs(ballSpeedY6);
}
if (ballY7 < 35) {
	ballSpeedY7 = abs(ballSpeedY7);
}
if (ballY7 > wY - 15) {
	ballSpeedY7 = -abs(ballSpeedY7);
}
if (ballY8 < 35) {
	ballSpeedY8 = abs(ballSpeedY8);
}
if (ballY8 > wY - 15) {
	ballSpeedY8 = -abs(ballSpeedY8);
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
	ballX6 += ballSpeedX6;
	ballY6 += ballSpeedY6;
	ballX7 += ballSpeedX7;
	ballY7 += ballSpeedY7;
	ballX8 += ballSpeedX8;
	ballY8 += ballSpeedY8;

	textSize(64);
	textAlign(CENTER);
	textFont('Avenir');
	textStyle(BOLD);
	text('DIGITAL', ballX1, ballY1);
	text('MATERIALITY', ballX2, ballY2);
	text('in', ballX3, ballY3);
	text('the', ballX4, ballY4);
	text('AGE', ballX5, ballY5);
	text('of', ballX6, ballY6);
	text('DESIGN', ballX7, ballY7);
	text('SYSTEMS', ballX8, ballY8);


  strokeWeight(3);
  colorMode(HSB, 100);
	stroke(100, 0, 100);

	line(ballX1, ballY1, ballX2, ballY2);
	line(ballX2, ballY2, ballX3, ballY3);
	line(ballX3, ballY3, ballX4, ballY4);
	line(ballX4, ballY4, ballX5, ballY5);
	line(ballX5, ballY5, ballX6, ballY6);
	line(ballX6, ballY6, ballX7, ballY7);
	line(ballX7, ballY7, ballX8, ballY8);



}
