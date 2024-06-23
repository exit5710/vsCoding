'use strict';

const fn_init = function () {
	document.body.style.margin = 0;
	document.body.style.width = '100vw';
	document.body.style.height = '100vh';
	document.body.style.backgroundColor = '#202124';
};

const fn_newLine = function (str) {
	console.log('\n--- ' + str + ' ----------------------------------------');
};

const fn_addZero = function (number, addNumber = 2) {
	return number.toString().padStart(addNumber, '0');
};

const fn_terminated = function () {
	throw new Error('Program terminated');
};
