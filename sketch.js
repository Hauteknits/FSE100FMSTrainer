var helvetica;
function preload(){
	helvetica = loadFont("/assets/HelveticaNeue-Medium.otf");
}
function setup() {
	createCanvas(windowWidth,windowHeight, WEBGL);

	textAlign(CENTER, CENTER);
	textSize(60);
	textFont(helvetica);
}
function draw() {
	background("lightGreen");
	let time = millis();
	rotateX(time/1000);
	rotateZ(time/1234);
	fill("black");
	text("You did it!",0, 0);
}