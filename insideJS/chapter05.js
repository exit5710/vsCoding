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