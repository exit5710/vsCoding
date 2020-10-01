'use strict';

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
