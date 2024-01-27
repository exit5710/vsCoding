'use strict';

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order,
// passing in the return value from the calculation on the preceding element.
// 배열 인스턴스의 reduce() 메소드는 배열의 각 요소에 사용자가 제공하는 "reducer" 콜백 함수를 적절히 실행하고, 이전요소에 계산된 리턴값을 전단한다.

// The final result of running the reducer across all elements of the array is a single value.
// 배열의 모든 요소에 실행한 최종 결과는 단일 값이다.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place.
// 콜백이 처음 실행되면 "이전 계산의 리턴값"은 없다.

// Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
//

{
	// https://ko.javascript.info/array-methods
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	fn_newLine('array reduce');

	// https://5kdk.tistory.com/2
	const numbers = [1, 2, 3, 5, 9];

	let fn_addNumbers = function (obj) {
		if (Array.isArray(obj)) {
			return obj.reduce(function (accumulator, currentValue, index) {
				console.log(accumulator, currentValue, index);

				return accumulator + currentValue;
			}, 0);
		}
	};

	console.log('number sum :', fn_addNumbers(numbers));

	console.log('\n');
	let company = {
		sales: [
			{ name: 'John', salary: 1000 },
			{ name: 'Alice', salary: 1600 },
		],
		development: {
			sites: [
				{ name: 'Peter', salary: 2000 },
				{ name: 'Alex', salary: 1800 },
			],
			internals: [{ name: 'Jack', salary: 1300 }],
		},
	};

	// sales, development 두개의 배열
	let companyArr = Object.values(company);
	console.log('companyArr is array :', Array.isArray(companyArr), '/ size: ', companyArr.length);

	console.log(companyArr);
}
