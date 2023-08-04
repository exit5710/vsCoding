'use strict';

{
	fn_newLine('workMap');
	let john = { name: 'John', age: 23 };
	let array = [john];

	john = null;

	console.log(array);
}
