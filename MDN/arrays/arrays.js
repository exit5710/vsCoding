'use strict';

document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

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
	const newLine = function (str) {
		console.log('\n--- ' + str + ' ----------------------------------------');
	};

	// Create an Array
	const fruits = ['Apple', 'Banana'];
	console.log('fruits length : ' + fruits.length); // console.log(`fruits length : ${fruits.length}`);


	// Access an Array item using the index position
	const fruit = fruits[0];
	console.log('fruit 0 index : ' + fruit);


	// Loop over an Array
	// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
	// value : T (요소(element) : 타입(type))
	// what is 'thisArg?'? // thisArg는 this
	// void (리턴 없음)
	newLine('forEach');
	fruits.forEach(function (item, index) {
		console.log(index + ' index', 'fruit : ' + item);
	});
	// fruits.forEach((item, index) => console.log(item, index));


	// Add an item to the end of an Array
	newLine('push');
	fruits.push('Orange');
	console.log('fruits push element : ' + fruits[fruits.length - 1]);


	// Remove an item from the end of an Array
	newLine('pop');
	const removeEndElement = fruits.pop();
	console.log('remove end elememnt : ' + removeEndElement);
	console.log('end element : ' + fruits[fruits.length - 1]);


	// Remove an item from the beginning of an Array
	newLine('shift');
	const removeFirstElement = fruits.shift();
	console.log('remove first element : ' + removeFirstElement);


	// Add an item to the beginning of an Array
	newLine('unshift');
	fruits.unshift('Strawberry');
	console.log('first element : ' + fruits[0]);


	// Find the index of an item in the Array
	newLine('indexOf');
	fruits.push('Mango');
	console.log('Mango index : ' + fruits.indexOf('Mango'));


	// Remove an item by index position
	newLine('splice');
	fruits.splice(fruits.indexOf('Mango'), 1); // Mango remove(element)
	fruits.push('Grape', 'Kiwi', 'Lemon');
	fruits.splice(3, 2); // Kiwi, Lemon removes(elements)
	console.log(fruits);


	// Copy an Array
	newLine('slice');
	const newFruits = fruits.slice();
	console.log(newFruits);









	// sort
	newLine('sort');
	const numbers = [20, 5, 9, 2, 3, 6, 10, 4, 1, 8, 7];
	const sortFunc = function (a, b) {
		//console.log('a : ' + a, 'b : ' + b);
		return a - b;
	};
	console.log(numbers.sort(sortFunc));
}
