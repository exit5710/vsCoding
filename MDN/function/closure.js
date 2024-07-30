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

	let result = calculator.add(5);
	result = calculator.subtract(2);
	console.log(result);

	fn_newLine();

	let array = [1, 2, 3, 4, 5, 6, 7];

	/*
	let inBetween = array.filter(function (element) {
		return element >= 3 && element <= 6;
	});
	console.log(inBetween);
	*/

	let inBetween = function (from, to) {
		return function (element) {
			return element >= from && element <= to;
		};
	};
	console.log(array.filter(inBetween(3, 6)));

	/*
	let inArray = array.filter(function (element) {
		return [2, 5, 9].includes(element);
	});
	console.log(inArray);

	[2, 5, 9]를 파라미터로 받는 function (array)
	filter에서 element를 사용하는 function (element)
	파라미터의 includes(element)
	*/

	let inArray = function (array) {
		return function (element) {
			return array.includes(element);
		};
	};
	console.log(array.filter(inArray([2, 5, 7, 9])));

	fn_newLine();

	let users = [
		{ name: 'John', age: 20, surname: 'Johnson' },
		{ name: 'Pete', age: 18, surname: 'Peterson' },
		{ name: 'Ann', age: 19, surname: 'Hathaway' },
	];

	//users.sort((a, b) => (a.name > b.name ? 1 : -1));
	/*
	users.sort(function (a, b) {
		return a.name > b.name ? 1 : -1;
	});
	*/

	let byField = function (fieldName) {
		return function (a, b) {
			return a[fieldName] > b[fieldName] ? 1 : -1;
		};
	};

	users.sort(byField('age'));
	console.log(users);

	//fn_terminated();
}
