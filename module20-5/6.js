// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

function convertFahrenheitToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const fahrenheitTemp = convertFahrenheitToCelcius(86);
console.log(fahrenheitTemp);
