'use strict';

const clear = require('clear');

module.exports = class Game {
	
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
				this.state[j][i] = ' ';
			}
		}
	}

	draw() {
		clear();

		const x = parseInt(this.getRandomArbitrary(0, this.width)),
		y = parseInt(this.getRandomArbitrary(0, this.length));
		this.state[y][x] = 'x';

		for(let i = 0; i < this.length; i++) {
			console.log(this.state[i].join(''));
		}
	}

	start() {
		console.log("Game started!");
		setInterval(() => {this.draw()}, this.delay || 300);
	}

	getRandomArbitrary(min, max) {
  		return Math.random() * (max - min) + min;
	}

}