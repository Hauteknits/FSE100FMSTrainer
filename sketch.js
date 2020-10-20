/*
 * TODO: Load in fly and define path
 * TODO: Define Score
 * TODO: Define end of game
 * TODO: Add sound
 */



var helvetica;
function preload(){
	helvetica = loadFont("/assets/HelveticaNeue-Medium.otf");
}
let bg, time, flyimg, chopOpen, chopClosed, miyagiDo;

var closed = false;
function setup() {
	createCanvas(1920,windowHeight);
	//println(windowWidth + " " + windowHeight);
	bg = loadImage("assets/karate-kid/dojo.jpg");
	miyagiDo = loadImage("assets/karate-kid/miagi.png");
	flyimg = loadImage("assets/karate-kid/fly.png");
	chopOpen = loadImage("assets/karate-kid/chopOpen.png");
	chopClosed = loadImage("assets/karate-kid/chopClosed.png");
	print(typeof bg);
	frameRate(30);
	time = (30+1)*30;
	//print(button.html());
	//button.mouseClicked(clicked());
	//button.html("<onclick= \"window.location.href='exercises/operation/index.html';\"/>");
	
}

function draw() {
	time--;
	background(bg);
	image(miyagiDo, (windowWidth/2)-300, (windowHeight/2)-300);

	if(time > 0){
		if(mouseIsPressed){
			image(chopClosed, mouseX-70, mouseY-12);
		}else{
			image(chopOpen, mouseX-40, mouseY-12);
		}
	}

	fill(222);
	rect(40,40, 150,75,20);

	fill(color('black'));
	textSize(24);
	if(time > 0){
		text("Time: " + Math.floor(time/30), 60,85);
	}else{
		text("Time: 0", 60,85);
	}
	
}


