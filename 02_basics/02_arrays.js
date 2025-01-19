const mcu = ["ironman", "spiderman", "thor" ]
const dc = ["batman", "flash", "superman"]

mcu.push(dc)
console.log(mcu);//here dc is put in mcu at last as an "element".
//that proves that arrays in js takes anytype of DataTransfer.
// console.log(mcu[3][2]);
// const newArr = mcu.concat(dc)
// console.log(newArr);// this prints the new array on which mcu array and dc array is concatinated 

const all_heroes = [...mcu, ...dc] //by this way all the mentioned arrays are concatenated aka spread operator
// console.log(all_heroes);

const number = [23, 4, 67, 87, [23, 65, 3], 5, 19, [677, 42, [21, 53, 90]]]
const real_array = number.flat(Infinity)//flat method concatenate all the elements despite the depth as the depth can be mentioned in the method and if we want all the elements to be concatenated then we need to mention infinity just like that.
// console.log(real_array);

console.log(Array.isArray("Omkar"));//Array.isArray returns boolean if it is array or not.
console.log(Array.from("Omkar"));//Converts it into an array.
console.log(Array.from({name : "Omkar"}));//intresting

const arr1 = 100
const arr2 = 200
const arr3 = 300

console.log(Array.of(arr1,arr2,arr3));//of returns a new array of every elements mentioned in it. 









