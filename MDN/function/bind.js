'use strict';

{
	// https://ko.javascript.info/bind
	// function bind
	fn_newLine('bind');

	const user = {
		firstName: 'jim',
		sayHi: function () {
			console.log('Hello, ' + this.firstName);
		},
	};

	let func = function () {
		this.sayHi();
	};

	let bindFunc = func.bind(user);
	bindFunc();

	/*
	function askPassword(ok, fail) {
		let password = prompt('비밀번호를 입력해주세요.', '');

		if (password == 'rockstar') ok();
		else fail();
	}

	let user = {
		name: 'John',

		login(result) {
			console.log(this.name + (result ? ' 로그인 성공' : ' 로그인 실패'));
		},
	};

	askPassword(user.login.bind(user, true), user.login.bind(user, false));
	*/

	//fn_terminated();
}
