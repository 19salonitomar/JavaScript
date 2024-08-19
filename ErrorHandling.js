const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

// Function to get a Promise for fetching data from the given URL

const getPromise = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};

let promise = getPromise(ALL_POKEMONS_URL);

const consumer = () => {
    promise.then((result) => {
            console.log({result}); // Log the result of 50 Pokemons
        })

        .catch(error => {
            // As the URL is a valid one, this will not be called.
            console.log('We have encountered an Error!', error); // Log an error
        });
};


consumer();





// .then(), .catch(), .finally()

let loading = true;
loading && console.log('Loading...');

// Gatting Promise
promise = getPromise(ALL_POKEMONS_URL);

promise.finally(() => {
    loading = false;
    console.log(`Promise Settled and loading is ${loading}`);
}).then((result) => {
    console.log({result});
}).catch((error) => {
    console.log(error)
});