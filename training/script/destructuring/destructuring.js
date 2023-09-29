'use strict';

{
	fn_newLine('destructuring');

	let options = {
		title: 'Menu',
		width: 100,
		height: 200,
	};

	//let { title, width, height } = options;
	//console.log(title, width, height);

	let { title, ...rest } = options;
	console.log(title, rest.width, rest.height, rest);

	console.log(Object.keys(rest));

	for (let key in rest) {
		console.log(rest[key]);
	}
}
{
	fn_newLine('nested destructuring');

	let options = {
		size: {
			width: 100,
			height: 200,
		},
		items: ['Cake', 'Donut'],
		extra: true,
	};

	let {
		size: { width, height },
		items: [item1, item2],
		title = 'Menu',
		extra,
	} = options;
	console.log(width, height, item1, item2, title, extra);

	let { size } = options;
	console.log(size);

	let { ...rest } = options;
	console.log(rest.size.width);
}
{
	let user = {
		name: 'John',
		years: 30,
	};

	// name 프로퍼티의 값을 변수 name에 할당하세요.
	// years 프로퍼티의 값을 변수 age에 할당하세요.
	// isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.

	let { name, years: age, isAdmin = false } = user;
	console.log(name, age, isAdmin);
}
{
	let salaries = {
		John: 100,
		Pete: 300,
		Mary: 250,
	};

	//salaries가 비어있으면 함수는 null을 반환해야 합니다.
	//최대 급여를 받는 사람이 여러 명이라면 그 중 아무나 한 명 반환하면 됩니다.
	//console.log(Object.entries(salaries));

	let topSalary = function (salaries) {
		let maxSalary = 0;
		let maxSalrayName = null;

		for (let key in salaries) {
			if (maxSalary < salaries[key]) {
				maxSalary = salaries[key];
				maxSalrayName = key;
			}
		}

		return maxSalrayName;
	};

	console.log('topSalary : ' + topSalary(salaries));
}
