// Task 1 — Check if Number is Positive, Negative, or Zero
// Rules: no Math.sign()
function checkNumber(n) {
  if (n > 0) return "positive";
  else if (n < 0) return "negative";
  else return "zero";
}

// Test cases
console.log(checkNumber(5));    // "positive"
console.log(checkNumber(0));    // "zero"
console.log(checkNumber(-3));   // "negative"
