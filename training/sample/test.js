'use strict';

document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#202124';

{
	function marry(man, woman) {
		woman.husband = man;
		man.wife = woman;

		return {
			father: man,
			mother: woman
		};
	}

	let family = marry({ name: "John" }, { name: "Ann" });

	console.log(family.mother);

	const call = function (message, callBack) {
		console.log(message);

		for (let i = 0; i <= 55555; i++) {
			for (let j = 0; j <= 55555; j++) {
			}
		}

		if (typeof callBack === 'function') {
			callBack();
		}
	};

	const back = function () {
		console.log('back');
	};

	/*
	call('call', function () {
		call('hi', function () {
			call('hello', function () {
				call('hell', function () {
					console.log('callBack hell~');
				});
			});
		});
	});
	*/

	//call('call', back);


}