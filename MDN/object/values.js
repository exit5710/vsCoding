'use strict';

{
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
	fn_newLine('object');
}

{
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
	fn_newLine('object values');

	// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
	// Object.values() 정적 메서드는 해당 오브젝트의 열거한 문자열-키 속성값의 배열을 리턴한다.

	// Syntax
	// Object.values(obj);

	// Return value
	// An array containing the given object's own enumerable string-keyed property values.
	// 오브젝트의 열거한 문자열-키 속성값을 포함한 배열

	// Description
	// Object.values() returns an array whose elements are values of enumerable string-keyed properties found directly upon object.
	// Object.values()는 오브젝트에 직접 발견되는 열거한 문자열-키 속성의 배열 요소값을 리턴한다.

	// This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.
	// for...in loop가 프로토타입 체인에 열거한 속성을 제외하면 for...in 루프와 반복하는것이 같다.

	// The order of the array returned by Object.values() is the same as that provided by a for...in loop.
	// Object.values()가 리턴되는 배열의 순서는 for...in loop에 의해 제공하는 것과 같다.

	// If you need the property keys, use Object.keys() instead. If you need both the property keys and values, use Object.entries() instead.
	// 프로퍼티키 키 필요하다면 Object.keys()를 대신 사용할수 있다. 프로퍼티 키와 값, 둘다 필요하다면 Object.entries()를 대신 사용할수 있다.

	// Using Object.values() on primitives
	// Non-object arguments are coerced to objects. undefined and null cannot be coerced to objects and throw a TypeError upfront.
	// 오브젝트가 아닌 인수는 오브젝트로 강요된다. undefined와 null은 오브젝트로 강요할숫 없고 TypeError가 미리 발생한다.

	// Only strings may have own enumerable properties, while all other primitives return an empty array.
	// 오직 문자열에 열거한 속성을 가지고, 다른 모든 기본 요소는 빈 배열을 리턴한다.

	const anything = {
		a: 'something',
		b: 42,
		c: [1, 2, 3, 'apple'],
		d: { name: 'jim' },
		sales: [
			{ name: 'John', salary: 1000 },
			{ name: 'Alice', salary: 1600 },
		],
	};

	// 문자열-키 속성값을 배열로 리턴
	console.log(Object.values(anything)); // ['something', 42, [1, 2, 3, 'apple'], {name: 'jim'}, [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }]]
	console.log('isArray : ', Array.isArray(Object.values(anything)));

	console.log('\n-- for of');
	// 배열의 값을 for문을 사용해 출력 (in을 사용시 배열의 index를 출력)
	for (let value of Object.values(anything)) {
		console.log(value);
	}

	console.log('\n-- for in');
	// 오브젝트의 key와 value를 출력
	for (let key in anything) {
		console.log(key, ' : ', anything[key]);
	}

	// https://ko.javascript.info/keys-values-entries
	console.log('\n-- Object entries');
	Object.entries(anything).forEach(function ([key, value]) {
		console.log(key, ' : ', value);
	});

	console.log('\n-- Object keys');
	Object.keys(anything).forEach(function (element) {
		console.log(element);
	});

	console.log('\n-- Object values');
	Object.values(anything).forEach(function (element) {
		console.log(element);
	});
}
