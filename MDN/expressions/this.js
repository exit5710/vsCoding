'use strict';

document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#202124';

// this는 호출하는 방법에 의해 결정, 호출한놈(객체) === this

// someOne에 의해 호출되었기 때문에 this는 someOne이 된다. 때문에 name값과 fn의값이 출력된다.
let someOne = {
	name: 'kiYoung',
	fn: function () {
		console.log('someOne', this);
	},
};
someOne.fn();

// 버튼을 클릭하여 soneOne.fn이 호출되었기 때문에 this는 버튼이 된다.
let btn = document.getElementById('btn');
btn.style.cursor = "pointer";

btn.addEventListener('click', someOne.fn);

let something = {
	name: "kiYoung",
	call: function () {
		return this.name;
	}
};

console.log(something.call());

let calculator = {
	read: function () {
		this.a = Number(prompt("첫번째 값 : ", 0));
		this.b = Number(prompt("두번째 값 : ", 0));
	},
	sum: function () {
		return this.a + this.b;
	},
	mul: function () {
		return this.a * this.b;
	}
};

//calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let user = {}; // 주소 정보가 없는 사용자

console.log(user?.address?.street);