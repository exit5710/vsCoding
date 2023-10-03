'use strict';

{
	// https://ko.javascript.info/json
	fn_newLine('json');

	let student = {
		name: 'John',
		age: 30,
		isAdmin: false,
		courses: ['html', 'css', 'js'],
		wife: null,
	};

	let json = JSON.stringify(student);
	//console.log(JSON.parse(json));
	console.log(json);

	let room = {
		number: 23,
	};

	let meetup = {
		title: 'Conference',
		participants: [{ name: 'John' }, { name: 'Alice' }],
		place: room, // meetup references room
	};

	room.occupiedBy = meetup; // room references meetup

	//console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number'], 4));
	console.log(
		JSON.stringify(
			meetup,
			function replacer(key, value) {
				//console.log(`${key}: ${value}`);
				return key != '' && key == 'occupiedBy' ? undefined : value;
			},
			4
		)
	);

	let numbers = '[0, 1, 2, 3]';

	numbers = JSON.parse(numbers);

	console.log(numbers[1]);
}
{
	let user = {
		name: 'John Smith',
		age: 35,
	};

	console.log(user);

	let toJson = JSON.stringify(user);
	let toObj = JSON.parse(toJson);

	console.log(toJson);
	console.log(toObj);
}
{
	let room = {
		number: 23,
	};

	let meetup = {
		title: 'Conference',
		occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
		place: room,
	};

	room.occupiedBy = meetup;
	meetup.self = meetup;

	console.log(
		JSON.stringify(
			meetup,
			function replacer(key, value) {
				return key != '' && value == meetup ? undefined : value;
			},
			4
		)
	);
}
