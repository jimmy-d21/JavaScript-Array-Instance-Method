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

// Array.from()
// Creates a new Array instance from an array-like or iterable object.

// Example 1: Converting a String to an Array
const chars = Array.from("JS");
console.log(chars);
// Output:
// ["J", "S"]

// Example 2: Converting a Set to an Array
const set = new Set([1, 2, 2, 3]);
console.log(Array.from(set));
// Output:
// [1, 2, 3]

// Example 3: Using the optional mapping function
const doubled = Array.from([1, 2, 3], (x) => x * 2);
console.log(doubled);
// Output:
// [2, 4, 6]

// Array.fromAsync()
// Creates a new Array instance from an async iterable, iterable, or array-like object.

// Example 1: Converting an async generator to an Array
async function* generate() {
  yield 1;
  yield 2;
}

(async () => {
  const result = await Array.fromAsync(generate());
  console.log(result);
})();
// Output:
// [1, 2]

// Example 2: Converting an array of Promises
(async () => {
  const promises = [Promise.resolve(10), Promise.resolve(20)];
  const result = await Array.fromAsync(promises);
  console.log(result);
})();
// Output:
// [10, 20]
