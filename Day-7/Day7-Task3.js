// Task 3 — Return First and Last Element
// Rules: no destructuring, no .shift()/.pop()
function firstAndLast(arr) {
  return {
    first: arr[0],
    last: arr[arr.length - 1],
  };
}

// Test cases
console.log(firstAndLast([10, 20, 30]));  // { first: 10, last: 30 }
console.log(firstAndLast([1]));           // { first: 1, last: 1 }
console.log(firstAndLast([]));            // { first: undefined, last: undefined }
