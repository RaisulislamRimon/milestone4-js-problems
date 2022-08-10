// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।

// Calculate simple interest
function calculateInterest(principal, rate, time) {
  const interest = (principal * rate * time) / 100;
  return interest;
}

let principal = 15;
let time = 12;
let rate = 12;

// formula for simple interest is:
// let simpleInterest = (principal * time * rate) / 100;

// Output
console.log(calculateInterest(principal, rate, time));
