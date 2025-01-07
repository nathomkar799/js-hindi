// var c = 300

let a = 300

if (true){
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(c);//30

//never use var beacause once it is used can be changed in the block or in global.


//the global scope of browser inspect is different and the code environment global scope is different. 


function one (){
    const username = "Omkar"

    function two (){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);//It gives error because website is in two so now its not defined

    two()//gives username
    
}

// one()

if (true) {
    const username = "Omkar"

    if (username === "Omkar") {
        const website = "YouTube"
        // console.log(username + website);
    }
    // console.log(website);   
}

// console.log(username);


//++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++

addone(5)//this will not give error
function addone (num) {
    return num + 1
}


addTwo(5)//this will give error because Cannot access 'addTwo' before initialization as this function is created as a holding in a variable also known as hoisting

const addTwo = function(num){
    return num + 2
}
