'use strict';

const fn_init = function () {
	document.body.style.margin = 0;
	document.body.style.width = '100vw';
	document.body.style.height = '100vh';
	document.body.style.backgroundColor = '#202124';
};

const fn_newLine = function (...args) {
	if (args.length == 0) {
		console.log('\n');
	} else {
		console.log('\n--- ' + args + ' ----------------------------------------');
	}
};

const fn_addZero = function (number, addNumber = 2) {
	return number.toString().padStart(addNumber, '0');
};

const fn_terminated = function () {
	throw new Error('Program terminated');
};

const fn_createCalculator = function (initialValue = 0) {
	let result = initialValue;

	return {
		add: function (num) {
			result += num;
			return result;
		},
		subtract: function (num) {
			result -= num;
			return result;
		},
		multiply: function (num) {
			result *= num;
			return result;
		},
		divide: function (num) {
			result /= num;
			return result;
		},
		getResult: function () {
			return result;
		},
		clear: function () {
			result = 0;
			return result;
		},
	};
};
let calculator = fn_createCalculator();
