// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

function findSmallest(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

const smallest = findSmallest(2, 3, 5);
console.log(smallest);
const smallest1 = findSmallest(2, 3, 1);
console.log(smallest1);
