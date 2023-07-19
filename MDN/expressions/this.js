'use strict';

// this는 호출하는 방법에 의해 결정, 호출한놈(객체) === this

// someOne에 의해 호출되었기 때문에 this는 someOne이 된다. 때문에 name, value(001), fn의값이 출력된다.
let someOne = {
	name: 'kiYoung',
	value: '001',
	fn: function () {
		console.log('someOne', this.value, this);
	},
};
someOne.fn();

// 버튼을 클릭하여 soneOne.fn이 호출되었기 때문에 this는 버튼이 된다. (버튼의 value값인 5710 출력)
let btn = document.getElementById('btn');
btn.style.cursor = 'pointer';
btn.addEventListener('click', someOne.fn);

// calculator
let calculator = {
	read: function () {
		// this.a = Number(prompt("첫번째 값 : ", 0));
		// this.b = Number(prompt("두번째 값 : ", 0));
		this.a = 2;
		this.b = 3;
	},
	sum: function () {
		return this.a + this.b;
	},
	mul: function () {
		return this.a * this.b;
	},
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let user = {}; // 주소 정보가 없는 사용자

console.log(user?.address?.street);
