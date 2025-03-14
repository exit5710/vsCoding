'use strict';

{
	// https://ko.javascript.info/call-apply-decorators
	// function decorators
	fn_newLine('decorators');

	let worker = {
		slow(min, max) {
			console.log(`slow(${min}, ${max})을/를 호출함`);

			return min + max;
		},
	};

	let cachingDecorator = function (func, hash) {
		let cache = new Map();

		return function () {
			let key = hash(arguments); // (*)

			if (cache.has(key)) {
				return cache.get(key);
			}

			let result = func.call(this, ...arguments); // (**)

			cache.set(key, result);

			return result;
		};
	};

	let hash = function (args) {
		// args[0] + ',' + args[1];
		return [].join.call(args);
	};

	worker.slow = cachingDecorator(worker.slow, hash);

	console.log(worker.slow(3, 5));
	console.log('다시 호출:', worker.slow(3, 5));

	//fn_terminated();
}
