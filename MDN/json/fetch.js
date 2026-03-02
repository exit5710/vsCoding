'use strict';

{
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
	// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON
	fn_newLine('fetch');

	const fn_printData = function (data) {
		data.forEach(function (users) {
			// console.log(`user name : ${users.name}`);
			// console.log(`user: ${users}`);
			console.log(users);
		});
	};

	const validateUsers = function (data) {
		return new Promise((resolve, reject) => {
			if (!Array.isArray(data)) {
				return reject('users 데이터가 배열이 아님');
			}

			if (data.length === 0) {
				return reject('users 데이터가 비어있음');
			}

			resolve(data); // ✅통과
		});
	};

	const extractUserNames = function (data) {
		return new Promise((resolve) => {
			const userNames = data.map((user) => user.name);

			resolve(userNames);
		});
	};

	const fn_run = async function (data) {
		try {
			const users = await validateUsers(data);
			fn_printData(users);

			const userNames = await extractUserNames(data);
			fn_printData(userNames);
		} catch (err) {
			console.error(err);
		}
	};

	const url = 'https://jsonplaceholder.typicode.com/users';
	const formData = {};

	fn_submit(url, formData, function (data) {
		fn_run(data);
		/*
		validateUsers(data)
			.then(function (users) {
				fn_printData(users);
			})
			.catch(function (err) {
				console.error(err);
			});
		*/
	});

	/*
	async function loadUsers() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();

		console.log('users typeof :', typeof users);

		console.log(users);

		users.forEach(function (user) {
			console.log(`user name : ${user.name}`);
		});

		return users;
	}

	loadUsers();
	*/

	/*
	const userList = loadUsers();
	userList.then(function (users) {
		console.log(users);
	});
	*/
}
