// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function lowerCase(name) {
  return name.toLowerCase();
}

const personNameInUpperCase = lowerCase("RAJU");

console.log(personNameInUpperCase);
