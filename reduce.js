/* Reduce is Basically used at a place where you have to take all the elements of an Array 
   and come up with a single value out of them */
const arr = [5, 8, 9, 1, 4]

// Non-Functional Way of writting code:
function findSum(arr) {
    let sum = 0;
    for (i = 0; i <arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// Non-Functional Way of writting code:(Max Element)
function findMax(arr) {
    let max = 0;
    for (i = 0; i <arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));


// Functional Way of writting code:(Sum of Elements)
const output1= arr.reduce(function (acc, curr) {               //(Accumlater, Current Element)
    acc = acc + curr;
    return acc;
}, 0);
console.log(output1);


//Finding Maximum of Elements
const output2 = arr.reduce(function (max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(output2);

// Direct Function
const numbers = [1, 2, 3, 4, 5];

// Using reduce to find the maximum value in the array
const max = numbers.reduce(function(accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
}, numbers[0]);

console.log(max); // 5