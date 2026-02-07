// assignment-1

/*function signature/sample */
function newPrice(currentPrice, discount) {
  // You have to write your code here
  if (typeof discount !== "number" || typeof currentPrice !== "number") {
    return "Invalid";
  } else if (discount > 100 || discount < 0) {
    return "Invalid";
  } else {
    let count = (currentPrice * discount) / 100;
    let final = currentPrice - count;
    return final.toFixed(3);
  }

  // let count = (currentPrice * discount) / 100;
  // let final = currentPrice - count;
  // return final.toFixed(3);
}

console.log(newPrice(1000, 20));
