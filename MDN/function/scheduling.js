'use strict';

{
	// https://ko.javascript.info/settimeout-setinterval
	// function scheduling
	fn_newLine('scheduling');

	let sayHi = function (name, say) {
		console.log(`${name} ${say}~!!`);
	};

	let timeoutId = setTimeout(sayHi, 1000, 'Tom', 'hi');
	console.log('timeoutId: ', timeoutId);

	//clearTimeout(timeId);

	let intervalId = setInterval(sayHi, 2000, 'Jim', 'hi');
	console.log('intervalId: ', intervalId);

	setTimeout(function () {
		console.log('clearInterval');
		clearInterval(intervalId);
	}, 5000);

	let printInterval = function (from, to) {
		let current = from;

		let print = function () {
			console.log(current);

			if (current == to) {
				clearInterval(intervalId);
			}
			current++;
		};

		print();
		let intervalId = setInterval(print, 1000);
	};
	//printInterval(5, 10);

	let printTimeout = function (from, to) {
		let current = from;

		let print = function () {
			console.log(current);

			if (current !== to) {
				setTimeout(print, 1000);
			}
			current++;
		};

		print();
	};
	//printTimeout(5, 10);

	//fn_terminated();
}
