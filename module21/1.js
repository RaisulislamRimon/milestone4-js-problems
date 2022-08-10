// প্রাকটিস প্রব্লেম- ৫ খানা

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

const numArray = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

let smallNum = numArray[0];
// let newArray = [];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] < smallNum) {
    smallNum = numArray[i];
    // console.log(smallNum);
  }
}
console.log(smallNum);
