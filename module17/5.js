// #Practice Problem 3

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
const num1 = 13;
const num2 = 79;
const num3 = 45;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal

const side1 = 9;
const side2 = 8;
const side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("Isosceles");
} else {
  console.log("Not Isosceles");
}
