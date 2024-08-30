/* Call Back Function:
A callback function in JavaScript is a function that is passed as an argument to another function 
and is executed after some operation has been completed. 
Callbacks are a way to ensure that certain code does not execute until another code has finished executing. 
This is especially useful for asynchronous operations, such as reading files, making network requests, or handling user interactions.

Characteristics of Callback Functions:
Passed as an Argument: A callback function is passed as an argument to another function.
Executed Later: The callback is executed after the completion of a certain task or event.
Examples:
Basic Callback Function:*/

function greet(name, callback) {
    console.log("Hello," + name);
    callback();
}
function saygoodbye() {
    console.log("Goodbye!!");
}

greet("Beautifull", saygoodbye);           // Hello, Beautifull   Goodbye!!

/* Asynchronous Callback function: 
Callbacks are often used to handle asynchronous operations,
 such as reading a file or making an HTTP request. */ 

function fetchdata(callback) {
    setTimeout(function () {
        const data = {name: "Shifra", identity: "Robot", age: 200};
        callback();
    }, 2000);
 }

function processData(data) {
    console.log("Received Data:", data);
 }
 fetchdata(processData);   // Output (after 2 seconds delay):  Received data: { name: "Alice", age: 25 }


/* Second Example: */
setTimeout(function () {
    console.log("Times Up!!");
}, 5000);

function X(Y) {
    console.log("outer excutes");
    Y();
}
X(function() {
    console.log("inner calls");
});


/*Main Thread:  The main thread in JavaScript is the single thread of execution where all the synchronous code runs, 
including rendering the user interface, handling user events, and executing JavaScript code. */

console.log("Start");

// Long-running task
for (let i = 0; i < 1e9; i++) {
    // Simulating heavy computation
}

console.log("End");

// This event handler will not be executed until the long-running task completes
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked");
});


/* Techiches of Avoiding Block Main Thread, 
1.Using setTimeout to avoid blocking */
function heavyTask() {
    for (let i = 0; i < 1e9; i++) {
        if (i % 1e6 === 0) {
            setTimeout(heavyTask, 0); // Schedule the next chunk
            break;
        }
    }
}

heavyTask();


/* 2.Web Workers: Run heavy computations in the background using Web Workers.*/


const worker = new Worker('worker.js');
worker.postMessage('start');

worker.onmessage = function(event) {
    console.log('Received from worker:', event.data);
};

// worker.js
onmessage = function(event) {
    if (event.data === 'start') {
        let result = 0;
        for (let i = 0; i < 1e9; i++) {
            result += i;
        }
        postMessage(result);
    }
};


/* 3.RequestAnimationFrame: Use requestAnimationFrame for animations and UI updates to ensure they run smoothly and synchronously with the browser's repaint cycles.*/

// Using requestAnimationFrame for smooth animations
function animate() {
    // Perform animation step
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);