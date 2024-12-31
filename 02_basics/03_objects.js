//singleton
// Object.create

//object literals
const mySym = Symbol("key1")

const js_user = {
    name : "Omkar Nath",
    email : "nathomkar@gmail.com",
    age : 18,
    [mySym] : "helloboy",
    contact : 9168768374687,
    isLoggedin : false,
    holidays : [ "Monday", "Saturday"]
}


//How to access object:
// console.log(js_user.isLoggedin);//Type 1
// console.log(js_user["isLoggedin"]);//Type 2 (Prefered) because all the keys or entities are understood as strings. For example: name -> "name"

js_user.email = "nathomkar44@gmail.com"
// Object.freeze(js_user)
js_user.email = "nr44@gmail.com"
// console.log(js_user);

js_user.greeting = function () {
    console.log("Hello user !");
}

js_user.greeting2 = function () {
    console.log(`Hello user !, ${this.name}`);
}
// console.log(js_user.greeting);//[Function (anonymous)]
console.log(js_user.greeting());

console.log(js_user.greeting2());
