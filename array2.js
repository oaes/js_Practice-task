let rollNumber = [3, 4, 5, 6, 7, 8, 9, 11, 12];
// console.log(rollNumber);

rollNumber.push(13, 14, 15, 16);
rollNumber.pop();
rollNumber.shift();
rollNumber.unshift(1, 2, 3);

const friends = ["sam", "rshad", "bablu", "anis", "rafiq"];
console.log(friends.includes("anis"));

if (friends.includes("sam")) {
  console.log("party");
} else {
  console.log("no party");
}

const othoba = ["titu", "mithu", "jitu", "setu"];
console.log(othoba);

console.log(friends.indexOf("bablu"));
// console.log(Array.isArray(friends));
// console.log(Array.isArray(others));
// console.log(Array.isArray(emni));

// console.log(friends.join(" _ "));

let another = friends.concat(othoba);

console.log(another.join("_"));
