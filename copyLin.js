// const calculateMarks = (scores) => {
//   const { right, wrong, skip } = scores;
//   const total = right * 1 - wrong * 0.5 - skip * 0;
//   return total;
// };

// const results = { right: 67, wrong: 23, skip: 10 };
// console.log(calculateMarks(results));

// function finalScore(omr) {
//   if (
//     typeof omr !== "object" ||
//     omr === null ||
//     typeof omr.right !== "number" ||
//     typeof omr.wrong !== "number" ||
//     typeof omr.skip !== "number" ||
//     omr.skip === 0
//   ) {
//     return "Invalid";
//   }

//   const { right, wrong, skip } = omr;
//   const total = right * 1 - wrong * 0.5 - skip * 0;

//   return Math.round(total);
// }

// console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
// console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
// console.log(finalScore(["Raj"]));
// console.log(finalScore("!@#"));
// console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
// console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));

function gonoVote(array) {
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
    return "True"; // or true
  } else if (naVote > haVote) {
    return "False"; // or false
  } else {
    return "Equal";
  }
}

// Testing the cases:
//              // "Invalid"console.log(gonoVote(["ha", "na", "ha", "na"])); // "Draw"
// console.log(gonoVote(["ha", "na", "na"]));       // "NO"
// console.log(gonoVote(["ha", "ha", "ha", "na"])); // "YES"
// console.log(gonoVote("ha, na"));

console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));
