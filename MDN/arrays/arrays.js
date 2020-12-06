'use strict';
{
	let fruits = ['Apple', 'Banana'];
	console.log(fruits.length);

	let fruit = fruits[0];
	console.log(fruit);

	// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
	// value : T (요소(element) : 타입(type))
	// what is 'thisArg?'?
	// void (리턴 없음)
	fruits.forEach(function (item, index) {
		console.log(item, index);
	});

	// fruits.forEach((item, index) => console.log(item, index));

	console.log('----------------------------------------');

	const obj = {
		name: 'kiYoung',
		test: function () {
			console.log('1st', this); // this는 obj
		},
	};

	obj.test();
}
