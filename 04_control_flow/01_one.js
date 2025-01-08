//if

// if (condition) {

// }


// <, >, <=, >=, ==, !=, === (checks type also), !==

if (2 == "2") {
    // console.log("Okay");
    
}

if (2 === "2") {
    // console.log("No");
    
}

if (3 != 3) {
    // console.log("Okay2");
    
}

if (2 !== 3) {
    // console.log("Okay2");
    
}


const temperature = 41

if (temperature === 40) {
    // console.log(`Temperature is not 40`);
    
} else {
    // console.log(`Temperature is not ${temperature}`);
    
}

const score = 200

if (score > 100) {
    const power = "fly"
    // console.log(`User power: ${power}`);
}


//short hand notation

const balance = 1000

// if (balance > 500) console.log("test");//implict scope, only forone liners


// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750){
//     console.log("Less than 750");
// }else{
//     console.log("Kya bakchodi kar rahe ho bhai");
    
// }

const userLoggedIn = true
const debitcard = true

if (userLoggedIn && debitcard) { //AND condition
    console.log("Hai bhai. Kharid le");
    
}



