// common
let getRandom = function (number) {
	let randomNumber = Math.floor(Math.random() * number);

	return randomNumber;
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

let btnDeal = function () {
	$(this).toggle();
	$("#btnHit").toggle();
	$("#btnStick").toggle();

	deal();
};

let btnHit = function () {
	hit();
};

let btnStick = function () {
	$("#hdrResult").html("Stick!").attr("class", "win");
	// $("#result").toggle();
	$(this).hide();
	end();
};

let btnRestart = function () {
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

let deal = function () {
	hit();
	hit();
};

let hit = function () {
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
			end();
			$("#imgResult").attr("src", "../images/blackJack/x2.png").show();
			$("#hdrResult").html("BUST").attr("class", "lose");
		} else if (this.currentTotal == 21) {
			end();
			$("#imgResult").attr("src", "../images/blackJack/check.png").show();
			$("#hdrResult").html("Black Jack!").attr("class", "win");
		} else if (this.currentTotal <= 21 && this.cards.length == 5) {
			end();
			$("#imgResult").attr("src", "../images/blackJack/check.png").show();
			$("#hdrResult").html("Black Jack - 5 card trick!").attr("class", "win");;
		}
	}
};

let end = function () {
	$("#result").toggle();
	$("#btnHit, #btnStick").hide();
	$("#btnRestart").show();
};

// monsterMashup
let lightningOne = function (time) {
	$("#lightning1").fadeIn(250).fadeOut(250);
	setTimeout(function () {
		lightningOne(time);
	}, time);
};

let lightningTwo = function (time) {
	$("#lightning2").fadeIn(250).fadeOut(250);
	setTimeout(function () {
		lightningTwo(time);
	}, time);
};

let lightningThree = function (time) {
	$("#lightning3").fadeIn(250).fadeOut(250);
	setTimeout(function () {
		lightningThree(time);
	}, time);
};

let headCount = 0;
let eyesCount = 0;
let noseCount = 0;
let mouthCount = 0;

let animate = function (element, left) {
	$(element).animate({ left: left }, 500);
};

let head = function () {
	if (headCount < 9) {
		headCount++;
		animate(this, "-=367px");
	} else {
		headCount = 0;
		animate(this, "0px");
	}
};

let eyes = function () {
	if (eyesCount < 9) {
		eyesCount++;
		animate(this, "-=367px");
	} else {
		eyesCount = 0;
		animate(this, "0px");
	}
};

let nose = function () {
	if (noseCount < 9) {
		noseCount++;
		animate(this, "-=367px");
	} else {
		noseCount = 0;
		animate(this, "0px");
	}
};

let mouth = function () {
	if (mouthCount < 9) {
		mouthCount++;
		animate(this, "-=367px");
	} else {
		mouthCount = 0;
		animate(this, "0px");
	}
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
	// blackJack
	$("#btnDeal").click(btnDeal);
	$("#btnHit").click(btnHit);
	$("#btnStick").click(btnStick);
	$("#btnRestart").click(btnRestart);

	// monsterMashup
	lightningOne(4000);
	lightningTwo(5000);
	lightningThree(7000);

	$("#head").click(head);
	$("#eyes").click(eyes);
	$("#nose").click(nose);
	$("#mouth").click(mouth);

	// ourMenu
	$("#vegOn").click(vegOn);
	$("#restoreMe").click(restoreMe);
});