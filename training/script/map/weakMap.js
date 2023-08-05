'use strict';

{
	fn_newLine('WeakMap');
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

	console.log(weakMap.get(jim));
}
