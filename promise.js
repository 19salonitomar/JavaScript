// A Promise ia an object representing the eventual completion or failure of an asynchronous operation.

const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API);

console.log(user);

//Attaching handlers(Callback) to Promise through Then ..
user.then(function(data) {
    console.log(data);
})