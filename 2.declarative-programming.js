/** @format */

//---------------------Declarative Programming that react uses ---------------------//
const countApp = {
  getCount: () => {
    const countElement = document.getElementById("countElement");
    return Number(countElement.textContent);
  },
  setCount: (val) => {
    const countElement = document.getElementById("countElement");
    countElement.textContent = val;
  },
};

function setCount() {
  let count = countApp.getCount();
  console.log(count);

  if (count >= 5) {
    countApp.setCount(0);
  } else {
    countApp.setCount(count + 1);
  }
}
counterButton.addEventListener("click", setCount);
