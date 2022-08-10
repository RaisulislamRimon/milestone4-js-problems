// #Practice Problem 2

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else

const marks = [85, 66, 95, 56, 40];

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 80) {
    console.log(i, "A grade");
  } else if (marks[i] >= 60) {
    console.log(i, "B grade");
  } else if (marks[i] >= 50) {
    console.log(i, "C grade");
  } else if (marks[i] >= 40) {
    console.log(i, "D grade");
  } else {
    console.log(i, "F grade");
  }
}
