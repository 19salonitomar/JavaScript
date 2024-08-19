const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'First promise resolved');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Second promise resolved');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1500, 'Third promise rejected');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, 'Fourth promise resolved');
});


Promise.all([promise1, promise2, promise3, promise4])
.then(result => {
    console.log(result);
})
.catch((error) => {
    console.log("Error Found!");
});

Promise.allSettled([promise1, promise2, promise3, promise4])
.then(result => {
    console.log(result);
})
.catch((error) => {
    console.log("Error Found!");
});

Promise.race([promise1, promise2, promise3, promise4])
.then(result => {
    console.log(result);
})
.catch((error) => {
    console.log("Error Found!");
});

Promise.any([promise1, promise2, promise3, promise4])
.then(result => {
    console.log(result);
})
.catch((error) => {
    console.log("Error Found!",error);
    console.log(error.errors)
});