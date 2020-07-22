
//THIS WORKS - SO I KNOW I CAN HIDE BACK/SHOW FRONT THE REST OF THE CARDS
document.querySelector("#c1back").addEventListener("click", function() {
  document.querySelector("#c1back").classList.add("card-back-hide");
  document.querySelector("#c1front").style.display = "block";
});
document.querySelector("#c2back").addEventListener("click", function() {
  document.querySelector("#c2back").classList.add("card-back-hide");
  document.querySelector("#c2front").style.display = "block";
});
document.querySelector("#c3back").addEventListener("click", function() {
  document.querySelector("#c3back").classList.add("card-back-hide");
  document.querySelector("#c3front").style.display = "block";
});
document.querySelector("#c4back").addEventListener("click", function() {
  document.querySelector("#c4back").classList.add("card-back-hide");
  document.querySelector("#c4front").style.display = "block";
});
document.querySelector("#c5back").addEventListener("click", function() {
  document.querySelector("#c5back").classList.add("card-back-hide");
  document.querySelector("#c5front").style.display = "block";
});
document.querySelector("#c6back").addEventListener("click", function() {
  document.querySelector("#c6back").classList.add("card-back-hide");
  document.querySelector("#c6front").style.display = "block";
});
document.querySelector("#c7back").addEventListener("click", function() {
  document.querySelector("#c7back").classList.add("card-back-hide");
  document.querySelector("#c7front").style.display = "block";
});
document.querySelector("#c8back").addEventListener("click", function() {
  document.querySelector("#c8back").classList.add("card-back-hide");
  document.querySelector("#c8front").style.display = "block";
});
document.querySelector("#mback").addEventListener("click", function() {
  document.querySelector("#mback").classList.add("card-back-hide");
  document.querySelector("#mfront").style.display = "block";
});

//THIS WORKS SO I KNOW I CAN SHOW STATS BY CLICKING THE FRONT OF CARD
document.querySelector("#c1front").addEventListener("click", function() {
  document.querySelector("#c1-stats").style.display = "block";
});
document.querySelector("#c2front").addEventListener("click", function() {
  document.querySelector("#c2-stats").style.display = "block";
});
document.querySelector("#c3front").addEventListener("click", function() {
  document.querySelector("#c3-stats").style.display = "block";
});
document.querySelector("#c4front").addEventListener("click", function() {
  document.querySelector("#c4-stats").style.display = "block";
});
document.querySelector("#c5front").addEventListener("click", function() {
  document.querySelector("#c5-stats").style.display = "block";
});
document.querySelector("#c6front").addEventListener("click", function() {
  document.querySelector("#c6-stats").style.display = "block";
});
document.querySelector("#c7front").addEventListener("click", function() {
  document.querySelector("#c7-stats").style.display = "block";
});
document.querySelector("#c8front").addEventListener("click", function() {
  document.querySelector("#c8-stats").style.display = "block";
});
document.querySelector("#mfront").addEventListener("click", function() {
  document.querySelector("#mission-text").style.display = "block";
});

//THIS WORKS SO I KNOW I CAN CLOSE STATS AND SHOW BACK OF CARD
document.querySelector("#c1X").addEventListener("click", function() {
  document.querySelector("#c1-stats").style.display = "";
  document.querySelector("#c1front").style.display = "";
  document.querySelector("#c1back").classList.remove("card-back-hide");
});
document.querySelector("#c2X").addEventListener("click", function() {
  document.querySelector("#c2-stats").style.display = "";
  document.querySelector("#c2front").style.display = "";
  document.querySelector("#c2back").classList.remove("card-back-hide");
});
document.querySelector("#c3X").addEventListener("click", function() {
  document.querySelector("#c3-stats").style.display = "";
  document.querySelector("#c3front").style.display = "";
  document.querySelector("#c3back").classList.remove("card-back-hide");
});
document.querySelector("#c4X").addEventListener("click", function() {
  document.querySelector("#c4-stats").style.display = "";
  document.querySelector("#c4front").style.display = "";
  document.querySelector("#c4back").classList.remove("card-back-hide");
});
document.querySelector("#c5X").addEventListener("click", function() {
  document.querySelector("#c5-stats").style.display = "";
  document.querySelector("#c5front").style.display = "";
  document.querySelector("#c5back").classList.remove("card-back-hide");
});
document.querySelector("#c6X").addEventListener("click", function() {
  document.querySelector("#c6-stats").style.display = "";
  document.querySelector("#c6front").style.display = "";
  document.querySelector("#c6back").classList.remove("card-back-hide");
});
document.querySelector("#c7X").addEventListener("click", function() {
  document.querySelector("#c7-stats").style.display = "";
  document.querySelector("#c7front").style.display = "";
  document.querySelector("#c7back").classList.remove("card-back-hide");
});
document.querySelector("#c8X").addEventListener("click", function() {
  document.querySelector("#c8-stats").style.display = "";
  document.querySelector("#c8front").style.display = "";
  document.querySelector("#c8back").classList.remove("card-back-hide");
});
document.querySelector("#mX").addEventListener("click", function() {
  document.querySelector("#mission-text").style.display = "";
  document.querySelector("#mfront").style.display = "";
  document.querySelector("#mback").classList.remove("card-back-hide");
});
