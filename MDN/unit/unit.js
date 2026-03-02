'use strict';

{
	fn_newLine('unit test');

	let number = 10;

	let fn_callBackTest = function (number, callback) {
		let result = number * number;

		if (typeof callback === 'function') {
			callback(result); // 콜백 실행
		}
	};

	fn_callBackTest(number, function (result) {
		console.log(result);
	});

	let fn_square = function (num) {
		return new Promise((resolve) => {
			resolve(num * num);
		});
	};

	let fn_run = async function (number) {
		try {
			let result = await fn_square(number);
			console.log(result);
		} catch (err) {
			console.error(err);
		}
	};

	fn_run(number);
}
