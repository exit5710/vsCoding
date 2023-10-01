'use strict';

{
	fn_newLine('date');

	let date = new Date();
	console.log('today : ' + date.getFullYear() + '-' + fn_addZero(date.getMonth() + 1) + '-' + fn_addZero(date.getDate()));
	console.log(date.getTime());

	//let old = new Date('2022-10-01');
	//let now = new Date();
	//console.log(parseInt((now.getTime() - old.getTime()) / (1000 * 60 * 60 * 24)));

	let fn_msToTime = function (ms) {
		let milliseconds = fn_addZero(parseInt((ms % 1000) / 10));
		let seconds = fn_addZero(parseInt((ms / 1000) % 60));
		let minutes = fn_addZero(parseInt((ms / (1000 * 60)) % 60));
		let hours = fn_addZero(parseInt((ms / (1000 * 60 * 60)) % 24));

		//console.log(fn_addZero(parseInt(ms % 1000), 3));

		return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
	};

	let fn_diffSubtract = function (date1, date2) {
		return date2 - date1;
	};

	let fn_diffGetTime = function (date1, date2) {
		return date2.getTime() - date1.getTime();
	};

	let fn_bench = function (func) {
		let date1 = new Date('2000-01-01');
		let date2 = new Date();

		let start = Date.now();

		for (let i = 0; i < 5000000; i++) {
			func(date1, date2);
		}

		return Date.now() - start;
	};

	let subtractTime = 0;
	let getTime = 0;

	for (let i = 0; i <= 10; i++) {
		subtractTime = subtractTime + fn_bench(fn_diffSubtract);
		getTime = getTime + fn_bench(fn_diffGetTime);
	}

	console.log('diffSubtract에 소모된 시간: ' + subtractTime + 'ms' + ' / ' + fn_msToTime(subtractTime));
	console.log('diffGetTime에 소모된 시간: ' + getTime + 'ms' + ' / ' + fn_msToTime(getTime));

	/*
	let start = Date.now(); // 측정 시작 new Date();
	let doSomething;
	let loop = 21000;

	for (let i = 0; i <= loop; i++) {
		for (let j = 0; j <= loop; j++) {
			doSomething = doSomething * j * j * j;
		}
	}

	let end = Date.now(); // 측정 종료 new Date();

	console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.\n`, fn_msToTime(`${end - start}`));
	*/
}
