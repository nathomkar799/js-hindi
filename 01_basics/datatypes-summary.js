//Datatypes are categorized on the basis of how they are stored in memory and how they can be accessed.:Primitive & Non-primitive.

//Primitive: call by value : So when the are copied then the reference is not given rather than the copied version is given. Further changes are reflected in its copied version. 

// 7 Types: String, Number, Boolean, null, undefined, Symbol(When the value needs to be unique, it is used), BigInt(Very big unhandleable int)


const score = 100
const scoreValue = 100.90

const isLoggedIn = true
const outsideTemp = null
let userEmail;//value=undefined

const id = Symbol('123')
const anotheId = Symbol('123')

// console.log(id == anotheId);//false because return value are different.

const bigNumber = 322435245245235235235235235253252353252352352n

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Omkar",
    age: 22,
}

const myfunction = function(){
//     console.log("Hello Omkar");
}

// console.log(typeof bigNumber);//bigint

console.log(myObj);

//https://262.ecma-international.org/5.1/#sec-8







//Reference (Non-Primitive): Directly reference(address) is given.

//Array, Objects, Functions