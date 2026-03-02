'use strict';

{
	// https://ko.javascript.info/object-methods
	// C:/java/script/vsCoding/MDN/function/method.html

	fn_newLine('method - this');

	// sayHi() : 메서드
	let user = {
		name: 'John',
		age: 30,
		sayHi() {
			console.log('Hello, ' + this.name);
		},
	};

	user.sayHi(); // Hello, John

	let f = user.sayHi.bind({ name: 'Tom' });
	f.nickName = 'tiny';
	f(); // Hello, Tom

	console.log(f.nickName); // tiny
	console.log(user.name); // John

	// sayHi() 는 user 객체의 메서드(메서드는 객체의 속성으로 정의된 함수)
	// this는 런타임에 정의며 호출하는 객체를 참조

	// sayHi() 메서드는 user 객체에 바인딩되어 있지만,
	// bind()를 사용하여 다른 객체에 바인딩할 수 있습니다.
}
