const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
const squares = numbers.map(function(number) {
  return number * number;
});

console.log(squares); // [1, 4, 9, 16, 25]

// Arrow Function Example:
// Using map with an arrow function
const doubles = numbers.map(number => number * 2);

console.log(doubles); // [2, 4, 6, 8, 10]



// map function for binary:
function binary(x){
    return x.toString(2);
}
const output = arr.map(binary);

console.log(output);

// Mapping each and every value to another value and creating an array and returning output''
// Second method: array.map(callback(currentValue, index, array), thisArg);

const output1 = arr.map((x) => x.toString(2));

console.log(output1);