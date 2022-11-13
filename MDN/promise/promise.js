'use strict';

document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

{
	const getData = function () {
		console.log('promise start');
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve('then...');
			}, 2000);
		});
	};

	getData().then(function (value) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve(value + 'what!?');
			}, 2000);
		});
	}).then(function (value) {
		console.log(value);
	});

	console.log('hello~');

	const printName = function () {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve('kiYoung');
			}, 2000);
		});
	};
}