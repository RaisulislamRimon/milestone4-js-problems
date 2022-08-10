// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.
// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// Output:
// 71.04

const marks = [75.25, 65, 80, 35.45, 99.5];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log(sum / marks.length);
console.log(Math.round((sum / marks.length) * 100) / 100);
console.log((sum / marks.length).toFixed(2));
