'use strict';

const fn_init = function () {
	document.body.style.margin = 0;
	document.body.style.width = 'calc(100vw - 22px)';
	document.body.style.height = 'calc(100vh - 22px)';
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

const fn_submit = async function (url, jsonData, callBack) {
	try {
		const response = await fetch(url, {
			// method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			// body: JSON.stringify(jsonData),
		});

		const contentType = response.headers.get('content-type');

		if (!contentType) {
			console.error('No content-type in response');
			return false;
		}

		// 일반 JSON 응답 처리
		if (contentType.includes('application/json')) {
			const data = await response.json();

			if (typeof callBack === 'function') {
				callBack(data);
			}

			return false;
		}

		console.warn('지원하지 않는 Content-Type:', contentType);
	} catch (error) {
		console.error('Error:', error);
	}
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
