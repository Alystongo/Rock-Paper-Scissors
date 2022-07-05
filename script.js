/** Script Rules Original **/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/** Script Rules Bonus **/
function openNav_bonus() {
  document.getElementById("myNav_bonus").style.width = "100%";
}

function closeNav_bonus() {
  document.getElementById("myNav_bonus").style.width = "0%";
}

/** Troca de Mode **/
function gameOriginal() {
	window.location.href = "bonus.html";
	
}

function gameBonus() {
	window.location.href = "index.html";
}