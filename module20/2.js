// Practice Problem 2
// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function findLeapYear(year) {
  var newLeapYear = [];
  for (var i = 0; i < year.length; i++) {
    if ((year[i] % 4 === 0 && year[i] % 100 !== 0) || year[i] % 400 === 0) {
      newLeapYear.push(year[i]);
    }
  }
  return newLeapYear;
}

console.log(findLeapYear([2023, 2024, 2025, 2028, 2030])); // [2024,2028]
