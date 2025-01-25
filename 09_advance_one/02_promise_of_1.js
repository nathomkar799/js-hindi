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
        let error = true

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
    console.log("4", user);
    return user.username
}).then( (username)=> {
    console.log("4", username);
}).catch( (err)=> {
    console.log("4", err);
}).finally( ()=> console.log("4 Kuchh to huwa hai resolved or rejected"))

const promiseFive = new Promise ( (resolve, reject)=>{
    setTimeout(  ()=> {
        let error = true

        if (!error) {
            resolve({
                username : "JavaScript",
                password : "123"
            })
        } else {
            reject('JS went wrong')
        }
    }, 1000)
})

//other way

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log("5", response);
    } catch (error) {
        console.log("5",error);
    }
}

consumePromiseFive()

// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E", error);
//     }
// }
// getAllusers()

fetch('https://api.github.com/users/nathomkar799')
.then( (response)=>{
    return response.json()
})
.then( (data)=> {
    console.log(data);
})
.catch( (error)=> {
    console.log("Error");
})


