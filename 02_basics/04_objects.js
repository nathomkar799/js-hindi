// const tinderUser = Object.create()//Singleton

const tinderUser = {}// Object literal

tinderUser.id = "123abc"
tinderUser.name = "Dammy"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularuser = {
    email : "oaky@gamil.com",
    fullName : {
        userFullname : {
            firstname: "Omkar",
            lastname : "Nath"
        }
    }
}

// console.log(regularuser.fullName.userFullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
 
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// From the database data comes in the form of array of objects:

const user = [
    {
        id : 1,
        email : "vdjsk@gmail.com"
    }
    ,
    {
        id : 2,
        email : "vdjsk@gmail.com"
    }
    ,{
        id : 3,
        email : "vdjsk@gmail.com"
    },
    {
        id : 3,
        email : "vdjsk@gmail.com"
    }
]

// console.log(user[1]);

// console.log(user[1].email);

// console.log(Object.keys(tinderUser));//will create an array of only keys*******
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));//will create an array of array of key: value pair
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));//gives boolean : true when there is a key named "isLoggedIn" key

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Omkar"
}

// const {courseInstructor} = course
const {courseInstructor : isntructor} = course//DEstructuring
// console.log(isntructor);//Omkar

// console.log(courseInstructor);//Omkar

// API: apna kaam kisi or ke sar
//Some values we get from backend : API : How we write those values. These values mostly come in form of JSON

// {
//     "name" : "Omkar",
//     "coursename" : "JS in hindi",
//     "price" : "free"
// }

//Some times we get APIs in for  of array of objects
 [
    {},
    {},
    {}
 ]
