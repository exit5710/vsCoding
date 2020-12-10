'use strict';

// this는 호출하는 방법에 의해 결정, 호출한놈(객체) === this

// someOne에 의해 호출되었기 때문에 this는 someOne이 된다. 때문에 name값과 fn의값이 출력된다.
let someOne = {
	name: 'kiYoung',
	fn: function () {
		console.log('someOne', this);
	},
};
someOne.fn();

// 버튼을 클릭하여 soneOne이 호출되었기 때문에 this는 버튼이 된다.
let btn = document.getElementById('btn');
btn.addEventListener('click', someOne.fn);
