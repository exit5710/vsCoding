'use strict';

// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
// 자바스크립트 배열 클래스는 배열을 구성할때 사용하는 전역객체이다. 상위레벨의 리스트형태의 객체이다.

// Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
// 배열은 리스트형태의 객체이며 프로토타입으로 탐색과 변형 작업을 수행하는 메서드를 가지고있다.

// Neither the length of a JavaScript array nor the types of its elements are fixed.
// 자바스크립트의 배열의 길이나 요소의 타입은 고정되지 않는다.

// Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense;
// this depends on how the programmer chooses to use them.
// 배열의 길이는 언제든지 변할수 있고, 데이터는 배열의 인접하지 않는 위치에 저장되며, 자바스크립트 배열은 밀도가 보장되지 않는다.

// In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.
// 일반적으로, 편리한 특성이지만, 이러한 특징이 특정용도에 적합히지 않다면, typed arrays 사용을 고려할수 있다.

// Arrays cannot use strings as element indexes (as in an associative array) but must use integers.
// 배열은 문자열을 요소 인덱스로 사용할수 없고 정수형으로 사용해야 한다.

// Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself,
// but will set or access a variable associated with that array's object property collection.
// 대괄호 표기(도트 표기)법을 사용하여 정수가 아닌 값으로 설정 또는 접근을 하면 배열목록에서 요소에서 설정 또는 검색하지 않고,
// 배열의 객체 속성 콜렉션과 연관된 변수로 설정 또는 접근한다.

// The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.
// 배열 객체 속성과 배열 요소의 목록은 분리되어야 하며, 배열의 탐색 및 변형 작업은 개체 속성에 적용할수 없다.

{
	fn_newLine('arrays');
	// Create an Array
	const fruits = ['Apple', 'Banana'];
	console.log('fruits length : ' + fruits.length); // console.log(`fruits length : ${fruits.length}`);

	// Access an Array item using the index position
	let fruit = fruits[0];
	console.log('fruit 0 index : ' + fruit);

	// Loop over an Array
	// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
	// value : T (요소(element) : 타입(type))
	// what is 'thisArg?'? // thisArg는 this
	// void (리턴 없음)
	fn_newLine('forEach');
	fruits.forEach(function (element, index) {
		console.log(index + ' index', 'fruit : ' + element);
	});
	// fruits.forEach((item, index) => console.log(item, index));

	// Add an item to the end of an Array
	fn_newLine('push');
	fruits.push('Orange');
	console.log('fruits push element : ' + fruits[fruits.length - 1]);

	// Remove an item from the end of an Array
	fn_newLine('pop');
	const removeEndElement = fruits.pop();
	console.log('remove end elememnt : ' + removeEndElement);
	console.log('end element : ' + fruits[fruits.length - 1]);

	// Remove an item from the beginning of an Array
	fn_newLine('shift');
	const removeFirstElement = fruits.shift();
	console.log('remove first element : ' + removeFirstElement);

	// Add an item to the beginning of an Array
	fn_newLine('unshift');
	fruits.unshift('Strawberry');
	console.log('first element : ' + fruits[0]);

	// Find the index of an item in the Array
	fn_newLine('indexOf');
	fruits.push('Mango');
	console.log(fruits);
	console.log('Mango index : ' + fruits.indexOf('Mango'));

	// Remove an item by index position
	fn_newLine('splice');
	let removed = fruits.splice(fruits.indexOf('Mango'), 1); // Mango remove(element) Mango부터 1개 엘리멘트를 삭제
	console.log(removed);
	console.log(fruits);

	fruits.push('Grape', 'Kiwi', 'Lemon');
	console.log(fruits);

	fruits.splice(3, 2); // Kiwi, Lemon removes(elements)
	console.log(fruits);

	fruits.splice(2, 0, 'Lemon');
	console.log(fruits);

	fruits.splice(-2, 0, 'Kiwi');
	console.log(fruits);

	// Copy an Array
	fn_newLine('slice');
	let newFruits = fruits.slice();
	console.log(newFruits);

	newFruits = fruits.slice(1, 4);
	console.log(newFruits);

	newFruits = fruits.slice(-3, -1);
	console.log(newFruits);

	// merge two or more arrays. returns a new array.
	fn_newLine('concat');
	newFruits = newFruits.concat(['Apple', 'Banana'], 'Cherry');
	console.log(newFruits);

	fn_newLine('find');
	const languageSubject = [
		{ name: 'Java', grade: 'A' },
		{ name: 'React', grade: 'B' },
		{ name: 'Node', grade: 'C' },
		{ name: 'C', grade: 'D' },
	];

	let java = languageSubject.find(function (elememnt) {
		return elememnt.name == 'Java';
	});

	console.log(java);

	// sort
	fn_newLine('sort');
	const numbers = [20, 5, 9, 2, 3, 6, 10, 4, 1, 8, 7];
	const sortFunc = function (a, b) {
		//console.log('a : ' + a, 'b : ' + b);
		return a - b;
	};
	numbers.sort(sortFunc);
	console.log(numbers);

	numbers.reverse();
	console.log(numbers);

	newFruits.sort(function (a, b) {
		return a.localeCompare(b);
	});
	console.log(newFruits);

	[1, -2, 15].sort(function (a, b) {
		console.log(a + ' <> ' + b);
		return a - b;
	});

	// join
	fn_newLine('join');
	let fruitStr = newFruits.join(';');
	console.log(fruitStr);

	// split
	fn_newLine('split');
	console.log(fruitStr.split(';'));

	// reducd
	fn_newLine('reducd');
	let result = numbers.reduce(function (value, elememnt) {
		return value + elememnt;
	}, 0);

	console.log(result);

	// Array.isArray
	fn_newLine('isArray');
	console.log(Array.isArray({ temp: '1' }));
	console.log(Array.isArray(numbers));

	// thisArg
	fn_newLine('thisArg');
	let army = {
		minAge: 18,
		maxAge: 27,
		canJoin(user) {
			return user.age >= this.minAge && user.age < this.maxAge;
		},
	};

	let users = [
		{ name: 'tom', age: 16 },
		{ name: 'jim', age: 20 },
		{ name: 'kelin', age: 23 },
		{ name: 'hawerd', age: 30 },
	];

	let soldiers = users.filter(army.canJoin, army);

	soldiers.forEach(function (elememnt, index) {
		console.log(index, elememnt);
	});
}
