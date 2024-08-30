/* The "Pyramid of Doom" refers to a situation in JavaScript where multiple nested callbacks lead to code that is deeply indented and hard to read and maintain. 
This typically occurs when handling several asynchronous operations in sequence, resulting in a structure that resembles a pyramid.*/

const cart = ["Shoe", "Shirt", "Jeans", "Watch", "Top"];

function makeOrder(cart) {
    setTimeout(() => {
        const order_Id = "12345";
        console.log('Order Created:' , order_Id);
        cancelIdleCallback(order_Id);
    }, 1000);
}

function proceedToPayment(order_Id, callback) {
    setTimeout(() =>{
        const payment_Info = {orderId: order_Id,status: "Paid"};
        console.log('Payment Processed:', payment_Info);
        callback(payment_Info);
    },1000);
}

function showOrderSummary(payment_info, callback) {
    setTimeout(() => {
        console.log('Order Summary show for:', payment_info.order_Id);
        callback();
    },1000);
}

function updateWalletBalance(callback) {
    setTimeout(() => {
        console.log('Wallet Balance Updated');
        callback();
    }, 1000);
}


// PYRAMID OF DOOM PROGRAM 

makeOrder(cart, function (order_Id) {
    proceedToPayment(order_Id, function(payment_Info) {
        showOrderSummary(payment_Info, function() {
            updateWalletBalance(function(){
                console.log("All Operations are completed");
            });
        });
    });
});


// Using PROMISES to avoid Pyramid of Doom

makeOrder(cart)

    // .then(function(order_Id) {
    //     return proceedToPayment(order_Id);   // We always return our data/result when we doing promise chaining
    // })
    // .then(function(payment_Info) {
    //     return showOrderSummary(payment_Info);
    // })
    

    // with Arrow Function 
    .then(order_Id => proceedToPayment(order_Id))
    .then(payment_Info => showOrderSummary(payment_Info))
    .then(() => updateWalletBalance())
    .then(() => {
        console.log('All operations complete');
    })
    .catch(error => {
        console.error('Error:', error);
    });