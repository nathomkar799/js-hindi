const userEmail = ""

if (userEmail) {
    // console.log("Got the mail");
    
}else {
    // console.log("Nahi hai bhai");
}

//falsy values: that will give false
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values : except all the falsy values, all other values are considered as truthy values
//"0", 'false', " ", [], {}, function(){}:empty function is also a truthy value

if (userEmail.length === 0) {
    // console.log("Array is empty.");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    // console.log("nahi hai bhai object me kuchh");
    
}


//Nullis Coaliescing Operator (??) : null undefined
//If value is null or undefined then it selects other value

let val1;
// val1 = 5 ?? 10
// console.log(val1);//5

// val1 = null ?? 10
// console.log(val1);//10

val1 = undefined ?? 15
console.log(val1);//15

//Terniary Operator :If else ka chhota syntax

// condition ? true : false


const iceTeaPrice = 100
// iceTeaPrice>80 ? console.log("mehnga hai bhai") : console.log("Budget me aa jayega");









