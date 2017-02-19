var spymaster = angular.module('spymaster', []);

spymaster.controller('SpymasterController', ['$scope',
	function SpymasterController($scope) {
		// var POSITIONS = [
		// 	{x: 32.8, y: 32}, {x: 59.5, y: 32}, {x: 86, y: 32}, {x: 113, y: 32}, {x: 139.6, y: 32},
		// 	{x: 32.8, y: 59}, {x: 59.5, y: 59}, {x: 86, y: 59}, {x: 113, y: 59}, {x: 139.6, y: 59},
		// 	{x: 32.8, y: 86}, {x: 59.5, y: 86}, {x: 86, y: 86}, {x: 113, y: 86}, {x: 139.6, y: 86},
		// 	{x: 32.8, y: 112.5}, {x: 59.5, y: 112.5}, {x: 86, y: 112.5}, {x: 113, y: 112.5}, {x: 139.6, y: 112.5},
		// 	{x: 32.8, y: 139}, {x: 59.5, y: 139}, {x: 86, y: 139}, {x: 113, y: 139}, {x: 139.6, y: 139}
		// ];

		var POSITIONS = [
			{x: 139, y: 32}, {x: 59.5, y: 32}, {x: 86, y: 32}, {x: 113, y: 32}, {x: 139.6, y: 32},
			{x: 139, y: 59}, {x: 59.5, y: 59}, {x: 86, y: 59}, {x: 113, y: 59}, {x: 139.6, y: 59},
			{x: 139, y: 86}, {x: 59.5, y: 86}, {x: 86, y: 86}, {x: 113, y: 86}, {x: 139.6, y: 86},
			{x: 139, y: 112.5}, {x: 59.5, y: 112.5}, {x: 86, y: 112.5}, {x: 113, y: 112.5}, {x: 139.6, y: 112.5},
			{x: 139, y: 139}, {x: 59.5, y: 139}, {x: 86, y: 139}, {x: 113, y: 139}, {x: 139.6, y: 139}
		];

		var placeColors = function() {
			var numRed = 9;
			var numBlue = 8;
			var numAssassin = 1;
			var placed = {};
			while (numRed > 0) {
				var randomIndex = Math.floor(Math.random() * 25);
				if (!(randomIndex in placed)) {
					placed[randomIndex] = 'red';
					numRed--;
				}
			}
			while (numBlue > 0) {
				var randomIndex = Math.floor(Math.random() * 25);
				if (!(randomIndex in placed)) {
					placed[randomIndex] = 'blue';
					numBlue--;
				}
			}
			while (numAssassin > 0) {
				var randomIndex = Math.floor(Math.random() * 25);
				if (!(randomIndex in placed)) {
					placed[randomIndex] = 'assassin';
					numAssassin--;
				}
			}

			var returnColors = [];
			for (var placement in placed) {
				returnColors[placement] = placed[placement];
			}
			return returnColors;
		};
		var colors = placeColors();

		var ctx = document.getElementById('spymasterCard').getContext('2d');

		var imgRed = new Image();
		var imgBlue = new Image();
		var imgAssassin = new Image();
		imgRed.onload = function() {
			for (var i = 0; i < colors.length; i++) {
				var position = POSITIONS[i];
				if (colors[i] === 'red') {
					ctx.drawImage(imgRed, position.x, position.y, 85, 85);
				}
			}
		};
		imgBlue.onload = function() {
			for (var i = 0; i < colors.length; i++) {
				var position = POSITIONS[i];
				if (colors[i] === 'blue') {
					ctx.drawImage(imgBlue, position.x, position.y, 85, 85);
				}
			}
		};
		imgAssassin.onload = function() {
			for (var i = 0; i < colors.length; i++) {
				var position = POSITIONS[i];
				if (colors[i] === 'assassin') {
					ctx.drawImage(imgAssassin, position.x, position.y, 85, 85);
				}
			}
		};
		imgRed.src = "images/red_square.png";
		imgBlue.src = "images/blue_square.png";
		imgAssassin.src = "images/assassin_square.png";


	}
]);