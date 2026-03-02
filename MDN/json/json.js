'use strict';

{
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
	// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON
	fn_newLine('json');

	const userJson = '[{"name": "Tom", "gender":"male", "age": 25, "isMember": true}, {"name": "Anna", "gender":"female", "age": 30, "isMember": false}]';
	console.log('userJson typeof :', typeof userJson); // string

	const userArray = JSON.parse(userJson);
	console.log('userArray is Array?', Array.isArray(userArray)); // true

	const user = userArray[0];
	console.log('user typeof :', typeof user); // object
	console.log(user);

	if (user.isMember) {
		console.log(`${user.name} is a member. Hello~! ${user.name}`);
	}

	const json = JSON.stringify(user);
	console.log(json);

	const dataList = '{"users": [{"id" : 1, "name" : "Alice"}, {"id" : 2, "name": "Bob"}, {"id" : 3, "name": "Charlie"}]}';
	const data = JSON.parse(dataList);

	/*
	data.users.forEach((user, index) => {
		//console.log('index ', index, ' user name :', user.name);
		console.log(`index ${index} user name : ${user.name}`);
	});
	*/

	data.users.forEach(function (user, index) {
		console.log(`index ${index} user name : ${user.name}`);
	});

	const productsJson = '{"products": [{ "name": "Monitor", "price": 250000 }, { "name": "Keyboard", "price": 45000 }, { "name": "Chair", "price": 180000 }]}';
	const products = JSON.parse(productsJson);

	products.products.forEach(function (element) {
		console.log(`product name : ${element.name}`);
	});

	products.products.filter(function (element) {
		if (element.price > 100000) {
			console.log(element.name);
		}
	});

	console.log(products.products[0].name);
}
