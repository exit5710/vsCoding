'use strict';
{
	let fruits = ['Apple', 'Banana'];
	console.log(fruits.length);

	let fruit = fruits[0];
	console.log(fruit);

	console.log('----------------------------------------');

	// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
	// value : T (요소(element) : 타입(type))
	// what is 'thisArg?'?
	// void (리턴 없음)
	fruits.forEach(function (item, index) {
		console.log(item, index);
	});
	// fruits.forEach((item, index) => console.log(item, index));
	console.log('----------------------------------------');

	// sort
	let numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	let sortFunc = function (a, b) {
		//console.log('a : ' + a, 'b : ' + b);
		return a - b;
	};
	console.log(numbers.sort(sortFunc));
}
