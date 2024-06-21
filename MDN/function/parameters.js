'use strict';

{
	// https://ko.javascript.info/rest-parameters-spread
	fn_newLine('parameters');

	console.log(Math.max(1, 2, 3, 9.5, 7));

	let fn_allParams = function (...args) {
		console.log(Array.isArray(args));

		args.forEach(function (element) {
			console.log(element);
		});
	};
	fn_allParams(12, 4, 5);

	let fn_showArguments = function () {
		console.log(Array.isArray(arguments));

		for (let arg of arguments) {
			console.log(arg);
		}
	};
	fn_showArguments(12, 4, 5);

	let arr1 = [1, 3, 8, 9];
	let arr2 = [2, 6, 7, 8];
	let merge = [...arr1, ...arr2];
	console.log('max :', Math.max(...arr1, ...arr2));
	console.log(merge);

	let str = 'Hello';
	console.log(...str);
	console.log(Array.from(str));
	console.log(Array.isArray(Array.from(str)));
}
