'use strict';

// callBack함수 (함수를 인자로 콜백함수를 넘겨 특정시점에 실행)
// https://yubylab.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0?category=575633
{
	let allUserData = [];

	let logStuff = function (userData) {
		if (typeof userData === 'string') {
			console.log(userData);
		} else if (typeof userData === 'object') {
			for (let item in userData) {
				console.log(item + ': ' + userData[item]);
			}
		}
	};

	// 두 개의 인자를 받아서 마지막에 콜백함수를 호출한다.
	let getInput = function (options, callback) {
		allUserData.push(options);

		if (typeof callback === 'function') {
			callback(options);
		}
	};

	// getInput 함수를 호출할 때, logStuf이라는 함수의 이름을 인자로 넘긴다.
	// logStuff은 콜백함수가 되어 getInput이라는 함수의 내부에서 동작한다.

	// object
	getInput({ name: 'Rich', speciality: 'JavaScript' }, logStuff);

	// string
	getInput('Clinton', logStuff);
}
{
	console.clear();
	// getUserInput함수에서 callBack(clientData.setUserName)을 호출하지만 setUserName에서는 this가 undefined가 되어 fullName에 Barack Obama를 세팅하지 못한다.
	// this는 호출하는 방법에 의해 결정되는데 함수에서 호출되기 때문에 undefined가 되는듯 하다.

	let clientData = {
		id: '094545',
		fullName: 'Not Set',
		setUserName: function (firstName, lastName) {
			console.log(this);
			try {
				this.fullName = firstName + ' ' + lastName;
			} catch {
				// console.log('catch');
			}
		},
	};

	let getUserInput = function (firstName, lastName, callBack) {
		callBack(firstName, lastName);
	};

	getUserInput('Barack', 'Obama', clientData.setUserName);
	console.log(clientData.fullName);
	// console.log(window.fullName);
}
{
	console.clear();

	let clientData = {
		id: '094545',
		fullName: 'Not Set',
		setUserName: function (firstName, lastName) {
			try {
				this.fullName = firstName + ' ' + lastName;
			} catch {
				// console.log('catch');
			}
		},
	};

	// apply() 메서드는 주어진 this 값과 배열 (또는 유사 배열 객체) 로 제공되는 arguments(배열) 로 함수를 호출합니다.
	let getUserInput = function (firstName, lastName, callBack, callBackObj) {
		// callBack.call(callBackObj, firstName, lastName);
		// this로 clientData를 넘긴다.
		callBack.apply(callBackObj, [firstName, lastName]);
	};

	getUserInput('Barack', 'Obama', clientData.setUserName, clientData);
	console.log(clientData.fullName);
}
