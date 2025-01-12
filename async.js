// Syntax:
async function functionName() {
    // asynchronous code
}


async function functionName() {
    const result = await promise;
    // Continue execution after the promise is resolved
}

// Function to fetch data from a given URL using async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

// URL to fetch data from
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

// Calling the async function and handling the result
(async () => {
    try {
        const data = await fetchData(API_URL);
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})();
