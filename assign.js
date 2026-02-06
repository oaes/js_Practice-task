// assignment-1

/*function signature/sample */
function newPrice(currentPrice, discount) {
  // You have to write your code here
  // if (typeof currentPrice !== "number" || discount !== "number") {
  //   ("Invalid");
  // } else if (discount < 0 && discount > 100) {
  //   ("Invalid");
  //   let count = (currentPrice * discount) / 100;
  //   let final = currentPrice - count;
  //   return final.toFixed(3);
  // }

  let count = (currentPrice * discount) / 100;
  let final = currentPrice - count;
  return final.toFixed(3);
}

console.log(newPrice(2000, 15));
