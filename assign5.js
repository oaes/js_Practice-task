//pblm 5
// function analyzeText(str) {
//   // Your code here
//   //   if (typeof str !== "object" && typeof str !== "number") {
//   //     return "good";
//   //   }
//   const token = str.split(" ");
//   const totalToken = token.length;
//   const longWords = token.join(" ");

//   return {
//     totalToken: totalToken,
//     sentence: str,
//     longWords: longWords,
//   };
// }
function analyzeText(str) {
  if (typeof str !== "string" && str.length === 0) {
    return "Invalid";
  }

  // if (str.trim().length === 0) {
  //   return "Invalid";
  // }

  const tokens = str.trim().split(/\s+/);
  const token = tokens.length;

  let letterCount = str.replace(/\s+/g, "").length;

  const longwords = tokens.filter((word) => word.length > 4);
  let longWord = "";

  for (let word of tokens) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return {
    longwords: longWord,
    token: letterCount,
  };
}

console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));
console.log(analyzeText("Programming is fun"));
console.log(analyzeText("A quick brown fox"));
console.log(analyzeText(" "));
