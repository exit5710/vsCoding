'use strict';

{
	function printImmdeiately(print) {
		print();
	}
	printImmdeiately(function () {
		console.log('hello~');
	});

	class UserStorage {
		loginUser(id, password, onSuccess, onError) {
			setTimeout(function () {
				if ((id === 'kiYoung' && password === 'dream') || (id === 'coder' && password === 'academy')) {
					onSuccess(id);
				} else {
					onError(new Error('not found'));
				}
			}, 2);
		}

		getRoles(user, onSuccess, onError) {
			setTimeout(function () {
				if (user === 'kiYoung') {
					onSuccess({ name: user, role: 'admin' });
				} else {
					onError(new Error('no access'));
				}
			}, 1);
		}
	}

	const userStorage = new UserStorage();
	const id = 'kiYoung'; // prompt('Enter your id');
	const password = 'dream'; // prompt('Enter your password');
	userStorage.loginUser(
		id,
		password,
		function (user) {
			userStorage.getRoles(
				user,
				function (userWithRole) {
					//alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
					console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
				},
				function (error) {
					console.log(error);
				}
			);
		},
		function (error) {
			console.log(error);
		}
	);
}
