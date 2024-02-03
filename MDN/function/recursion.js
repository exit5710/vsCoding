'use strict';

{
	// https://ko.javascript.info/recursion
	fn_newLine('recursion');

	let fn_power = function (x, n) {
		if (n == 1) {
			return x;
		} else {
			return x * fn_power(x, n - 1);
		}
	};

	// return 2 * fn_power(2, 2)  (2 * 4)
	// return 2 * fn_power(2, 1)  (2 * 2)
	// return 2

	console.log(fn_power(2, 3)); // 8
}
{
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

	let fn_sumSalaries = function (department) {
		if (Array.isArray(department)) {
			//return department.reduce((accumulator, currentValue) => accumulator + currentValue.salary, 0); // 배열의 요소를 합함
			return department.reduce(function (accumulator, currentValue) {
				return accumulator + currentValue.salary;
			}, 0);
		} else {
			let sum = 0;

			for (let element of Object.values(department)) {
				sum += fn_sumSalaries(element); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
			}

			return sum;
		}
	};

	console.log(fn_sumSalaries(company));

	// reduce.js
	// company는 오브젝트이기때문에 최초 if문의 Array.isArray는 false.
	// else : sum = 0
	// for...of : 0 fn_sumSalaries [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }]
	// 				배열이기 때문에 Array.isArray는 true
	// 				return 0 + 1000 + 1600 = sum = 2600
	// 			  1 fn_sumSalaries {sites:..., internals:...}
	// 				오브젝트이기 때문에 Array.isArray는 false
	// 				for...of :

	// Object.values() : sales와 development의 값을 배열로 리턴 [ [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }], {sites:..., internals...} ]
	//

	// fn_sumSalaries([{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }]), fn_sumSalaries({ name: 'Alice', salary: 1600 }], {sites:..., internals...})

	//
	// 두번째 if문은 파라미터가 배열이기 때문에 true [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }]
	// 초깃값 0에 값의 salary를 누적합계(2600)를 리턴, sum = 2600
}
