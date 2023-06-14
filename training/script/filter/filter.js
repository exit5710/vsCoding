'use strict';

console.log("filter start");

let languageSubject = [
	{ name: 'Java', grade: 'A' },
	{ name: 'React', grade: 'B' },
	{ name: 'Node', grade: 'C' },
	{ name: 'C', grade: 'D' },
	{ name: 'Java', grade: 'E' },
	{ name: 'script', grade: 'F' },
];

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