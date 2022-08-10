// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

function convertHourToMinute(hour) {
  let seconds = hour * 60;
  return seconds;
}

const hour = convertHourToMinute(1);
const hour1 = convertHourToMinute(2);
console.log(hour);
const hour2 = convertHourToMinute(2);
console.log(hour1);
