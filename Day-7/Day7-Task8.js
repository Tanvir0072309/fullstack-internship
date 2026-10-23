// Task 8 — Hard: Merge & Sort Two Arrays Without Built-in Sort
// Rules: no .sort(), no recursion, no Set, no flatten()
// Approach: merge manually, then bubble sort manually
function mergeAndSort(arr1, arr2) {
  // 1) Merge manually
  const merged = [];
  for (let i = 0; i < arr1.length; i++) merged.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) merged.push(arr2[i]);

  // 2) Bubble sort manually (ascending)
  for (let i = 0; i < merged.length - 1; i++) {
    for (let j = 0; j < merged.length - 1 - i; j++) {
      if (merged[j] > merged[j + 1]) {
        const temp = merged[j];
        merged[j] = merged[j + 1];
        merged[j + 1] = temp;
      }
    }
  }

  return merged;
}

// Test cases
console.log(mergeAndSort([3, 1, 4], [2, 5]));      // [1, 2, 3, 4, 5]
console.log(mergeAndSort([10, 7], [8, 6, 9]));     // [6, 7, 8, 9, 10]
console.log(mergeAndSort([], [1, 2]));             // [1, 2]
