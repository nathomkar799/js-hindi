// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);  
// })

// console.log(values);//undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num>4//when return is used then it returns the value if a curly brace is used. Other than that it can work fair enough.
// })
// console.log(newNums);//[] gives empty array when return is not used
// const newNums = myNums.filter( (num) => num> 4 )
// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

const newNums = []

myNums.forEach( (num)=> {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);

