//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//creating promise
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task, DB calls, cryptography etc
    setTimeout(function () {
        console.log("Async Task is complete.");
        resolve()
    }, 1000)
})

//consuming the promise
promiseOne.then(function (e) {
    console.log("Promise consumed");
    
})

//another way
new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise (function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "Chai", email: "nath@pro.com"})
    }, 1000)
})
//Here the parameter of resolve is accessed from the then function "()""
promiseThree.then(function (user){
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve ({username: "Omkar", password: "123"})
        } else {
            reject ('Something went wrong !')
        }
    }, 1000)
})

const username = promiseFour.then((user)=> {
    console.log(user);
    return user.username
}).then( (mysusername)=> {
    console.log(mysusername);
}).catch( function (error) {
    console.log(error);
}).finally(()=>{
    console.log("Finally, the promise is resolved or rejected.");
})

const promiseFive = new Promise( (resolve, reject)=> {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve ({username: "Javascript", password: "123"})
        } else {
            reject ('JS went wrong !')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }   
}

consumePromiseFive()