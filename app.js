'use strict';

const clear = require('clear'),
	fs = require('fs');

class Game {
	
	constructor(width, length, delay) {
		this.width = width;
		this.length = length;
		this.delay = delay;
		this.state = new Array(length);  //state[length][width]
		
		for (let i = 0; i < length; i++) {
			this.state[i] = new Array(width);
		}
		
		for(let i = 0; i < width; i++) {
			for(let j = 0; j < length; j++) {
				this.state[j][i] = '+';
			}
		}
	}

	draw() {
		setTimeout( () => {this.show()},
					this.delay);
	}

	show() {
		clear();
		for(let i = 0; i < this.length; i++) {
			console.log(this.state[i].join(''));
		}
	}

	start() {
		console.log("Game started!");
		for(let i = 0; i < 15; i++) {
			this.draw();
		}
	}

}

function loadConfig() {
	const cfg = fs.readFileSync('config.json', 'utf-8');
	return JSON.parse(cfg);
}

const cfg = loadConfig();
let game = new Game(cfg.width, 
		cfg.length, 
		cfg.delay);
game.start();
