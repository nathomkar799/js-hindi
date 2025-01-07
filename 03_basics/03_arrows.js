const user = {
    username : "Omkar",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username} , wlecome to website`);//this refer to current content
        console.log(this);
        
    }

}
// console.log(this);//returns empty object in node only but if you console log "this" in the browser then it will give window object

// user.welcomeMessage()
// user.username = "Phaldev"
// user.welcomeMessage()


// function chai (){
//     console.log(this);
    
// }

// chai ()

// const chai = function () {
//     let username = "Omkar"
//     console.log(this.username);
    
// }

// chai ()// undefined


// const chai =  () => {//function removed
//     let username = "Omkar"
//     console.log(this);//removed .username
    
// }

// chai ()//gives empty object

// () => {} // basic arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2//explicit return
// }

// console.log(addTwo(1, 2));

//#implicit return

// const addTwo = (num1, num2) =>  num1 + num2 //immplicit return

// const addTwo = (num1, num2) =>  (num1 + num2) //if we use curly braces then we need to mention a return but if if we use normal parenthesis then we dont need to return anything

const addTwo = (num1, num2) =>   ({username : "Omkar"})
console.log(addTwo());// { username: 'Omkar' }