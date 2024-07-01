'use strict';

{
	// https://ko.javascript.info/closure
	fn_newLine('closure');

	let makeCount = function () {
		let count = 0;

		return function () {
			return count++;
		};
	};

	let counter = makeCount();

	console.log(counter());
	console.log(counter());
	console.log(counter());

	fn_newLine();

	let sumRemainders = function () {
		let sum = 0;

		return function (num) {
			let remainders = num % 2;

			if (remainders === 1) {
				sum++;
			}

			return sum;
		};
	};

	let remainders = sumRemainders();

	console.log(remainders(1));
	console.log(remainders(1));
	console.log(remainders(2));
	console.log(remainders(2));
	console.log(remainders(1));

	fn_newLine();

	function f() {
		let value = Math.random();

		return function () {
			return value;
		};
	}

	let arr = [f(), f(), f()];
	console.log(arr[0]());
	console.log(arr[1]());
	console.log(arr[2]());

	fn_newLine();

	//fn_terminated();
}
