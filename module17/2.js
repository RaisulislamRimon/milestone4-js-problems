// প্রাকটিস প্রব্লেম-২:

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

const signalGreen = "green";

if (signalGreen === "green") {
  console.log("Cross the road");
} else if (signalGreen === "yellow") {
  console.log("Prepare to cross/Stop");
} else if (signalGreen === "red") {
  console.log("Stop");
}

const signalYellow = "yellow";

if (signalYellow === "green") {
  console.log("Cross the road");
} else if (signalYellow === "yellow") {
  console.log("Prepare to cross/Stop");
} else if (signalYellow === "red") {
  console.log("Stop");
}

const signalRed = "red";

if (signalRed === "green") {
  console.log("Cross the road");
} else if (signalRed === "yellow") {
  console.log("Prepare to cross/Stop");
} else if (signalRed === "red") {
  console.log("Stop!Dont cross. Danger ahead");
}
