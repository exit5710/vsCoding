'use strict';

// The Array.isArray() static method determines whether the passed value is an Array.
// Array.isArray() 정적 메서드는 받은 값이 배열인지 확인한다.

// Description
// Array.isArray() checks if the passed value is an Array. It does not check the value's prototype chain, nor does it rely on the Array constructor it is attached to.
// Array.isArray()는 받은값이 배열인지 체크한다. 값의 프로토타입 체인은 체크하지 않고, 연결된 배열생성자에도 의존하지 않음.

// It returns true for any value that was created using the array literal syntax or the Array constructor.
// 배열 생성자 또는 배열 리터럴 구문으로 만들어진 값은 트루를 리턴합니다.

// This makes it safe to use with cross-realm objects, where the identity of the Array constructor is different and would therefore cause instanceof Array to fail.
// 이렇게 하면 교차영역 객체와 함께 사용하는것이 안전하며, 배열 생성자의 ID는 다르기 때문에 instanceof Array to fail.

{
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	fn_newLine('isArray');

	let numbers = [1, 2, 3, 4, 5, 6];

	let member = {
		name: 'tom',
		age: 30,
	};

	let members = {
		male: [
			{ name: 'tom', age: 22 },
			{ name: 'jim', age: 29 },
		],
		female: [{ name: 'cheery', age: 25 }],
	};

	console.log(Array.isArray(numbers));
	console.log(Array.isArray(member));
	console.log(Array.isArray(members));
	console.log(Array.isArray(members.male));
	console.log(Array.isArray(members.female));

	numbers.forEach(function (element) {
		console.log(element);
	});
}
