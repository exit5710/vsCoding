'use strict';

// ------ chapter03 ------------------------------
document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

const page = 3;
let verse = 1;

const fn_newline = function () {
	let example;

	if (verse == 1) {
		example = '----- ex ' + page + '-' + verse++;
	} else {
		example = '\n----- ex ' + page + '-' + verse++;
	};

	return example;
};
{
	console.log(fn_newline() + ' -----------------------------------');
	// 1
	let intNum = 10;
	let floatNum = 0.1;

	let singleQuoteStr = 'single quote string';
	let singleChar = 'a';

	let boolLet = true;
	let emptyLet;
	let nullLet = null;

	let arr = [];
	let obj = {};
	let fn_test = function () { };

	console.log('intNum : ' + typeof intNum);
	console.log('floatNum : ' + typeof floatNum);
	console.log('singleQuoteStr : ' + typeof singleQuoteStr);
	console.log('singleChar : ' + typeof singleChar);
	console.log('boolLet : ' + typeof boolLet);
	console.log('emptyLet : ' + typeof emptyLet);
	console.log('nullLet : ' + typeof nullLet);
	console.log('array : ' + typeof arr);
	console.log('object : ' + typeof obj);
	console.log('fn_test : ' + typeof fn_test);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 2
	let num = 5 / 2;
	console.log(num);
	console.log(Math.floor(num));
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 3
	let str = 'test';
	console.log(str[0], str[1], str[2], str[3]);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 4
	let nullLet = null;
	console.log(typeof nullLet === null);
	console.log(nullLet === null);
	console.log(typeof nullLet == 'object');
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 객체생성 (Object() 생성자 함수)
	let foo = new Object();
	foo.name = 'foo';
	foo.age = 30;
	foo.gender = 'male';

	console.log(foo);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 객체생성 (객체 리터럴)
	let foo = {
		name: 'foo'
		, age: 30
		, gender: 'male'
	};

	console.log(typeof foo);
	console.log(foo);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 7
	let foo = {
		name: 'foo'
		, major: 'computer science'
	};

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
	console.log(fn_newline() + ' -----------------------------------');
	// 8
	let foo = {
		name: 'foo'
		, age: 30
		, major: 'computer science'
	};

	let prop;

	for (prop in foo) {
		console.log(prop, foo[prop]);
	}
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 9
	let foo = {
		name: 'foo'
		, age: 30
	};

	console.log(foo.age);
	delete foo.age;
	console.log(foo.age);
	console.log(foo);
	console.log('\n');

	let objA = { num: 40 };
	let objB = objA;
	console.log(objA.num);
	console.log(objB.num);

	objA.num = 50;
	console.log(objA.num);
	console.log(objB.num);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 10
	let a = 100;
	let b = 100;

	let objA = { value: 100 };
	let objB = { value: 100 };
	let objC = objB;

	console.log(a == b);
	console.log(objA == objB);
	console.log(objB == objC);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 11
	let a = 100;
	let objA = { value: 100 };

	let changeArg = function (num, obj) {
		num = 200;
		obj.value = 200;

		console.log(num);
		console.log(obj);
	};

	changeArg(a, objA);

	console.log(a);
	console.log(objA);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 12
	let foo = {
		name: 'foo'
		, age: 30
	};

	console.log(foo.toString());
	console.dir(foo);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 13
	let colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];

	console.log(colorArr[0]);
	console.log(colorArr[1]);
	console.log(colorArr[4]);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 14
	let emptyArr = [];
	console.log(emptyArr[0]);

	emptyArr[0] = 100;
	emptyArr[3] = 'eight';
	emptyArr[7] = true;
	console.log(emptyArr);
	console.log(emptyArr.length);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 15
	let arr = [];
	console.log(arr.length);

	arr[0] = 0;
	arr[1] = 1;
	arr[2] = 2;
	arr[100] = 100;
	console.log(arr.length);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 16
	let arr = [0, 1, 2];
	console.log(arr.length);

	arr.length = 5;
	console.log(arr);

	arr.length = 2;
	console.log(arr);
	console.log(arr[2]);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 17
	let arr = ['zero', 'one', 'two'];
	arr.push('three');
	console.log(arr);

	arr.length = 5;
	arr.push('four');
	console.log(arr);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 18
	let colorsArray = ['orange', 'yellow', 'green'];
	console.log(colorsArray[0]);
	console.log(colorsArray[1]);
	console.log(colorsArray[2]);

	let colorsObj = {
		'0': 'orange'
		, '1': 'yellow'
		, '2': 'green'
		, n: 'ddd'
	};
	console.log(colorsObj['0']);
	console.log(colorsObj['1']);
	console.log(colorsObj['2']);

	console.log(typeof colorsArray);
	console.log(typeof colorsObj);

	console.log(colorsArray.length);
	console.log(colorsObj.length);

	colorsArray.push('red');
	console.log(colorsArray);
	try {
		colorsObj.push('red');
	} catch {
		console.log('Uncaught TypeError: colorsObj.push is not a function');
	};
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 19
	let emptyArray = [];
	let emptyObj = {};

	console.log(emptyArray);
	console.log(emptyObj);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 20
	let arr = ['zero', 'one', 'two'];
	console.log(arr.length);

	arr.color = 'blue';
	arr.name = 'numberArray';
	console.log(arr.length);

	arr[3] = 'red';
	console.log(arr.length);

	console.log(arr);

	console.log(fn_newline() + ' -----------------------------------');
	// 21
	for (let prop in arr) {
		console.log(prop, arr[prop]);
	}

	for (let i = 0; i < arr.length; i++) {
		console.log(i, arr[i]);
	}

	arr.forEach(function (elements, index) {
		console.log(index, elements);
	});
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 22
	let arr = ['zero', 'one', 'two', 'three'];
	delete arr[2];
	console.log(arr);
	console.log(arr.length);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 23
	let arr = ['zero', 'one', 'two', 'three'];
	arr.splice(2, 1);
	console.log(arr);
	console.log(arr.length);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 24
	let foo = new Array(3);
	console.log(foo);
	console.log(foo.length);

	let bar = new Array(1, 2, 3);
	console.log(bar);
	console.log(bar.length);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 25
	let arr = ['bar'];
	let obj = {
		name: 'foo'
		, length: 1
	};

	arr.push('baz');
	console.log(arr);

	console.log(obj);
	console.log(obj.length);
	try {
		obj.push('baz');
	} catch {
		console.log('Uncaught TypeError: obj.push is not a function');
	}
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 26
	let arr = ['bar'];
	let obj = {
		name: 'foo'
		, length: 1
	};

	arr.push('baz');
	console.log(arr);

	Array.prototype.push.apply(obj, ['baz']);
	console.log(obj);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 27
	let num = 0.5;
	console.log(num.toExponential(1));
	console.log('test'.charAt(2));
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 28
	let add1 = 1 + 2;
	let add2 = 'my ' + 'string';
	let add3 = 1 + 'string';
	let add4 = 'string' + 2;

	console.log(add1);
	console.log(add2);
	console.log(add3);
	console.log(add4);
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 29
	console.log(1 == '1');
	console.log(1 === '1'); // 강력권고
}
{
	console.log(fn_newline() + ' -----------------------------------');
	// 30
	// !! boolen 으로 변경
	console.log(!!0);
	console.log(!!1);
	console.log(!!'string');
	console.log(!!'');
	console.log(!!true);
	console.log(!!false);
	console.log(!!null);
	console.log(!!undefined);
	console.log(!!{});
	console.log(!![1, 2, 3]);
}