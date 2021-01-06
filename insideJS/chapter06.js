'use strict';

// ------ chapter06 ------------------------------
document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

const page = 6;
let verse = 1;

const fn_newLine = function () {
	let example;

	if (verse == 1) {
		example = '----- ex ' + page + '-' + verse++;
	} else {
		example = '\n----- ex ' + page + '-' + verse++;
	};

	return example;
};
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 1
	function Person(arg) {
		this.name = arg;

		this.getName = function () {
			return this.name;
		};

		this.setName = function (value) {
			this.name = value;
		};
	}

	let me = new Person('zzoon');
	console.log(me.getName());

	me.setName('foo');
	console.log(me.getName());

	class User {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		getName() {
			return this.name;
		}

		getAge() {
			return this.age;
		}

		setName(name) {
			this.name = name;
		}

		setAge(age) {
			this.age = age;
		}
	}
	console.log(typeof User);

	let user = new User('foo', 20);
	console.log(user.getName(), user.getAge());
	user.setName('bar');
	user.setAge(27);
	console.log(user.getName(), user.getAge());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 2
	function Person(arg) {
		this.name = arg;
	}

	Person.prototype.getName = function () {
		return this.name;
	};

	Person.prototype.setName = function (name) {
		this.name = name;
	};

	let foo = new Person('foo');
	let bar = new Person('bar');
	console.log(foo.getName());
	console.log(bar.getName());

	class User {
		constructor(name) {
			this.name = name;
		}
	}

	User.prototype.getName = function () {
		return this.name;
	};

	let user = new User('foo');
	console.log(user.getName());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 3
	Function.prototype.method = function (name, func) {
		this.prototype[name] = func;
	};

	function Person(name) {
		this.name = name;
	}

	Person.method('getName', function () {
		return this.name;
	});

	Person.method('setName', function (name) {
		this.name = name;
	});

	let foo = new Person('foo');
	console.log(foo.getName());

	let bar = new Person('bar');
	console.log(bar.getName());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 4
	function createObject(o) {
		function F() {
		}
		F.prototype = o;
		return new F();
	}
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 5
	let person = {
		name: 'foo',
		getName: function () {
			return this.name;
		},
		setName: function (name) {
			this.name = name;
		}
	};

	function createObject(o) {
		function F() {
		}
		F.prototype = o;
		return new F();
	}

	let student = createObject(person);
	student.setName('foo');
	console.log(student.getName());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 6
}