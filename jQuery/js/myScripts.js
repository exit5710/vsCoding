// common
let getRandom = function (number) {
	return Math.floor(Math.random() * number);
};

// blackJack
function Card(name, suit, value) {
	this.name = name;
	this.suit = suit;
	this.value = value;
};

let deck = [
	new Card('Ace', 'Hearts', 11), new Card('Two', 'Hearts', 2), new Card('Three', 'Hearts', 3), new Card('Four', 'Hearts', 4),
	new Card('Five', 'Hearts', 5), new Card('Six', 'Hearts', 6), new Card('Seven', 'Hearts', 7), new Card('Eight', 'Hearts', 8),
	new Card('Nine', 'Hearts', 9), new Card('Ten', 'Hearts', 10), new Card('Jack', 'Hearts', 10), new Card('Queen', 'Hearts', 10), new Card('King', 'Hearts', 10),
	new Card('Ace', 'Diamonds', 11), new Card('Two', 'Diamonds', 2), new Card('Three', 'Diamonds', 3), new Card('Four', 'Diamonds', 4),
	new Card('Five', 'Diamonds', 5), new Card('Six', 'Diamonds', 6), new Card('Seven', 'Diamonds', 7), new Card('Eight', 'Diamonds', 8),
	new Card('Nine', 'Diamonds', 9), new Card('Ten', 'Diamonds', 10), new Card('Jack', 'Diamonds', 10), new Card('Queen', 'Diamonds', 10), new Card('King', 'Diamonds', 10),
	new Card('Ace', 'Clubs', 11), new Card('Two', 'Clubs', 2), new Card('Three', 'Clubs', 3), new Card('Four', 'Clubs', 4),
	new Card('Five', 'Clubs', 5), new Card('Six', 'Clubs', 6), new Card('Seven', 'Clubs', 7), new Card('Eight', 'Clubs', 8),
	new Card('Nine', 'Clubs', 9), new Card('Ten', 'Clubs', 10), new Card('Jack', 'Clubs', 10), new Card('Queen', 'Clubs', 10), new Card('King', 'Clubs', 10),
	new Card('Ace', 'Spades', 11), new Card('Two', 'Spades', 2), new Card('Three', 'Spades', 3), new Card('Four', 'Spades', 4),
	new Card('Five', 'Spades', 5), new Card('Six', 'Spades', 6), new Card('Seven', 'Spades', 7), new Card('Eight', 'Spades', 8),
	new Card('Nine', 'Spades', 9), new Card('Ten', 'Spades', 10), new Card('Jack', 'Spades', 10), new Card('Queen', 'Spades', 10), new Card('King', 'Spades', 10)
];

let useCard = new Array();

let fn_btnDeal = function () {
	$(this).toggle();
	$("#btnHit").toggle();
	$("#btnStick").toggle();

	fn_deal();
};

let fn_btnHit = function () {
	fn_hit();
};

let fn_btnStick = function () {
	$("#hdrResult").html("Stick!").attr("class", "win");
	// $("#result").toggle();
	$(this).hide();
	fn_end();
};

let fn_btnRestart = function () {
	$(this).toggle();
	$("#result").toggle();
	$("#myHand").empty();
	$("#hdrTotal").html("");
	$("#hdrResult").html("");

	useCard.length = 0;
	hand.cards.length = 0;
	hand.currentTotal = 0;

	//$("#btnDeal").show().trigger("click");
	$("#btnDeal").show();
};

let fn_deal = function () {
	fn_hit();
	fn_hit();
};

let fn_hit = function () {
	let goodCard = false;

	do {
		let index = getRandom(52);

		if ($.inArray(index, useCard) == -1) {
			let d = deck[index];
			useCard[useCard.length] = index;
			hand.cards[hand.cards.length] = d;
			let div = $("<div>");

			$("<img>").appendTo(div).attr("src", "../images/blackJack/cards/" + d.suit + "/" + d.name + ".png").hide().fadeIn("slow");
			div.appendTo($("#myHand"));

			goodCard = true;
		}
	} while (!goodCard);
	goodCard = false;

	hand.sumCardTotal();
};

let hand = {
	cards: new Array(),
	currentTotal: 0,
	sumCardTotal: function () {
		this.currentTotal = 0;

		for (let i = 0; i < this.cards.length; i++) {
			let card = this.cards[i];
			this.currentTotal += card.value;
		}

		$("#hdrTotal").html("Total : " + this.currentTotal);

		if (this.currentTotal > 21) {
			fn_end();
			$("#imgResult").attr("src", "../images/blackJack/x2.png").show();
			$("#hdrResult").html("BUST").attr("class", "lose");
		} else if (this.currentTotal == 21) {
			fn_end();
			$("#imgResult").attr("src", "../images/blackJack/check.png").show();
			$("#hdrResult").html("Black Jack!").attr("class", "win");
		} else if (this.currentTotal <= 21 && this.cards.length == 5) {
			fn_end();
			$("#imgResult").attr("src", "../images/blackJack/check.png").show();
			$("#hdrResult").html("Black Jack - 5 card trick!").attr("class", "win");;
		}
	}
};

let fn_end = function () {
	$("#result").toggle();
	$("#btnHit, #btnStick").hide();
	$("#btnRestart").show();
};

// monsterMashup
let faceIdx = [0, 0, 0, 0];

let lightningOne;
let lightningTwo;
let lightningThree;

let fn_startLightning = function () {
	lightningOne = setInterval(function () {
		fn_lightningOne();
	}, 4000);

	lightningTwo = setInterval(function () {
		fn_lightningTwo();
	}, 5000);

	lightningThree = setInterval(function () {
		fn_lightningThree();
	}, 7000);
};

let fn_stopLightning = function () {
	window.clearInterval(lightningOne);
	window.clearInterval(lightningTwo);
	window.clearInterval(lightningThree);
};

let fn_lightningOne = function () {
	$("#lightning1").fadeIn(250).fadeOut(250);
};

let fn_lightningTwo = function () {
	$("#lightning2").fadeIn(250).fadeOut(250);
};

let fn_lightningThree = function () {
	$("#lightning3").fadeIn(250).fadeOut(250);
};

let fn_randomize = function () {
	$(".face").each(function (index) {
		let targetPosition = getRandom(10);
		let currentPosition = faceIdx[index];
		faceIdx[index] = targetPosition;

		if (targetPosition > currentPosition) {
			let moveTo = (targetPosition - currentPosition) * 367;
			$(this).animate({ left: "-=" + moveTo + "px" }, 500);
		} else if (targetPosition < currentPosition) {
			let moveTo = (currentPosition - targetPosition) * 367;
			$(this).animate({ left: "+=" + moveTo + "px" }, 500);
		}
	});
};

let fn_reset = function () {
	$(".face").each(function (index) {
		faceIdx[index] = 0;
		$(this).animate({ left: "0px" }, 500);
	});
};

let fn_head = function () {
	fn_moveMe(0, this);
};

let fn_eyes = function () {
	fn_moveMe(1, this);
};

let fn_nose = function () {
	fn_moveMe(2, this);
};

let fn_mouth = function () {
	fn_moveMe(3, this);
};

let fn_moveMe = function (i, object) {
	if (faceIdx[i] < 9) {
		faceIdx[i]++;
		$(object).animate({ left: "-=367px" }, 500);
	} else {
		faceIdx[i] = 0;
		$(object).animate({ left: "0px" }, 500);
	}
};

// ourMenu
let v = false;
let fish;
let meat;

let fn_vegOn = function () {
	if (v == false) {
		v = true;
		fish = $("li.fish").parent().parent().detach();

		$(".hamburger").replaceWith("<li class='portobello'><em>portobello Mushroom</em></li>");

		$(".meat").after("<li class='tofu'>Tofu</li>");
		meat = $(".meat").detach();

		$(".tofu").parent().parent().addClass("veg_leaf");
	}
};

let fn_restoreMe = function () {
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
	// blackJack
	$("#btnDeal").click(fn_btnDeal);
	$("#btnHit").click(fn_btnHit);
	$("#btnStick").click(fn_btnStick);
	$("#btnRestart").click(fn_btnRestart);

	// monsterMashup
	if (document.title == "monster mashup") {
		fn_startLightning();
		window.onfocus = fn_startLightning;
		window.onblur = fn_stopLightning;
	};

	$("#btnRandom").click(fn_randomize);
	$("#btnReset").click(fn_reset);

	$("#head").click(fn_head);
	$("#eyes").click(fn_eyes);
	$("#nose").click(fn_nose);
	$("#mouth").click(fn_mouth);

	// ourMenu
	$("#vegOn").click(fn_vegOn);
	$("#restoreMe").click(fn_restoreMe);
});