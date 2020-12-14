'use strict';

console.log('Hello World');
{
	function changeName(obj) {
		obj.name = 'coder';
	}
	const kiYoung = { name: 'kiYoung' };
	changeName(kiYoung);
	console.log(kiYoung);
}

{
	function showMessage(message, from = 'unknow') {
		console.log(`${message} by ${from}`);
	}
	showMessage('hi');
}

{
	function printAll(...args) {
		args.forEach(function (elements, index) {
			console.log(elements);
		});

		// args.forEach((element) => {
		// 	console.log(element);
		// });

		// for (let arr of args) {
		// 	console.log(arr);
		// }
	}
	printAll('dream', 'coding', 'kiYoung');
}

{
	const obj = { name: 'kiYoung', hobby: 'java' };
	for (let key in obj) {
		console.log(`${key} : ${obj[key]}`);
	}
}

{
	const array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
	for (let element of array) {
		console.log(element);
	}
}

{
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		get age() {
			return this._age;
		}
		set age(value) {
			this._age = value;
		}
	}
	let person = new Person('kiYoung', 20);
	console.log(`${person.name} and ${person.age}`);
}

{
	const inventory = [
		{ name: 'apples', quantity: 2 },
		{ name: 'bananas', quantity: 0 },
		{ name: 'cherries', quantity: 5 },
	];

	let result = inventory.find(function (element, index) {
		//return index === 1;
		return element.name === 'bananas';
	});
	console.log(result);

	let findIdx = inventory.findIndex(function (element) {
		return element.name === 'cherries';
	});
	console.log(inventory[findIdx]);
}

// JSON
{
	// Object to JSON
	const array = ['apple', 'banana', 'orange'];
	let json = JSON.stringify(array);
	console.log(json);

	const rabbit = {
		name: 'tori',
		color: 'white',
		size: null,
		birthDay: new Date(),
		jump: function () {
			console.log(`${rabbit.name} can jump!`);
		},
	};
	console.log(rabbit);

	json = JSON.stringify(rabbit /*, ['name']*/);
	console.log(json);

	json = JSON.stringify(rabbit, function (key, value) {
		//console.log(`key : ${key} : value : ${value}`);
		//if (key === 'name') { if (value === 'tori') { value = 'kiYoung'; }}
		//return value;
		return key === 'name' && value === 'tori' ? 'kiYoung' : value;
	});
	console.log(json);

	// JSON to Object
	json = JSON.stringify(rabbit);
	const obj = JSON.parse(json);
	console.log(obj);
	rabbit.jump();
	try {
		obj.jump();
	} catch {
		console.log('not function');
	}

	console.log(rabbit.birthDay.getDate());
	console.log(obj.birthDay);
}

// callBack - promise
{
	function printImmdeiately(print) {
		print();
	}
	printImmdeiately(function () {
		console.log('hello~');
	});

	class UserStorage {
		loginUser(id, password) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					if ((id === 'kiYoung' && password === 'dream') || (id === 'coder' && password === 'academy')) {
						resolve(id);
					} else {
						reject(new Error('not found'));
					}
				}, 2);
			});
		}

		getRoles(user) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					if (user === 'kiYoung') {
						resolve({ name: user, role: 'admin' });
					} else {
						reject(new Error('no access'));
					}
				}, 1);
			});
		}
	}

	const userStorage = new UserStorage();
	const id = 'kiYoung'; // prompt('Enter your id');
	const password = 'dream'; // prompt('Enter your password');

	userStorage
		.loginUser(id, password)
		.then(function (user) {
			userStorage
				.getRoles(user)
				.then(function (user) {
					console.log(`Hello ${user.name}, you have a ${user.role} role`);
				})
				.catch(function (error) {
					console.log(error);
				});
		})
		.catch(function (error) {
			console.log(error);
		});

	// userStorage
	// 	.loginUser(id, password)
	// 	.then(userStorage.getRoles)
	// 	.then((user) => console.log(`Hello ${user.name}, you have a ${user.role} role`))
	// 	.catch(console.log);
}

// promise
{
	// Producer... when new Promise is created, the executer runs automatically.
	console.log('---promise----');
	const promise = new Promise(function (resolve, reject) {
		console.log('doing something...');
		setTimeout(function () {
			resolve('kiYoung');
			// reject(new Error('no network'));
		}, 2000);
	});

	// Consumers: then, catch, finally
	promise
		.then(function (value) {
			console.log(value);
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
			console.log('finally');
		});
}

// async & await
{
	/* function fetchUser() {
		return new Promise(function (resolve, reject) {
			// do network request in 10 secs...
			resolve('kiYoung');
		});
	} */
	// async (Promise를 자동 생성)
	async function fetchUser() {
		return 'kiYoung';
	}

	const user = fetchUser();
	user.then(function (value) {
		console.log('async -> ' + value);
	});
	console.log(user);

	// await (async 함수안에서만 사용가능)
	function delay(ms) {
		return new Promise(function (resolve) {
			setTimeout(resolve, ms);
		});
	}

	async function getApple() {
		await delay(2000);
		//throw 'error';
		return 'apple';
	}

	async function getBanana() {
		await delay(1000);
		return 'banana';
	}

	async function pickFruits() {
		/* return getApple().then(function (apple) {
			return getBanana().then(function (banana) {
				return `${apple} + ${banana}`;
			});
		}); */
		try {
			// 병렬처리
			const applePromise = getApple();
			const bananaPromise = getBanana();
			const apple = await applePromise;
			const banana = await bananaPromise;

			return `${apple} + ${banana}`;
		} catch (error) {
			console.log(error);
		}
	}

	pickFruits().then(function (value) {
		console.log(value);
	});

	function pickAllFruites() {
		return Promise.all([getApple(), getBanana()]).then(function (fruite) {
			return fruite.join(' + ');
		});
	}

	// 병렬처리
	pickAllFruites().then(function (value) {
		console.log(value);
	});

	function pickOnlyOne() {
		return Promise.race([getApple(), getBanana()]);
	}

	pickOnlyOne().then(function (value) {
		console.log('race -> ' + value);
	});
}
