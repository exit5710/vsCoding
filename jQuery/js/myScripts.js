// common
const getRandom = function (number) {
	return Math.floor(Math.random() * number);
};

const getDate = function () {
	const date = new Date();
	let year = date.getFullYear();
	let month = zeroAdd(date.getMonth() + 1);
	let day = zeroAdd(date.getDate());

	return year + "-" + month + "-" + day;
};

const getTime = function (type) {
	const date = new Date();

	//A.M. Ante meridiem, P.M. Post meridiem
	let meridiem = "";
	let hours = date.getHours();
	let minutes = zeroAdd(date.getMinutes());
	let seconds = zeroAdd(date.getSeconds());

	if (type == 12) {
		(hours < 12) ? meridiem = "AM " : meridiem = "PM ";
		hours = zeroAdd(hours - 12);
	} else {
		hours = zeroAdd(hours);
	}

	return meridiem + hours + ":" + minutes + ":" + seconds;
};

const zeroAdd = function (number) {
	number = (number < 10) ? "0" + number : number;

	return number;
};

// blackJack
function Card(name, suit, value) {
	this.name = name;
	this.suit = suit;
	this.value = value;
};

const deck = [
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

const useCard = new Array();

const fn_btnDeal = function () {
	$(this).toggle();
	$("#btnHit").toggle();
	$("#btnStick").toggle();

	fn_deal();
};

const fn_btnHit = function () {
	fn_hit();
};

const fn_btnStick = function () {
	$("#hdrResult").html("Stick!").attr("class", "win");
	// $("#result").toggle();
	$(this).hide();
	fn_end();
};

const fn_btnRestart = function () {
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

const fn_deal = function () {
	fn_hit();
	fn_hit();
};

const fn_hit = function () {
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

const hand = {
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

const fn_end = function () {
	$("#result").toggle();
	$("#btnHit, #btnStick").hide();
	$("#btnRestart").show();
};

// monsterMashup
let faceIdx = [0, 0, 0, 0];

let lightningOne;
let lightningTwo;
let lightningThree;

const fn_startLightning = function () {
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

const fn_stopLightning = function () {
	window.clearInterval(lightningOne);
	window.clearInterval(lightningTwo);
	window.clearInterval(lightningThree);
};

const fn_lightningOne = function () {
	$("#lightning1").fadeIn(250).fadeOut(250);
};

const fn_lightningTwo = function () {
	$("#lightning2").fadeIn(250).fadeOut(250);
};

const fn_lightningThree = function () {
	$("#lightning3").fadeIn(250).fadeOut(250);
};

const fn_randomize = function () {
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

const fn_reset = function () {
	$(".face").each(function (index) {
		faceIdx[index] = 0;
		$(this).animate({ left: "0px" }, 500);
	});
};

const fn_head = function () {
	fn_moveMe(0, this);
};

const fn_eyes = function () {
	fn_moveMe(1, this);
};

const fn_nose = function () {
	fn_moveMe(2, this);
};

const fn_mouth = function () {
	fn_moveMe(3, this);
};

const fn_moveMe = function (i, object) {
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

const fn_vegOn = function () {
	if (v == false) {
		v = true;
		fish = $("li.fish").parent().parent().detach();

		$(".hamburger").replaceWith("<li class='portobello'><em>portobello Mushroom</em></li>");

		$(".meat").after("<li class='tofu'>Tofu</li>");
		meat = $(".meat").detach();

		$(".tofu").parent().parent().addClass("veg_leaf");
	}
};

const fn_restoreMe = function () {
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

// cryptid sighting
const fn_cryptidSighting = function () {
	/*

	$("#datepicker").datepicker({
		showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
		, dateFormat: 'yy-mm-dd' //Input Display Format 변경
		, showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		, showMonthAfterYear: true //년도 먼저 나오고, 뒤에 월 표시
		, changeMonth: true //콤보박스에서 월 선택 가능
		, changeYear: true //콤보박스에서 년 선택 가능
		, nextText: "다음달"
		, prevText: "이전달"
		, buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
		, buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
		, yearSuffix: "년&nbsp;&nbsp;" //달력의 년도 부분 뒤에 붙는 텍스트
		, monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
		, monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip 텍스트
		, dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 부분 텍스트
		, dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 부분 Tooltip 텍스트
		, minDate: "-2Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
		, maxDate: "+2Y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후) 
	});
	//From의 초기값을 오늘 날짜로 설정
	$('#datepicker').datepicker('setDate', 'today');
	//To의 초기값을 내일로 설정
	//$('#datepicker2').datepicker('setDate', '+1D');

	$("#type_select").buttonset();

	$("#slide_dist").slider({
		value: 0,
		min: 0,
		max: 100,
		step: 5,
		slide: function (event, ui) {
			$("#distance").val(ui.value);
		}
	});
	$("#distance").val($("#slide_dist").slider("value"));

	$("#slide_weight").slider({
		value: 0,
		min: 0,
		max: 5000,
		step: 5,
		slide: function (event, ui) {
			$("#weight").val(ui.value);
		}
	});
	$("#weight").val($("#slide_weight").slider("value"));

	$("#slide_height").slider({
		value: 0,
		min: 0,
		max: 20,
		step: 1,
		slide: function (event, ui) {
			$("#height").val(ui.value);
		}
	});
	$("#height").val($("#slide_height").slider("value"));

	*/
};

$(document).ready(function () {
	// cryptid sighting
	fn_cryptidSighting();

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






// const fn_getXMLRacers = function () {
// 	const xhr = new XMLHttpRequest();
// 	xhr.addEventListener("readystatechange", function () {
// 		if (this.readyState === 4) {
// 			$("#finishers_m").empty();
// 			$("#finishers_f").empty();
// 			$("#finishers_all").empty();

// 			$(this.responseText).find("runner").each(function () {
// 				let info = "<li>Name: " + $(this).find('fname').text() + " " + $(this).find('lname').text() + ". Time: " + $(this).find('time').text() + "</li>";
// 				if ($(this).find("gender").text() == "m") {
// 					$("#finishers_m").append(info);
// 				} else if ($(this).find("gender").text() == "f") {
// 					$("#finishers_f").append(info);
// 				}

// 				$("#finishers_all").append(info);
// 			});
// 		}
// 	});

// 	const send = function () {
// 		xhr.open("GET", "../xml/finishers.xml");
// 		xhr.send();
// 	};

// 	send();
// };

// $('#addRunner').submit(function () {
// 	let data = $("#addRunner :input").serializeArray();
// 	console.log(data);

// 	$.post($("#addRunner").attr("action"), data, function (json) {
// 		if (json.status == "fail") {
// 			alert(json.message);
// 		}

// 		if (json.status == "success") {
// 			alert(json.message);
// 			fn_clearInputs();
// 		}
// 	}, "json");

// 	return false;
// });

/*
const getHen = () =>
new Promise((resolve, reject) => {
	setTimeout(() => resolve('A'), 1000);
});

const getEgg = hen =>
new Promise((resolve, reject) => {
	setTimeout(() => resolve(`${hen} => B`), 1000);
});

const cook = egg =>
new Promise((resolve, reject) => {
	setTimeout(() => resolve(`${egg} => C`), 1000);
});

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
*/

/*
const promise = new Promise(function (resolve, reject) {
		resolve('a');
	});

	promise.then(function (str) {
		console.log(str);
	});
*/