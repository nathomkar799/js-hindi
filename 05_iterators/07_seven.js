const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumers.map( (num)=> num+10 )
const newNums = myNumers
                .map( (num) => num *10)
                .map( (nums) => nums + 1)
                .filter( (b) => b>=40 )
// console.log(myNumers);


console.log(newNums);
