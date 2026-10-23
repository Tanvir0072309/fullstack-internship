// Task 6 — Find Missing Number (1..N with one missing)
// Rules: no sorting, no Sets
// Logic: N = arr.length + 1, sum formula = N*(N+1)/2, missing = expected - actual
function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }

  return expectedSum - actualSum;
}

// Test cases
console.log(findMissing([1, 2, 4, 5]));   // 3
console.log(findMissing([2, 3, 1, 5]));   // 4
console.log(findMissing([1]));            // 2 (assuming N=2)
