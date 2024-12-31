function sayMyName () {
    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R"); 
}

// sayMyName//reference
// sayMyName()//For execution we need to add () to thre reference

function addTwoNumbers(number1, number2)//here number1 and number2 are called parameters because here function is being defined 
{
    // console.log(number1+number2);
}

// addTwoNumbers()//returns NaN beacause no value has been given to add
addTwoNumbers(3,5)//8

const result = addTwoNumbers(3,5)//Here 3,5 are called arguments because here the function is being called. //8


// console.log("Result:",result);//Result: undefined

// function addTwoNumbers(number1, number2) {
//     let result =  number1+number2
//     return result   
// }

// const result = addTwoNumbers(3, 50)
// console.log("Result", result);

// addTwoNumbers(5,8)
// console.log("hello");


function loginUserManage(username = "SAM"){
    if (username === undefined) {
        return (console.log("Please enter a valid username."));
        
    }
    return console.log(`${username} just logged in`);
    
}

// loginUserManage()

function calculateCartPrice(value1, value2, ...num1)//Here "..." is rest operator, using this we can store all the values in an array.
{
return num1
}

// console.log(calculateCartPrice(200, 300, 500, 2000));//[ 200, 300, 500, 2000 ]
console.log(calculateCartPrice(200, 300, 500, 2000));//[ 500, 2000 ]

const user = {
    username : "nathpiro",
    price : "99"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price : 399
})

const myNewArray = [200, 600, 500, 999]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 500, 999]));

