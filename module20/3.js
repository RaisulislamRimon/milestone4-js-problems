// Practice Problem 3
// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function findOddSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i];
      // console.log(numbers[i]);
    }
  }
  return sum;
}

const numberList = [5, 7, 8, 10, 45, 30];

console.log(findOddSum(numberList));
