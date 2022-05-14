function getRandom(number) {
	let randomNumber = Math.floor(Math.random() * number);

	return randomNumber;
};

$(".guess_box").hover(
	function () {
		alert('a');
	},
	function () {
		alert('b');
	}
);