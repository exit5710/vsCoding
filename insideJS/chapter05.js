'use strict';

// ------ chapter05 ------------------------------
document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

const page = 5;
let verse = 1;

const fn_newLine = function () {
	let example;

	if (verse == 1) {
		example = '----- ex ' + page + '-' + verse++;
	} else {
		example = '\n----- ex ' + page + '-' + verse++;
	};

	return example;
};
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 1
	console.log('This is global context');

	function ExContext1() {
		console.log('This is ExContext1');
	}

	function ExContext2() {
		ExContext1();
		console.log('This is ExContext2');
	}

	ExContext2();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 2
	function execut(param1, param2) {
		let a = 1;
		let b = 2;

		function func() {
			return a + b;
		}

		return param1 + param2 + func();
	}

	console.log(execut(3, 4));
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 3
	let var1 = 1;
	let var2 = 2;
	console.log(var1);
	console.log(var2);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 4
	let var1 = 1;
	let var2 = 2;

	function func() {
		let var1 = 10;
		let var2 = 20;
		console.log(var1);
		console.log(var2);
	}
	func();

	console.log(var1);
	console.log(var2);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 5
	let value = 'value1';

	function printFunc() {
		let value = 'value2';

		function printValue() {
			return value;
		}

		console.log(printValue());
	}

	printFunc();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 6
	let value = 'value1';

	function printValue() {
		return value;
	}

	function printFunc(func) {
		let value = 'value2';
		console.log(func());
	}

	printFunc(printValue);

	// let y = { x: 5 };

	// function withExamFunc() {
	// 	let x = 10;
	// 	let z;

	// 	with (y) {
	// 		z = function () {
	// 			console.log(x);
	// 		};
	// 	}
	// 	z();
	// }
	// withExamFunc();

	let foo;

	function bar() {
		console.log('bar and x = ' + x);
	}

	let x;

	// foo();
	bar();

	foo = function () {
		console.log('foo and x = ' + x);
	};
	x = 1;
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 7
	function outerFunc() {
		let x = 10;
		let innerFunc = function () {
			console.log(x);
		};

		return innerFunc;
	}

	let inner = outerFunc();
	inner();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 8
	function outerFunc(arg1, arg2) {
		let local = 8;

		function innerFunc(innerArg) {
			console.log((arg1 + arg2) / (innerArg + local));
		}

		return innerFunc;
	}

	let exam1 = outerFunc(2, 4);
	exam1(2);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 9
	function HelloFunc() {
		this.greeting = 'hello';
	}

	HelloFunc.prototype.call = function (func) {
		func ? func(this.greeting) : this.func(this.greeting);
	};

	let userFunc = function (greeting) {
		console.log(greeting);
	};

	let objHello = new HelloFunc();
	objHello.func = userFunc;
	objHello.call();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 10
	function HelloFunc() {
		console.log('1');
		this.greeting = 'hello';
	}

	HelloFunc.prototype.call = function (func) {
		console.log('5');
		func ? func(this.greeting) : this.func(this.greeting);
	};

	let objHello = new HelloFunc();

	function saySomething(obj, methodName, name) {
		console.log('3');
		// obj.func
		return (function (greeting) {
			console.log('6');
			return obj[methodName](greeting, name);
		});
	}

	function newObj(obj, name) {
		console.log('2');
		obj.func = saySomething(this, 'who', name);
		console.log('4');
		return obj;
	}

	newObj.prototype.who = function (greeting, name) {
		console.log('7');
		console.log(greeting + ' ' + (name || 'everyone'));
	};

	let obj1 = new newObj(objHello, 'zzoon');
	obj1.call();
}