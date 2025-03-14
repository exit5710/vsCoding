'use strict';

{
	// https://ko.javascript.info/bind
	// function bind
	fn_newLine('bind');

	const user = {
		firstName: 'jim',
		sayHi: function () {
			console.log(`Hello, ${this.firstName}!`);
		},
	};

	// setTimeout(function () {
	// 	user.sayHi();
	// }, 1000);

	let func = function () {
		this.sayHi();
	};

	let bindFunc = func.bind(user);
	bindFunc();

	//fn_terminated();
}
