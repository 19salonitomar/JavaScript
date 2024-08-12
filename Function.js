// Functions are Heart of JavaScript:

// 1. Function Statement:       (Function Declaration)
function first() {
    console.log("First Function Called!");
}
first();


// 2. Function Expression:        (Assigning a Function to a Variable)
var second = function () {
    console.log("Second Function Called!");
}
second();


/* 3. Difference Between Function Statement and Function Expression:
Hoisting: Function statements are hoisted, allowing them to be called before their definition,
          whereas function expressions are not hoisted and can only be used after their assignment.
Syntax: Function statements have the form function name() { ... },
         while function expressions are often assigned to variables with the form const name = function() { ... };. */


first();      // First Function Called!
second();    //  ReferenceError: Cannot access 'second' before initialization

//Satement:
function first() {
    console.log("First Function Called!");
}
// Expression
var second = function () {
    console.log("Second Function Called!");
}


// 4. Anonymous Function:
//An anonymous function in JavaScript is a function that does not have a name. And Anonymous functions are passed as arguments, assigned to variables.

const greet = function() {
    console.log("Hello, Beautiful");
};
greet();

// 4. Anonymous Function:(Passed As an Argument)
setTimeout(function() {
    console.log("This message is delayed.");
}, 1000);


/* 5. Named Function Expression:
  A named function expression in JavaScript is a function expression where the function has a name. 
  This name is only accessible within the function's own scope, 
  which can be useful for recursion or for more descriptive debugging. */

const factorial = function fact(n) {
    if(n<=1)  return 1;
    return n* fact(n-1);
};

console.log(factorial(5));      // output: 120
console.log(fact);              // ReferenceError: fact is not defined


/* What is Parameters and Arguments:
Definition vs. Invocation: Parameters are defined in the function declaration, 
            while arguments are provided during the function call.
Placeholders vs. Actual Values: Parameters are placeholders for the data the function will process,   
            and arguments are the actual data passed to the function. */


function greet(name) { // 'name' is a parameter
    console.log("Hello, " + name);
}

greet("Alice"); // "Alice" is an argument


/* First class functions: ( first-class citizens):
The ability to use functions as a value and passed as an arguments to another function,
and can be return as a function is known as FIRST CLASS FUNCTION AND FIRST CLASS CITIZEN:*/

/* 1.Assignment to Variables:
Functions can be stored in variables, allowing them to be passed around and used like any other value.*/

const add = function(a, b) {
    return a + b;
};

/* 2. Pass as Arguments:
Functions can be passed as arguments to other functions, allowing for higher-order functions.*/

function operate(fn, a, b) {
    return fn(a, b);
}

operate(add, 5, 3); // 8

/* 3. Return from Functions:
Functions can return other functions, enabling the creation of function factories or closures.*/


function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10
