//reduce

const myNums = [ 1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, curVal) 
// {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
    
//     return acc+curVal
// }, 0)

// console.log(myTotal);
// acc: 0 and curVal: 1
// acc: 1 and curVal: 2
// acc: 3 and curVal: 3
// acc: 6 and curVal: 4
// acc: 10 and curVal: 5
// 15

const myTotal = myNums.reduce( (acc, curVal) => {return acc+curVal},0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPay = shoppingCart.reduce( (acc, item) => {return acc + item.price},0)

console.log(totalPay);
