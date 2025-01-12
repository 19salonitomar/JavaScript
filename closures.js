function outer() { 
    var x = 5; 
    
    function inner() { 
        console.log("Hello, I am an inner function"); 
        console.log( 
        "I am accessing var x of my parent function"
        + " when that parent functions execution "
        + "context destroyed"
        ); 
        console.log(x); 
    } 
    return inner; 
    } 
    const result = outer(); 
    result();
    

function first() {
    var a = 16;
    function second() {
        console.log(a);
    }
    return second;
}
var z = first();
console.log(z);
z();