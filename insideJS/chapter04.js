'use strict';

// ------ chapter04 ------------------------------
document.body.style.margin = 0;
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#252525';

const page = 4;
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
}