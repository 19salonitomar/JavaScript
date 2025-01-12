const array = [5, 7, 8, 9, 1, 3]

// Filter out Odd Values:

function isOdd(X) {
    return X % 2 
}

const output = arr.filter(isOdd);

console.log(output);

// 1. Filter greater than three

const output1 = array.filter(function greater(X) {
    return X > 3;
});

console.log(output1);

// 2. Filter with arrow function

const output2 = array.filter((X) => X > 3);

console.log(output2);