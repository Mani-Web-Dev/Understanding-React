/** @format */

//// Recursion

function recurrsion(number) {
  console.log(number);
  if (number === 0) return;
  recurrsion(number - 1);
}

recurrsion(5);
