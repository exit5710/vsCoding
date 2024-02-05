'use strict';

{
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
	fn_newLine('object');
}

{
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	// https://ko.javascript.info/object-copy#cloning-and-merging-object-assign
	fn_newLine('object assign');

	let user = {
		name: 'jim',
		age: 31,
		etc: undefined,
	};

	let admin = user;

	user.name = 'peter';

	console.log(user);
	console.log(admin);
}
