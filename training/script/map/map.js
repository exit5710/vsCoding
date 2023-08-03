'use strict';

{
	fn_newLine('Map');
	const map = new Map();

	map.set('1', 'str'); // 문자형 키
	map.set(1, 'num'); // 숫자형 키
	map.set(true, 'bool'); // 불린형 키
	//map.set('1', 'string').set(1, 'number').set(true, 'bool');

	const person = { name: 'Jone', age: 23 };
	map.set(person, person.name);

	console.log(map.get(1));
	console.log(map.get(person), map.size);

	let recipeMap = new Map([
		['cucumber', 500],
		['tomatoes', 350],
		['onion', 50],
	]);

	recipeMap.forEach(function (element, key) {
		console.log(element, key);
	});

	fn_newLine('object -> map');
	let obj = { name: 'tom', age: 23, address: 'usa' };
	let entrieMap = new Map(Object.entries(obj));

	console.log(entrieMap.get('name'));

	fn_newLine('map -> object');
	let fromEntrieObj = Object.fromEntries(entrieMap);

	console.log(fromEntrieObj.age);

	fn_newLine('Set');
	let set = new Set();

	let john = { name: 'John' };
	let pete = { name: 'Pete' };
	let mary = { name: 'Mary' };

	set.add(john);
	set.add(pete);
	set.add(mary);
	set.add(john);
	set.add(mary);

	set.forEach(function (element) {
		console.log(element.name);
	});

	fn_newLine('array duplicate');
	let numbers = [1, 2, 3, 1, 5, 6, 5, 9];
	let numberSet = new Set(numbers);

	numbers = [];

	numberSet.forEach(function (elements) {
		numbers.push(elements);
	});

	console.log(numbers);

	fn_newLine('ex1');
	// Hare, Krishna, :-O 만 출력
	let fn_unique = function (element) {
		return Array.from(new Set(element));
	};

	let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

	console.log(fn_unique(values));
}
