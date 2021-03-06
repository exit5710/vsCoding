'use strict';

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
// note
/*
[[Prototype]], prototype프로퍼티 : p88, p121
*/
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
		try {
			console.log(this.test);
		} catch {
		}
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

	// myObject.func1();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 27
	var value = 100;

	let myObject = {
		value: 1,
		func1: function () {
			let that = this;

			this.value += 1;
			console.log('func1() called this.value : ' + this.value);

			let func2 = function () {
				that.value += 1;
				console.log('func2() called this.value : ' + that.value);

				let func3 = function () {
					that.value += 1;
					console.log('func3() called this.value : ' + that.value);
				};
				func3();
			};
			func2();
		}
	};

	myObject.func1();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 28
	let Person = function (name) {
		this.name = name;
	};

	let foo = new Person('foo');
	console.log(foo);
	console.log(foo.name);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 29
	let foo = {
		name: 'foo',
		age: 35,
		gender: 'man'
	};
	console.dir(foo);

	function Person(name, age, gender, position) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	let bar = new Person('bar', 33, 'woman');
	console.dir(bar);

	let baz = new Person('baz', 25, 'woman');
	console.dir(baz);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 30
	function Person(name, age, gender, position) {
		// this.name = name;
		// this.age = age;
		// this.gender = gender;
	}

	let qux = Person('quz', 20, 'man');
	// console.log(qux);

	// console.log(window.name);
	// console.log(window.age);
	// console.log(window.gender);

	function A(arg) {
		if (!(this instanceof A)) {
			return new A(arg);
		}
		this.value = arg ? arg : 0; // 삼항연산자 (true ? 1 : 2) true:1 false:2
	}

	let a = new A(100);
	let b = A(10);

	console.log(a.value);
	console.log(b.value);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 31
	function Person(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	let foo = {};

	Person.apply(foo, ['foo', 30, 'man']);
	console.dir(foo);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 32
	function myFunction() {
		console.dir(arguments);
		// arguments.shift();

		let args = Array.prototype.slice.apply(arguments);
		console.dir(args);
	}
	myFunction(1, 2, 3);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 33
	let arrA = [1, 2, 3];
	let arrB = arrA.slice(0);
	let arrC = arrA.slice();
	let arrD = arrA.slice(1);
	let arrE = arrA.slice(1, 2);

	console.log(arrB);
	console.log(arrC);
	console.log(arrD);
	console.log(arrE);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 34
	let noReturnFunc = function () {
		console.log('This is function has no return statement.');
	};
	let result = noReturnFunc();
	console.log(result);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 35
	function Person(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;

		return { name: 'bar', age: 20, gender: "woman" };
	}

	let foo = new Person('foo', 30, 'man');
	console.log(foo);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 36
	function Person(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;

		return 100;
	}

	let foo = new Person('foo', 30, 'man');
	console.log(foo);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 37
	function Person(name) {
		this.name = name;
	}

	let foo = new Person('foo');
	console.dir(Person);
	console.dir(foo);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 38
	let myObject = {
		name: 'foo',
		sayName: function () {
			console.log('My name is ' + this.name);
		}
	};

	myObject.sayName();
	console.log(myObject.hasOwnProperty('name'));
	console.log(myObject.hasOwnProperty('nickName'));
	try {
		myObject.sayNickName();
	} catch {
		console.log('myObject.sayNickName is not a function');
	}
	console.log(myObject);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 39
	function Person(name, age, hobby) {
		this.name = name;
		this.age = age;
		this.hobby = hobby;
	}
	let foo = new Person('foo', 30, 'tennis');

	console.log(foo.hasOwnProperty('name'));
	console.dir(Person.prototype);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 40
	String.prototype.testMethod = function () {
		console.log('This is the String.prototype.testMethod()');
	};

	let str = 'this is test';
	str.testMethod();

	console.log(String.prototype);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 41
	function Person(name) {
		this.name = name;
	}

	let foo = new Person('foo');

	Person.prototype.sayHello = function () {
		console.log('Hello');
	};

	foo.sayHello();
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 42
	function Person(name) {
		this.name = name;
	}

	Person.prototype.getName = function () {
		return this.name;
	};

	let foo = new Person('foo');
	console.log(foo.getName());

	Person.prototype.name = 'person';
	console.log(Person.prototype.getName());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 43
	function Person(name) {
		this.name = name;
	}
	console.log(Person.prototype.constructor);

	let foo = new Person('foo');
	console.log(foo.country);

	Person.prototype = {
		country: 'korea'
	};
	console.log(Person.prototype.constructor);

	let bar = new Person('bar');
	console.log(foo.country);
	console.log(bar.country);
	console.log(foo.constructor);
	console.log(bar.constructor);
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 44
	function Person(name) {
		this.name = name;
	}

	Person.prototype.country = 'Korera';

	let foo = new Person('foo');
	let bar = new Person('bar');
	console.log(foo.country);
	console.log(bar.country);

	foo.country = 'USA';
	console.log(foo.country);
	console.log(bar.country);
}