// //problem 4
// function gonoVote(array) {
//   //write your code here
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }

//   let haVote = 0;
//   let naVote = 0;

//   for (let vote of array) {
//     if (vote === "ha") {
//       haVote++;
//     } else if (vote === "na") {
//       naVote++;
//     }
//   }

//   if (haVote > naVote) {
//     return "True";
//   } else if (naVote > haVote) {
//     return "False";
//   } else {
//     return "Equal";
//   }
// }

// console.log(gonoVote(["ha", "na", "ha", "na"]));
// console.log(gonoVote(["ha", "na", "na"]));
// console.log(gonoVote(["ha", "ha", "ha", "na"]));
// console.log(gonoVote("ha, na"));
// console.log(gonoVote(12345));

function gonoVote(array) {
  //write your code here
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let haVote = 0;
  let naVote = 0;

  for (let vote of array) {
    if (vote === "ha") {
      haVote++;
    } else if (vote === "na") {
      naVote++;
    }
  }

  if (haVote > naVote) {
    return true;
  } else if (naVote > haVote) {
    return false;
  } else {
    return "equal";
  }
}

console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));
