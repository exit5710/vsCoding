'use strict';

{
	// https://ko.javascript.info/arrow-functions
	// C:/java/script/vsCoding/MDN/function/arrow.html
	fn_newLine('arrow');

	let group = {
		subject: 'JavaScript',
		students: ['보라', '호진', '지민'],

		showList() {
			//this.students.forEach((student) => console.log(this.subject + ': ' + student));
			this.students.forEach(function (student) {
				console.log(this.subject + ': ' + student);
			}, this); // this를 바인딩하여 사용
		},
	};

	group.showList();
}
