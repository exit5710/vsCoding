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
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 14
}