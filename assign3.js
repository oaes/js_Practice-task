//problem 3

function finalScore(omr) {
  if (
    typeof omr !== "object" ||
    omr === null ||
    typeof omr.right !== "number" ||
    typeof omr.wrong !== "number" ||
    typeof omr.skip !== "number" ||
    omr.skip === 0
  ) {
    return "Invalid";
  }

  const { right, wrong, skip } = omr;
  const total = right * 1 - wrong * 0.5 - skip * 0;

  return Math.round(total);
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore(["Raj"]));
console.log(finalScore("!@#"));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
