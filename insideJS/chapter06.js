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
		age: '',
		getName: function () {
			return this.name;
		},
		setName: function (name) {
			this.name = name;
		},
		getAge: function () {
			return this.age;
		},
		setAge: function (age) {
			this.age = age;
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
	student.setAge(20);
	console.log(student.getName(), student.getAge());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 6
	let person = {
		name: 'zzoon',
		getName: function () {
			return this.name;
		},
		setName: function (name) {
			this.name = name;
		}
	};

	let added = {
		getAge: function () {
			return this.age;
		},
		setAge: function (age) {
			this.age = age;
		}
	};

	function createObject(o) {
		function F() {
		}
		F.prototype = o;
		return new F();
	}

	function extend(obj, prop) {
		if (!prop) {
			prop = obj;
			obj = this;
		}

		for (let i in prop) {
			obj[i] = prop[i];
		}

		return obj;
	}

	let student = createObject(person);
	extend(student, added);
	student.setAge(25);
	console.log(student.getAge());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 7
	function Person(name) {
		this.name = name;
	}

	Person.prototype.getName = function () {
		return this.name;
	};

	Person.prototype.setName = function (name) {
		this.name = name;
	};

	function Student(name) {
		Person.apply(this, arguments);
	}

	let foo = new Person('foo');
	Student.prototype = foo;

	let bar = new Student('bar');
	bar.setName('bar');
	console.log(bar.getName());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 8
	function Person(name) {
		this.name = name;
	}

	Function.prototype.method = function (name, func) {
		this.prototype[name] = func;
	};

	Person.method('getName', function () {
		return this.name;
	});

	Person.method('setName', function (name) {
		this.name = name;
	});

	function Student() {
	}

	function F() {
	}

	F.prototype = Person.prototype;
	Student.prototype = new F();
	Student.prototype.constructor = Student;
	Student.super = Person.prototype;

	let me = new Student();
	me.setName('foo');
	console.log(me.getName());
}
{
	console.log(fn_newLine() + ' -----------------------------------');
	// 9
	let Person = function (arg) {
		let name = arg ? arg : 'foo';

		this.getName = function () {
			return name;
		};

		this.setName = function (arg) {
			name = arg;
		};
	};

	let me = new Person();
	console.log(me.getName());

	me.setName('bar');
	console.log(me.getName());
}