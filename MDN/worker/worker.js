'use strict';

{
	onmessage = function (event) {
		let result = 0;

		if (event.data.task === 1) {
			// 반복문 1
			for (let i = 0; i < 40000; i++) {
				// 반복 횟수 예시
				for (let j = 0; j < 40000; j++) {
					result += i + j;
				}
			}
			test();
		} else if (event.data.task === 2) {
			// 반복문 2
			for (let i = 0; i < 30000; i++) {
				// 반복 횟수 예시
				for (let j = 0; j < 30000; j++) {
					result += i * j;
				}
			}
		}

		// 결과를 메인 스레드로 전송
		postMessage(result);
	};

	let test = function () {
		let a = 0.1;
		let b = 1.1;
		let c = a * 10 + b * 10;
		console.log(c / 10);
	};
}
