function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()();           /* We can do this also:
                     var x = outer();
                     x(); */

                     
function ParentFunction() {
    var parentVariable = 60;
    function ChildFunction() {
        console.log(parentVariable )
    }

    return ChildFunction;
}
var executeChild = ParentFunction();
    executeChild(); //60
            