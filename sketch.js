// var helvetica;
// function preload(){
// 	helvetica = loadFont("/assets/HelveticaNeue-Medium.otf");
// }
var button;
function setup() {
	createCanvas(windowWidth,windowHeight);

	button = createButton();
	button.position(120,120);
	button.html("<button onclick=\"window.location.href='exercises/operation/index.html';\">Operation Game</button>",);
	print(button.html());
	//button.mouseClicked(clicked());
	//button.html("<onclick= \"window.location.href='exercises/operation/index.html';\"/>");
	
}
// function draw() {
	
// }
function clicked(){
	// print("Triggered!");
	// print(mouseX + " " + mouseY);

    print("hit!");
    window.location.href("exercises/operation/index.html");

}