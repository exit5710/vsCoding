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

	console.log('\n--- fn_sumSalary');
	let fn_sumSalary = function (obj) {
		if (Array.isArray(obj)) {
			// 배열이면 salary값을 누적하여 합한다.
			return obj.reduce(function (accumulator, currentValue) {
				return accumulator + currentValue.salary;
			}, 0);
		} else {
			let sum = 0;

			// 배열이 아니라면 배열로 만들어 재귀호출한다.
			let array = Object.values(obj);
			for (let element of array) {
				sum += fn_sumSalary(element);
			}

			return sum;
		}
	};

	// sales, development 두개의 배열
	// sales = [[{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }]];
	// development = [{sites...}, {internals...}]
	console.log('development is array :', Array.isArray(Object.values(company)), '/ size: ', Object.values(company).length);
	console.log(Object.values(company)[0], Object.values(company)[1]);

	console.log(fn_sumSalary(company));
	// company는 오브젝트. if(isArray)는 false
	// Object.values로 배열로 변경(length: 2) 0번째는 배열, 1번째는 오브젝트
	// 변경된 배열을 파라메터로 for문으로 재귀호출(fn_sumSalary)한다.

	// for 1
	//   0번째 배열은 배열(length 2). if(isArray)는 true [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }]
	//   reduce로 0번째 배열의 salary값을 누적 합산을 리턴한다.(2600)
	//
	// for 2
	//   1번째 배열은 2개의 오브젝트. if(isArray)는 false {sites...}, {internals...}
	//   Object.values로 배열로 변경(length: 1)
	//     변경된 배열을 파라메터로 for문으로 재귀호출(fn_sumSalary)한다.
	//
	//     for 1
	//       0번째 배열은 배열 [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }]
	//       reduce로 배열의 salary값을 누적 합산을 리턴한다.(3800)
	//     for 2
	//       1번째 배열은 배열 [{ name: 'Jack', salary: 1300 }]
	//       reduce로 배열의 salary값을 누적 합산을 리턴한다.(1300)
}
