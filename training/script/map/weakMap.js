'use strict';

{
	fn_newLine('weakMap');
	let john = { name: 'John', age: 23 };
	let array = [john];

	john = null;

	console.log(array);

	let map = new Map();
	map.set(john, '...');

	map.forEach(function (element) {
		console.log(element);
	});

	let weakMap = new WeakMap();
	let jim = { name: 'jim' };

	weakMap.set(jim, 'ok');
	// weakMap.set('test', 'Whoops'); //Uncaught TypeError: Invalid value used as weak map key

	jim = null;

	console.log(weakMap);

	fn_newLine('visitsCount');
	let visitsCountMap = new WeakMap();

	let fn_countUser = function (user) {
		let count = visitsCountMap.get(user) || 0;
		visitsCountMap.set(user, count + 1);
	};

	let tom = { name: 'tom' };
	fn_countUser(tom);

	tom = null;

	console.log(visitsCountMap);

	fn_newLine('ex1'); // '읽음'상태인 메시지 저장하기

	// 메세지
	let messages = [
		{ text: 'Hello', from: 'John' },
		{ text: 'How goes?', from: 'John' },
		{ text: 'See you soon', from: 'Alice' },
	];

	// 읽은 메세지
	let readMessages = new WeakSet();

	// 2개의 메세지를 읽음
	readMessages.add(messages[0]);
	readMessages.add(messages[1]);

	// 메세지 배열에서 읽은 메세지 삭제
	messages.splice(0, 2);

	console.log('messages : ', messages);
	console.log('readMessages: ', readMessages);
}
