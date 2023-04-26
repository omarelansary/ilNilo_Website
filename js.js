"use strict";

var sloganElementlg = document.getElementById("sloganlg");
var sloganElement = document.getElementById("slogan");

// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-red";
}

var increment,
  incrementlg = 0;
var text = "Del Gusto Italiano";
function sloganText() {
  for (var i = 0; i < text.length; i++) {
    sloganElement.textContent += text[i];
  }
}
// function sloganText() {
//   setTimeout(function () {
//     for (var i = 0; i < text.length; i++) {
//       sloganElement.textContent += text[i];
//     }
//   }, 200);

//   //sloganElementlg.textContent+=text[i];
// }
// function typeWriter() {
//   if (increment < text.length) {
//     sloganElement.innerHTML += text.charAt(increment);
//     increment++;
//     setTimeout(typeWriter, 200);
//   }
// }

// setInterval(function(){
//     if (increment<text.length){
//         sloganElement.textContent+=text[increment];
//         increment++;
//     }
//     else
//     {increment=0;
//      sloganElement.textContent="";}
// }, 200);

// setInterval(function(){
//     if (incrementlg<text.length){
//         sloganElementlg.textContent+=text[incrementlg];
//         incrementlg++;
//     }
//     else
//     {incrementlg=0;
//      sloganElementlg.textContent="";}
// }, 200);

//document.getElementById("myLink").click();
