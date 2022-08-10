// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function grade(marks) {
  if (marks >= 90 && marks <= 100) {
    return "A+";
  } else if (marks >= 80 && marks <= 89) {
    return "A";
  } else if (marks >= 70 && marks <= 79) {
    return "B";
  } else if (marks >= 60 && marks <= 69) {
    return "C";
  } else if (marks >= 50 && marks <= 59) {
    return "D";
  } else if (marks >= 40 && marks <= 49) {
    return "E";
  } else if (marks >= 0 && marks <= 39) {
    return "F";
  } else {
    return "Invalid Marks";
  }
}

console.log(grade(100));
console.log(grade(70));
