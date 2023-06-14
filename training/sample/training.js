'use strict';

document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#202124';

const btn = document.getElementById('btn');
const btn1 = document.querySelector('#btn');
const btn2 = document.querySelector('.btn');

btn.addEventListener('click', function () {
	console.log('btn click');
});

btn1.addEventListener('click', function () {
	console.log('btn1 click');
});

btn2.addEventListener('click', function () {
	console.log('btn2 click');
});

function add(a, b) {
	return a + b;
}

function surprise(callBack, num1, num2) {
	const result = callBack(num1, num2);
	console.log(result);
}

surprise(add, 2, 2);

let obj = {
	a: "apple",
	b: "banana",
	c: "cherry"
};

for (let value of Object.values(obj)) {
	console.log("value : " + value);
}

for (let key of Object.keys(obj)) {
	console.log("key : " + key);
}

for (let key in obj) {
	console.log("key : " + key);
}

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(matrix[2][1]);

function getMaxSubSum(arr) {
	let maxSum = 0;
	let partialSum = 0;

	for (let item of arr) { // 배열의 각 요소를
		partialSum += item; // partialSum에 더합니다.
		maxSum = Math.max(maxSum, partialSum); // 최대값을 기억해 놓습니다.
		if (partialSum < 0) partialSum = 0; // 음수가 되면 0을 대입합니다.
	}

	return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));

let array = [11, 22, 33, 44, 55];

array.forEach(function (value, index, array) {
	console.log(value, index, array);
});

let languageSubject = [
	{ name: 'Java', grade: 'A' },
	{ name: 'React', grade: 'B' },
	{ name: 'Node', grade: 'C' },
	{ name: 'C', grade: 'D' },
	{ name: 'Java', grade: 'E' },
	{ name: 'script', grade: 'F' },
];

console.log("find -------------------------------");

let returnValue = languageSubject.find(function (item) {
	return item.name === 'Java';
});

let returnIndex = languageSubject.findIndex(function (item) {
	return item.name === 'React';
});

console.log(returnValue);
console.log(returnIndex);

console.log("filter -------------------------------");

returnValue = languageSubject.filter(function (element, index, array) {
	return element.name === "Java";
});

console.log(returnValue);

console.log("-------------------------------");

function isBigEnough(element, index) {
	let thisLength = this.length;

	if (index < thisLength) {
		console.log(this[index].grade);
	}

	return element >= 10;
}

let number = [12, 5, 8, 130, 44];
let filtered = number.filter(isBigEnough, returnValue);

console.log("filtered : " + filtered);

let words = ["Bilbo", "Gandalf", "Nazgul"];
let lengths = words.map(item => item.length);

console.log(lengths);

lengths = words.map(function (element) {
	return element.length;
});
console.log(lengths);

let arr = ["I", "study", "JavaScript"];
arr.splice(3, 0, "♥");
console.log(arr);
