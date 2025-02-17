let numbers = [1, 2, 3, 4, 5];

// Filter out even numbers using filter() method
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0); // Filters even numbers
}

// Map array elements to their squared values using map() method
function squareNumbers(arr) {
  return arr.map(num => num * num); // Squares each number
}

// Compute the sum of array elements using reduce() method
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0); // Sums up the numbers
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15
