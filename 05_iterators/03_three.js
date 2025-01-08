//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);   
}

const str = "Raam"

for (const tring of str) {
    // console.log(tring);
    
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}
// for (const [key, value] of myObject) {//my Object is not iterable
//     console.log(key, ':-', value);
// }