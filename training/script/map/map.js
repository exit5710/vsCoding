'use strict';

/*
(method) Array<number>.map<boolean>(callbackfn: (value: number, index: number, array: number[]) => boolean, thisArg?: any): boolean[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

console.log("map start");

let numbers = ["1", "2", "3"];

let languagePrint = function (elemnt) {
	console.log(elemnt);

	return elemnt;
};

let tt = numbers.map(languagePrint);
console.log(tt);


/*

let returnValue = languageSubject.filter(function (element, index, array) {
	return element.name === "Java";
});

console.log(returnValue);

let isBigEnough = function (element, index) {
	let thisLength = this.length;

	if (index < thisLength) {
		console.log(this[index].grade);
	}

	return element >= 10;
};

let number = [12, 5, 8, 130, 44];
let filtered = number.filter(isBigEnough, returnValue); // returnValue는 isBigEnough의 this이다.

console.log(filtered);
*/