'use strict';

{
	// https://ko.javascript.info/rest-parameters-spread
	fn_newLine('parameters');

	console.log('max value: ', Math.max(1, 2, 3, 9.5, 7));

	let fn_allParams = function (...args) {
		console.log('isArray: ', Array.isArray(args));
		console.log(args);

		args.forEach(function (element) {
			console.log(element);
		});
	};
	fn_allParams(12, 4, 5);

	let fn_showArguments = function () {
		console.log('isArray: ', Array.isArray(arguments));

		for (let arg of arguments) {
			console.log(arg);
		}
	};
	fn_showArguments(12, 4, 5);

	let arr1 = [1, 3, 8, 9];
	let arr2 = [2, 6, 7, 8];
	let merge = [...arr1, ...arr2];
	console.log('max value: ', Math.max(...arr1, ...arr2));
	console.log(merge);

	let str = 'Hello';
	console.log('str: ', str);
	console.log('...str: ', ...str);
	console.log('Array.from: ', [...str]);
	console.log('Array.from: ', Array.from(str));
	console.log('isArray: ', Array.isArray(Array.from(str)));

	let arr = [1, 2, 3];
	let arryCopy = [...arr];
	console.log(arr);
	console.log(...arr);
	console.log(arryCopy);

	console.log(JSON.stringify(arr) === JSON.stringify(arryCopy));
	console.log(arr === arryCopy);

	fn_newLine();

	let obj = { a: 1, b: 2, c: 3 };
	let objCopy = { ...obj };

	console.log(obj);
	console.log(objCopy);

	console.log(JSON.stringify(obj) === JSON.stringify(objCopy));
	console.log(obj === objCopy);

	//fn_terminated();
}
