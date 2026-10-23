// Task 7 — Recursion: Reverse a String
// Rules: no loops, no .reverse(), no array conversions
function reverseString(str) {
  // Base case: empty or single char
  if (str.length <= 1) return str;

  // Last char + reverse of the rest
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

// Test cases
console.log(reverseString("abc"));    // "cba"
console.log(reverseString("hello"));  // "olleh"
console.log(reverseString(""));       // ""
