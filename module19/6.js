// —--------------

// Extra প্রাকটিস চ্যালেঞ্জ (৪ টি প্রব্লেম):

// —--------------
// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function multiplicationTable(num) {
  for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}

multiplicationTable(13);
