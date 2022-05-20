// comon
let getRandom = function (number) {
	let randomNumber = Math.floor(Math.random() * number);

	return randomNumber;
};

// ourMenu
let v = false;
let fish;
let meat;

let vegOn = function () {
	if (v == false) {
		v = true;
		fish = $("li.fish").parent().parent().detach();

		$(".hamburger").replaceWith("<li class='portobello'><em>portobello Mushroom</em></li>");

		$(".meat").after("<li class='tofu'>Tofu</li>");
		meat = $(".meat").detach();

		$(".tofu").parent().parent().addClass("veg_leaf");
	}
};

let restoreMe = function () {
	if (v == true) {
		v = false;

		$(".menu_entrees li").first().before(fish);

		$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");

		$(".tofu").parent().parent().removeClass("veg_leaf");
		$(".tofu").each(function (index) {
			$(this).replaceWith(meat[index]);
		});
	}
};

$(document).ready(function () {

	// ourMenu
	$("#vegOn").click(vegOn);
	$("#restoreMe").click(restoreMe);
});;