/* 
 * @author: Holden Clarke
 * @license: GPLv3
 *  Copyright (C) 2020 Holden Clarke
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 */

/* TODO: Add sound
 */


var flyX = 0;
var flyY = 0;

var helvetica;
var flySFX, smackSFX;
function preload(){
	helvetica = loadFont("/assets/HelveticaNeue-Medium.otf");
	soundFormats('mp3');
	flySFX = loadSound("/assets/karate-kid/sounds/flysfx.mp3");
	smackSFX = loadSound("/assets/karate-kid/sounds/smack.mp3");
}
let bg, time, flyimg, chopOpen, chopClosed, miyagiDo;

let dx = 0
let dy = 0;
let score = 0;
var grabbed = false;
var closed = false;
var isStarted = false;
var deducted = false;

var clickStarted = false;

function setup() {
	createCanvas(1920,windowHeight);
	bg = loadImage("assets/karate-kid/dojo.jpg");
	miyagiDo = loadImage("assets/karate-kid/miagi.png");
	flyimg = loadImage("assets/karate-kid/fly.png");
	chopOpen = loadImage("assets/karate-kid/chopOpen.png");
	chopClosed = loadImage("assets/karate-kid/chopClosed.png");
	frameRate(30);
	time = (30+1)*30;
	flySFX.play();
}

function draw() {
	print("LOGGING!!!!");
	time--;
	background(bg);
	image(miyagiDo, (windowWidth/2)-300, (windowHeight/2)-300);
	if(time > 0){
		if(mouseIsPressed){
			image(chopClosed, mouseX-70, mouseY-12);
			if((mouseX > flyX-40 && mouseX < flyX + 40) && (mouseY > flyY-40 && mouseY < flyY + 40) && !clickStarted){
				grabbed = true;
				smackSFX.play();
			}
			if(clickStarted) grabbed = false;
			clickStarted = true;
			print(grabbed);
		}else{
			image(chopOpen, mouseX-40, mouseY-12);
			clickStarted = false;
		}
	}
	if(time >= 1){
		fly();
	} 
	fill(222);
	rect(40,40, 150,75,20);

	fill(color('black'));
	textSize(24);
	if(time > 0){
		text("Time: " + Math.floor(time/30), 60,85);
	}else{
		text("Score: " + score, 60,85);
		flySFX.stop();
	}
	
}
function touchStarted(){
	if(!(flySFX.isLoaded())) return;
	if(!isStarted){
		flySFX.play();
		isStarted = true;
	}
	print("Hit!");
}

function fly(){
	if(flyX == 0 || flyY == 0){
		flyX = 1920/2;
		flyY = windowHeight/2;
		image(flyimg, flyX-40, flyY-40,80,80);
		return;
	}
	if(grabbed){
		flyX = random(41,1920-41);
		flyY = random(41,windowHeight-41);
		grabbed = false;
		score++;
	}
	if(time%30 == 0){
		dx = random(-8,8);
		dy = random(-8,8);
		flyX += dx;
		flyY += dy;
		image(flyimg, flyX-40, flyY-40, 80 ,80);
		return;
	}
	//print(typeof random(-4,4));
	if(flyX <= 0){
		dx = random(1,8);
	}
	if(flyX > 1920-40){
		dx = random(-8,-1);
	}
	if(flyY <= 0){
		dy = random(1,8);
	}
	if(flyY > windowHeight-40){
		dy = random(-8,-1);
	}
	flyX += dx;
	flyY += dy;
	image(flyimg, flyX-40, flyY-40, 80 ,80);
	//print(flyX + " " + flyY);
	//print(typeof flyX + " " + typeof flyY);
}

function exit( status ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // +      input by: Paul
    // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
    // +   improved by: Philip Peterson
    // +   bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
    // %        note 1: Should be considered expirimental. Please comment on this function.
    // *     example 1: exit();
    // *     returns 1: null

    var i;

    if (typeof status === 'string') {
        alert(status);
    }

    window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

    var handlers = [
        'copy', 'cut', 'paste',
        'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
        'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
        'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
    ];

    function stopPropagation (e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }
    for (i=0; i < handlers.length; i++) {
        window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
    }

    if (window.stop) {
        window.stop();
    }

    throw '';
}