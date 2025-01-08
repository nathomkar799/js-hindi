//immediately invoked function expression (IIFE)


// (function chai () {
//     console.log("DB CONNECTED");
    
// }) ()//putting the whole function definition in a parenthesis will make it IIFE and also put another parenthesis in last

// (Function)(Another parenthesis[execution call]) // format
// This will avoid the function to be polluted with the global scope as well as to immediatedly execution of function

// ( () => {
//     console.log("DB CONNECTED");
    
// }) ()

(function chai() {//named iife
    console.log("Chai lo");
    
})();//put semicolon every time, we need to put when the function need to end

( (name) => {//parameters passed
    console.log(`Hey ${name}`);
    
})("Omkar")//Hey Omkar

//NOTE : if you want more than one iife then you need to end all iife(s) before the last one