// 'use strict';

// ------ chapter04 ------------------------------
document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

const page = 4;
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
	function add(x, y) {
		return x + y;
	}
	console.log(add(3, 4));
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 2
	let add = function (x, y) {
		return x + y;
	};

	let plus = add;
	console.log(add(3, 4));
	console.log(plus(5, 6));
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 3
	let add = function sum(x, y) {
		return x + y;
	};

	console.log(add(3, 4));
	try {
		console.log(sum(3, 4));
	} catch {
		console.log('Uncaught ReferenceError: sum is not defined');
	};
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 4
	let factorialLet = function factorial(n) {
		if (n <= 1) {
			return 1;
		}
		return n * factorial(n - 1);
	};

	console.log(factorialLet(3));
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 5
	let add = new Function('x', 'y', 'return x + y');
	console.log(add(3, 4));
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 6
	console.log(add(2, 3));

	function add(x, y) {
		return x + y;
	}

	console.log(add(3, 4));
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 7
	try {
		add(2, 3);
	} catch {
		console.log('Cannot access \'add\' before initialization');
	}

	let add = function (x, y) {
		return console.log(x + y);
	};

	add(3, 4);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 8
	function add(x, y) {
		return x + y;
	}

	add.result = add(3, 2);
	add.status = 'ok';

	console.log(add.result);
	console.log(add.status);
	console.dir(add);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 9
	let bar = function () {
		return 100;
	};
	console.log(bar());

	let obj = {};
	obj.baz = function () {
		return 200;
	};
	console.log(obj.baz());
	console.log(obj);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 10
	let foo = function (func) {
		func();
	};

	foo(function () {
		console.log('Function can be used as the argument.');
	});
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 11
	let foo = function () {
		return function () {
			console.log('this function is the return value.');
		};
	};

	let bar = foo();
	bar();
	foo()();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 12
	function add(x, y) {
		return x + y;
	}
	console.dir(add);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 13
	function func0() {
	}

	function func1(x) {
		return x;
	}

	function func2(x, y) {
		return x + y;
	}

	function func3(x, y, z) {
		return x + y + z;
	}

	console.log('func0.length - ' + func0.length);
	console.log('func1.length - ' + func1.length);
	console.log('func2.length - ' + func2.length);
	console.log('func3.length - ' + func3.length);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 14
	function myFunction() {
		return true;
	}

	console.dir(myFunction.prototype);
	console.dir(myFunction.prototype.constructor);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 15
	window.onload = function () {
		// console.log('This is the callback function.');
	};
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 16
	(function (name) {
		console.log('This is the immediate function -> ' + name);
	})('foo');
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 17
	(function (window, undefined) {
		console.log(window);
	})(window);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 18
	function parent() {
		let a = 100;
		let b = 200;

		function child() {
			let b = 300;

			console.log(a);
			console.log(b);
		}
		child();
	}

	parent();
	try {
		child();
	} catch {
		console.log('child is not defined');
	}
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 19
	function parent() {
		let a = 100;
		let child = function () {
			console.log(a);
		};

		return child;
	}

	let inner = parent();
	inner();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 20
	let self = function () {
		console.log('a');
		return function () {
			console.log('b');
		};
	};

	self = self();
	self();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 21
	function func(arg1, arg2) {
		console.log(arg1, arg2);
	}

	func();
	func(1);
	func(1, 2);
	func(1, 2, 3);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 22
	function add(a, b) {
		console.dir(arguments);
		return a + b;
	}
	console.log(add(1));
	console.log(add(1, 2));
	console.log(add(1, 2, 3));

	function sum() {
		let result = 0;

		for (let i = 0; i < arguments.length; i++) {
			result += arguments[i];
		}

		return result;
	}
	console.log(sum(1, 2, 3));
	console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 23
	let myObject = {
		name: 'foo'
		, sayName: function () {
			console.log(this.name);
		}
		, myName: function () {
			return this.name;
		}
	};

	let otherObject = {
		name: 'bar'
	};

	myObject.sayName();

	otherObject.sayName = myObject.sayName;
	otherObject.sayName();

	otherObject.myName = myObject.myName();
	console.log(otherObject.myName);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 24
	var foo = 'I\'m foo';
	console.log(foo);
	console.log(window.foo);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 25
	var test = 'This is test';
	console.log(window.test);
	console.log(this.test);

	let sayFoo = function () {
		console.log(this.test);
	};
	sayFoo();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 26
	var value = 100;

	let myObject = {
		value: 1,
		func1: function () {
			this.value += 1;
			console.log('func1() called this.value : ' + this.value);

			let func2 = function () {
				this.value += 1;
				console.log('func2() called this.value : ' + this.value);

				let func3 = function () {
					this.value += 1;
					console.log('func3() called this.value : ' + this.value);
				};
				func3();
			};
			func2();
		}
	};

	myObject.func1();;
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 27

}