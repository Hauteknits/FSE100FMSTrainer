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

/* TODO: Setup Moles ---- PARTIALLY COMPLETED
 * TODO: Create an array of Mole objects
 * TODO: Make moles randomly appear
 * TODO: Implement Timer and Score
 */




var helvetica;
var bg, moleImg;
const width = 200;
const height = 150;
var xPos = [];
var yPos = [];
let time;

function preload(){
	helvetica = loadFont("/assets/HelveticaNeue-Medium.otf");
	soundFormats('mp3');
}

function setup() {
	createCanvas(1920,windowHeight);
	frameRate(30);
	bg = loadImage("/assets/whac-a-mole/grassTexture.png");
	moleImg = loadImage("/assets/whac-a-mole/mole.png");
	time = (60+1)*30;
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
	}
	if(time%60 == 0){
		let cur = new Mole();
		cur.appear();
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

class Mole {
	constructor(){
		this.x = -1;
		this.y = -1;
	}
	appear(){
		let randX = Math.floor(random(0,xPos.length));
		let randY = Math.floor(random(0,yPos.length));
		this.x = xPos[randX] - 100;
		this.y = yPos[randY] - 100;
		image(moleImg,this.x,this.y);
	}
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