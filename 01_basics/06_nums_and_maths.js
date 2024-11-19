const score = 400

const balance = new Number(100)
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));//gives decimal points like 100.000

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));//124

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));//10,000,000

//++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++

// console.log(Math);


// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));//gives max round off
// console.log(Math.floor(4.3));//gives lowest round off
// console.log(Math.max(4, 6, 1, 9));
// console.log(Math.min(4, 6, 1, 9));
console.log(Math.random());//gives a random value between 0 - 1
console.log((Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//gives random number between 10 to 20

