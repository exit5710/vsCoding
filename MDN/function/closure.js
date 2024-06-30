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

	let phrase = 'hello';

	function say(name) {
		console.log(`${phrase}, ${name}`);
	}

	say('tom');

	fn_newLine();

	function f() {
		let value = 123;

		return function () {
			alert(value);
		};
	}

	let g = f();

	//fn_terminated();
}
