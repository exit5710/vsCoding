'use strict';

{
	const getData = function () {
		console.log('promise start');

		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve('then...');
			}, 2000);
		});
	};

	getData()
		.then(function (value) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve(value + 'what!?');
				}, 2000);
			});
		})
		.then(function (value) {
			console.log(value);
		});

	console.log('hello~');
}
