'use strict';

{
	// https://ko.javascript.info/prototype-inheritance
	// prototype inheritance
	fn_newLine('inheritance');

	let user = {
		name: 'John',
		surname: 'Smith',

		set fullName(value) {
			[this.name, this.surname] = value.split(' ');
		},

		get fullName() {
			return `${this.name} ${this.surname}`;
		},
	};

	let admin = {
		__proto__: user,
		isAdmin: true,
	};

	console.log(admin.fullName);

	admin.fullName = 'Alice Cooper';

	console.log(admin.fullName);
	console.log(user.fullName);

	//fn_terminated();
}
