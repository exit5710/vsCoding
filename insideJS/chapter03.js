'use strict';

// ------ chapter03 ------------------------------
document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

const page = 3;
let verse = 1;
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let intNum = 10;
	let floatNum = 0.1;

	let singleQuoteStr = 'single quote string';
	let singleChar = 'a';

	let boolLet = true;
	let emptyLet;
	let nullLet = null;

	let fn_test = function () {};

	console.log('intNum : ' + typeof intNum);
	console.log('floatNum : ' + typeof floatNum);
	console.log('singleQuoteStr : ' + typeof singleQuoteStr);
	console.log('singleChar : ' + typeof singleChar);
	console.log('boolLet : ' + typeof boolLet);
	console.log('emptyLet : ' + typeof emptyLet);
	console.log('nullLet : ' + typeof nullLet);
	console.log('fn_test : ' + typeof fn_test);
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let num = 5 / 2;
	console.log(num);
	console.log(Math.floor(num));
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let str = 'test';
	console.log(str[0], str[1], str[2], str[3]);
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let nullLet = null;
	console.log(typeof nullLet === null);
	console.log(nullLet === null);
	console.log(typeof nullLet == 'object');
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	// 객체생성 (Object() 생성자 함수)
	let foo = new Object();
	foo.name = 'foo';
	foo.age = 30;
	foo.gender = 'male';
	console.log(foo);
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	// 객체생성 (객체 리터럴)
	let foo = { name: 'foo', age: 30, gender: 'male' };
	console.log(typeof foo);
	console.log(foo);
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let foo = { name: 'foo', major: 'computer science' };
	console.log(foo.name);
	console.log(foo['name']);
	console.log(foo.nickname);

	foo.major = 'electronics engineering';
	console.log(foo.major);
	console.log(foo['major']);

	foo.age = 30;
	console.log(foo.age);

	foo['full-name'] = 'foo bar';
	console.log(foo['full-name']);
	console.log(foo.full - name);
	console.log(foo.full);
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let foo = { name: 'foo', age: 30, major: 'computer science' };
	let prop;

	for (prop in foo) {
		console.log(prop, foo[prop]);
	}
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let foo = { name: 'foo', age: 30 };
	console.log(foo.age);
	delete foo.age;
	console.log(foo.age);
	console.log(foo);
}
{
	console.log('----- ex ' + page + '-' + verse++ + ' -----------------------------------');
	let objA = { num: 40 };
	let objB = objA;
	console.log(objA.num);
	console.log(objB.num);

	objA.num = 50;
	console.log(objA.num);
	console.log(objB.num);
}
