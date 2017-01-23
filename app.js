'use strict';

const fs = require('fs'),
	Game = require('./Game.js');

function loadConfig() {
	const cfg = fs.readFileSync('config.json', 'utf-8');
	return JSON.parse(cfg);
}

const cfg = loadConfig();
let game = new Game(cfg.width, 
		cfg.length, 
		cfg.delay);
game.start();
