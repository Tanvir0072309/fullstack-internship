// Task 5 — Multiply All Items in Array
// Rules: no reduce()
function multiplyAll(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }
  return result;
}

// Test cases
console.log(multiplyAll([1, 2, 3]));  // 6
console.log(multiplyAll([5]));        // 5
console.log(multiplyAll([]));         // 1 (empty product rule)
