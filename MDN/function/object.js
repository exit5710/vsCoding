'use strict';

{
	// https://ko.javascript.info/function-object
	// function object
	fn_newLine('function object');

	let obj = {
		sayHi() {
			console.log('hi');
		},

		sayBye: function () {
			console.log('bye');
		},
	};

	console.log(obj.sayHi.name);
	console.log(obj.sayBye.name);

	let array = [
		function () {
			console.log('0 index');
		},
	];
	array[0]();

	fn_newLine();

	let ask = function (question, ...handlers) {
		let isAnswer = confirm(question);

		for (let handler of handlers) {
			if (handler.length == 0) {
				if (isAnswer) handler();
			} else {
				handler(isAnswer);
			}
		}
	};

	// ask(
	// 	'질문 있으신가요?',
	// 	function () {
	// 		console.log('확인');
	// 	},
	// 	function (result) {
	// 		console.log(result);
	// 	}
	// );

	// ask(
	// 	'질문 있으신가요?',
	// 	() => console.log('확인.'),
	// 	(result) => console.log(result)
	// );

	fn_newLine();

	let sayHi = function (say) {
		console.log('Hi');

		sayHi.counter++;
		sayHi.call = 'hi~!';
		sayHi.hi = function () {
			console.log(say);
		};
	};

	sayHi.counter = 0;

	sayHi();
	sayHi('hello');

	console.log(`${sayHi.counter}`);
	console.log(`${sayHi.call}`);

	sayHi.hi();

	fn_newLine();

	let makeCounter = function () {
		makeCounter.count = 0;

		let counter = function () {
			return makeCounter.count++;
		};

		makeCounter.set = function (value) {
			makeCounter.count = value;
		};

		makeCounter.decrease = function () {
			makeCounter.count--;
		};

		return counter;
	};

	let counter = makeCounter();

	makeCounter.set(8);
	makeCounter.decrease();

	console.log(counter());
	console.log(counter());

	fn_newLine();

	sayHi = function func(who) {
		if (who) {
			console.log(`Hello, ${who}`);
		} else {
			func('Guest'); // func를 사용해서 자신을 호출합니다.
		}
	};

	sayHi('jim');
	sayHi();

	fn_newLine();

	function sum(a) {
		let currentSum = a;

		function f(b) {
			currentSum += b;
			return f;
		}

		f.toString = function () {
			return currentSum;
		};

		return f;
	}

	alert(sum(1)(2)(3)(4)(5));

	//fn_terminated();
}
