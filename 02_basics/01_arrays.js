//arrays

const myArr = [0, 1, 23, 8, 9]
const myHeroes = ["Superman", "Batman", "Ironman", "Spiderman"]

// console.log(myArr[1]);
//  const newArr = new Array(2,3,7,9)

//  console.log(newArr);

 //Arrays methods

//  myArr.push(5)//add the element to the last

// // console.log(myArr);
// myArr.pop();//pops the last element
// // console.log(myArr);

// myArr.unshift(15)//puts the element at the beginning and shifts all the elements by one
// // console.log(myArr);
// myArr.shift()//removes the first element
// // console.log(myArr.includes(23));//returns true or false if the includes that element (boolean)

// console.log(myArr.indexOf(9));//returns the index of the element if it exists and returns -1 if it does not exist.


const newArr = myArr.join()// makes the whole arrays elements to a string consisting of elements and comma.//0,1,23,8,9

// console.log(newArr);//0,1,23,8,9
// console.log(myArr);//[ 0, 1, 23, 8, 9 ]

//slice,splice

// console.log("A", myArr);
const Arr1 = myArr.slice(1,3) //slices the array from the point(1) to 1 less than next mentioned element(3) and does not manipulates the original array
console.log(Arr1);
// console.log("B", myArr);

const Arr2 = myArr.splice(1,3)//slices the array from the point(1) to the next mentioned point (3) and also manipulates the original array
// console.log(Arr2);
console.log("C", myArr);









 
 