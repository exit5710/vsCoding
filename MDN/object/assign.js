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
	admin.name = 'peter';

	console.log('user :', user);
	console.log('admin :', admin);

	let clone = {};

	for (let key in user) {
		clone[key] = user[key];
	}

	clone.name = 'jone';
	console.log('clone :', clone);

	let hobby = {
		hobby: 'computer',
	};

	Object.assign(user, hobby);
	console.log('user :', user);
}
