//1. Higher-order function that takes a function as an argument
const radius =[2, 5, 8, 1];

const area = function(radius) {
    return MATH.PI * radius * radius;
};

const circumference = function(radius) {
    return 2 * MATH.PI *radius;
};

const diameter = function(radius) {
    return 2 * radius;
};


const calculate = function (radius, logic) {
    const output =[]
    for(let i =0; i< radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


  

//2. Higher-order function that returns a function
function createGreeter(greeting) {
    return function(name) {
      return greeting + ", " + name + "!";
    };
  }
  
  // Using the higher-order function to create specific greeter functions
  const helloGreeter = createGreeter("Hello");
  const goodMorningGreeter = createGreeter("Good Morning");
  
  console.log(helloGreeter("Alice")); // "Hello, Alice!"
  console.log(goodMorningGreeter("Bob")); // "Good Morning, Bob!"
  