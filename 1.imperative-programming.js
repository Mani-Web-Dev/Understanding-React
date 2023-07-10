/** @format */

//--------------------- Imperative Programming -------------------//
const countElement = document.getElementById("countElement");
const counterButton = document.getElementById("counterButton");

function setCount() {
  let count = Number(countElement.innerHTML);
  count = count + 1;
  countElement.innerHTML = count;
}
counterButton.addEventListener("click", setCount);
