'use strict';

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order,
// passing in the return value from the calculation on the preceding element.
//

// The final result of running the reducer across all elements of the array is a single value.
//

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place.
//

// Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
//

{
	// https://ko.javascript.info/array-methods
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	fn_newLine('reduce');

	// https://5kdk.tistory.com/2
	const numbers = [1, 2, 3, 4, 7];

	let fn_addNumbers = function (obj) {
		if (Array.isArray(obj)) {
			return obj.reduce(function (accumulator, currentValue, index, array) {
				console.log(accumulator, currentValue, index, array);

				return accumulator + currentValue;
			}, 0);
		}
	};

	console.log(fn_addNumbers(numbers));
}
