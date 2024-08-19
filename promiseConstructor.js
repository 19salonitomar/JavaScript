/*Promise Constructor
The Promise constructor in JavaScript is used to create a new Promise object. It takes a single argument: a function called the executor. 
The executor function is executed immediately by the Promise implementation, and it receives two functions as arguments: resolve and reject. .*/

const cart = ["Shoes", "Shirts", "Pants", "Jeans", "Tops"];

makeOrder(cart)         
    .then(function(orderId) {
    console.log(orderId);
    })
    .then(function() {
        proceedToPayment(orderId);
    })
    .catch(function(err) {                        // To handle Errors:
        console.log(err.message);
    })
    .then(function() {
        console.log("Whatever Happen, I will be Called");
    });

function makeOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
        }
        // Logic For makeOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 3000);
            
        }
    });

    return pr;
}

function validateCart() {
    return true;
}

function proceedToPayment() {
    //logic
    return new promise(function (resolve, reject) {
        resolve("Payment Successfull !!")
    });

};

