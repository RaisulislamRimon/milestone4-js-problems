// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

function convertCelciusToFahrenheit(celcius) {
  return celcius * 1.8 + 32;
}

const celciusTemp = convertCelciusToFahrenheit(30);
console.log(celciusTemp);
