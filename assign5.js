//All 5 problem task solution is here....

//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  // Your code here
  if (typeof discount !== "number" || typeof currentPrice !== "number") {
    return "Invalid";
  } else if (discount > 100 || discount < 0) {
    return "Invalid";
  } else {
    let count = (currentPrice * discount) / 100;
    let final = currentPrice - count;
    return final.toFixed(3);
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  // Your code here
  const name = "ph-";
  if (typeof otp !== "string") {
    return "Invalid";
  } else if (name.startsWith("ph-") === false) {
    return "Invalid";
  } else if (otp.length === 8) {
    return true;
  } else {
    return false;
  }

  return otp;
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  //write your code here
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

//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  // Your code here
  if (typeof str !== "string" || str.trim().length === 0) {
    return "Invalid";
  }

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
