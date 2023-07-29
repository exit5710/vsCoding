'use strict';

/*
(method) Array<number>.map<boolean>(callbackfn: (value: number, index: number, array: number[]) => boolean, thisArg?: any): boolean[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
{
	fn_newLine('map start');

	let numbers = ['1', '2', '3'];

	let fn_print = function (elemnt) {
		console.log(elemnt);

		return elemnt.length;
	};

	let result = numbers.map(fn_print);
	console.log(result);
}
