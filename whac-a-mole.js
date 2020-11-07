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

/* TODO: Add MORE sound
 *
 */




var helvetica;
var bg, moleImg, malletUp, malletDown;
var whackSFX;
const width = 200;
const height = 150;
var xPos = [];
var yPos = [];
let time;

var moleArr = [];

function preload(){
	helvetica = loadFont("/assets/HelveticaNeue-Medium.otf");
	soundFormats('mp3');
	whackSFX = loadSound("/assets/whac-a-mole/sounds/whack.mp3");
}

function setup() {
	createCanvas(1920,windowHeight);
	frameRate(30);
	bg = loadImage("/assets/whac-a-mole/grassTexture.png");
	moleImg = loadImage("/assets/whac-a-mole/mole.png");
	malletUp = loadImage("/assets/whac-a-mole/malletUp.png");
	malletDown = loadImage("/assets/whac-a-mole/malletDown.png");
	time = (30+1)*30;
}

function draw() {
	time--;
	background(bg);
	fill(0,0,0)
	for(var i = 1080/4; i < 1080; i += 1080/4){
		for(var j = 1920/6; j < 1920; j += 1920/6){
			ellipse(j,i, width, height);
			xPos.push(j);
			yPos.push(i);
		}
	}
	fill(222);
	rect(40,40, 150,75,20);

	fill(color('black'));
	textSize(24);
	if(time > 0){
		text("Time: " + Math.floor(time/30), 60,85);
	}else{
		let hitMoles = 0;
		moleArr.forEach((m) =>{
			if(m.wasHit()) hitMoles++;
		})
		text("Score: " + hitMoles, 60,85);
	}
	if(time%45 == 0 && time > 0){
		let cur = new Mole(time);
		moleArr.push(cur);
	}
	moleArr.forEach((m)=>{
		m.appear();
	});
	if(time > 0){
		if(mouseIsPressed){
			image(malletDown, mouseX-75, mouseY-75);
			moleArr.forEach((m)=>{
				if(m.isAlive()){
					if(m.isHit(mouseX, mouseY)){
						m.kill();
					}
				}
			});
		}else{
			image(malletUp, mouseX-75, mouseY-75);
		}
	}
}
/*function touchStarted(){
	if(!(flySFX.isLoaded())) return;
	if(!isStarted){
		flySFX.play();
		isStarted = true;
	}
	print("Hit!");
}*/

class Mole {
	constructor(initTime){
		this.x = -1;
		this.y = -1;
		this.alive = true;
		this.hit = false;
		this.timeOfDeath = initTime - 90;
	}
	appear(){
		if(this.x == -1 && this.y == -1){
			let randX = Math.floor(random(0,xPos.length));
			let randY = Math.floor(random(0,yPos.length));
			this.x = xPos[randX] - 100;
			this.y = yPos[randY] - 100;
		}
		if(this.alive && !this.hit) image(moleImg,this.x,this.y);
		if(time == this.timeOfDeath) this.alive = false;
	}
	getX(){ return this.x; }
	getY(){ return this.y; }
	isHit(eX, eY){
		if(eX > this.x && eX < this.x+200){
			if(eY > this.y && eY < this.y+200){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	wasHit() { return this.hit; }
	isAlive(){ return this.alive; }
	kill(){
		this.alive = false;
		this.hit = true;
	}
}
function touchStarted(){
	if(!(whackSFX.isLoaded())) return;
	whackSFX.play();
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