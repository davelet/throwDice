// var cwidth = 400;
// var cheight = 300;
var dicex = 20;
var dicey = 50;
var dicewidth = 100;
var diceheight = 100;
var dotrad = 6;

var dx, dy;
var firstturn = true;
var point;

var cxt;

function init() {
	var cxt = document.getElementById("canvas").getContext("2d");
	cxt.font = "bold 25px impact";
	cxt.strokeText("click button to start", 0, 50);
}

function q() {
	window.opener = null;
	window.open('', '_self');
	window.close();
}

function t() {
	var cxt = document.getElementById("canvas").getContext("2d");
	cxt.clearRect(0, 0, 300, 200);
	var sum;
	var ch = 1 + Math.floor(Math.random() * 6);
	sum = ch;
	dx = dicex;
	dy = dicey;
	drawface(ch);
	dx = dicex + 120;
	ch = 1 + Math.floor(Math.random() * 6);
	sum += ch;
	drawface(ch);

	if (firstturn) {
		switch(sum) {
			case 7:
			case 11:
				document.f.outcome.value = "You Win!";
				document.f.pv.value = sum;
				document.f.stage.value = "First Throw";
				break;
			case 2:
			case 3:
			case 12:
				document.f.outcome.value = "You Lose!";
				document.f.pv.value = sum;
				document.f.stage.value = "First Throw";
				break;
			default:
				point = sum;
				document.f.pv.value = point;
				firstturn = false;
				document.f.stage.value = "Need followUp throw.";
				document.f.outcome.value = "";
		}
	} else {
		switch(sum) {
			case point:
				document.f.outcome.value = "You Win!";
				document.f.stage.value = "Back to first throw.";
				document.f.pv.value = sum;
				point = sum;
				firstturn = true;
				break;
			case 7:
				document.f.outcome.value = "You Lose!";
				document.f.stage.value = "Back to first throw.";
				document.f.pv.value = sum;
				point = sum;
				firstturn = true;
				break;
			default:
				document.f.pv.value = sum;
				point = sum;
		}
	}
}

function drawface(n) {
	cxt = document.getElementById("canvas").getContext("2d");
	cxt.lineWidth = 5;
	// cxt.clearRect(dx, dy, dicewidth, diceheight);
	cxt.strokeRect(dx, dy, dicewidth, diceheight);
	cxt.fillStyle = "#096";

	switch(n) {
		case 1:
			Draw1();
			break;
		case 2:
			Draw2();
			break;
		case 3:
			Draw2();
			Draw1();
			break;
		case 4:
			Draw4();
			break;
		case 5:
			Draw4();
			Draw1();
			break;
		case 6:
			Draw4();
			Draw2mid();
			break;
	}
}

function Draw1() {
	var dotx;
	var doty;
	cxt.beginPath();
	dotx = dx + .5 * dicewidth;
	doty = dy + .5 * diceheight;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	cxt.closePath();
	cxt.fill();
}

function Draw2() {
	var dotx;
	var doty;
	cxt.beginPath();
	dotx = dx + 3 * dotrad;
	doty = dy + 3 * dotrad;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + diceheight - 3 * dotrad;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	cxt.closePath();
	cxt.fill();
}

function Draw4() {
	var dotx;
	var doty;
	cxt.beginPath();
	dotx = dx + 3 * dotrad;
	doty = dy + 3 * dotrad;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + diceheight - 3 * dotrad;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	cxt.closePath();
	cxt.fill();
	cxt.beginPath();
	dotx = dx + 3 * dotrad;
	doty = dy + diceheight - 3 * dotrad;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + 3 * dotrad;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	cxt.closePath();
	cxt.fill();
}

function Draw2mid() {
	var dotx;
	var doty;
	cxt.beginPath();
	dotx = dx + 3 * dotrad;
	doty = dy + .5 * diceheight;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + .5 * diceheight;
	cxt.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
	cxt.closePath();
	cxt.fill();
}
