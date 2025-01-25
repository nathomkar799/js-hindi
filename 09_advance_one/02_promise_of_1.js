const promiseOne = new Promise ( function (resolve, reject) {
    setTimeout( function (){
        console.log("1 Async1 task is Complete.");
        resolve()    
    }, 1000)
})

promiseOne.then( ()=> console.log("1 Promise Comsumed.") )


new Promise( (resolve, reject)=> {
    setTimeout( ()=>{
        console.log("2 Async Task 2");
        resolve ()
    }, 1000)
}).then( ()=> {
    console.log("2 Async 2 resolved");
})

const promiseThree = new Promise( (resolve, reject)=> {
    setTimeout( ()=> {
        resolve({
            username: "Chai",
            email: "nath@23.com"
        })
    }, 1000)
} )

promiseThree.then( (user)=> {
    console.log("3", user);    
})

const promiseFour = new Promise ( (resolve, reject)=> {
    setTimeout( ()=>{
        let error = false

        if (!error) {
            resolve({
                username : "Omkar",
                password : "123"
            })
        } else {
            reject('ERROR: Someting went wrong')
        }
    }, 1000)
})

promiseFour.then( (user)=>{
    console.log(user);
    return user.username
}).then( (p)=> {
    console.log(p);
})