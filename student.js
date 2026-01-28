/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let studentOne = 87;
let studentTwo = 67;
let studentThree = 55;
let studentFour = 34;

if (studentOne < 90 - 100) {
  console.log("A Grade");
}
if (studentTwo < 70 - 79) {
  console.log("B Grade");
}
if (studentThree < 60 - 69) {
  console.log("D Grade");
} else if (studentFour > 0 - 59) {
  console.log("You are failed");
}
