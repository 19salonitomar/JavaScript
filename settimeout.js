function first() {
    var x = "I am here";
    setTimeout(function() {
        console.log(x);
    }, 3000);
    alert("Hello, World!!")
}
first();

// printing counting 1 to 10 with setTimeout()

function second() {
    for(let i = 1; i<=10; i++) {               // Note: we use here let variable because let has a block scope and it creats new copy everytime, and if we use var here it always print 10 times 11 only.
        setTimeout(function() {
            console.log(i);
        },i*1000);
    }
    console.log("Printing Counting From 1 to 10")
}
second();

// It is not working with var because the copy of i is refere to the same memory location everytime with var And if we want to use var over here So, we need to give new location everytime with settimeout and form a closuer here!

function x() {
    for(var i= 1; i<=10; i++) {
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
    }
    close(i);
}
    console.log("Working with var variable!")
}
x();