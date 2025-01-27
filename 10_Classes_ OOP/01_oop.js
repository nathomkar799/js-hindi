const user = {
    username : "Omkar",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function() {
        // console.log("got user deatils");
        //console.log(`Username: ${username}`);//writing onlu the username will not give the expected data.
        // console.log(`Username: ${this.username}`);//adding this will get the right data.
        // console.log(this);

    }
}


// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);//this is object// it prints {}


//new is a constructor function that allows you make multiple instances from an object literal

// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;//return is implicit working
}

// const userOne = User("Omkar", 12, true)
// const userTWo = User("Chai Or Code", 11, false)


// console.log(userOne);
// As we are not using new constructor function, it does overwrite all the deatils.
//Jaise hi aap new keyword use karte hai to sabse pahle ek empty object create hota hai jisko instance bola jata hai.
//Step 1 Ek naya object create ho raha hai
//Step 2 Apka ye jo constructor function call hota hai new keyword ke karan. Ye kya karta hai aapke jitne bhi arguments wagaira hota hai usko pack karata hai or aapko de dete hai.
//Step 3 Injects aal the arguments.
//Step 4 apko mil jaate hai functions ke andar
// username: 'Chai Or Code',
//   loginCount: 11,
//   isLoggedIn: false

const userOne = new User("Omkar", 12, true)
const userTWo = new User("Chai Or Code", 11, false)

// console.log(userOne);//now it prints even cleaner way

console.log(userOne.constructor);//[Function: User]-> Constructor : reference of it self



