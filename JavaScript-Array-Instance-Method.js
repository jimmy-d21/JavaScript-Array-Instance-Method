// 1. Array Static Methods
// Array.isArray()
// Checks whether the passed value is an Array instance.

// Example 1: Checking an array literal
console.log(Array.isArray([1, 2, 3]));
// Output:
// true

// Example 2: Checking non-array values
console.log(Array.isArray({ name: "Alice" }));
// Output:
// false

// Example 3: Checking string values
console.log(Array.isArray("Hello"));
// Output:
// false
