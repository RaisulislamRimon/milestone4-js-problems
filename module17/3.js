// #Practice Problem 1

// You are given an array:
//  var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’

const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana"));
fruits[1] = "Mango";
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("Watermelon"));
console.log(fruits);
