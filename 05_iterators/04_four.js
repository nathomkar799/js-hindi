const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);//keys
    
}

for (const key in myObject) {
    // console.log(myObject[key]);//value
    
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "java", "cpp", "rb", "py"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);//It does not gives error. But map k upar iteration nahi kiya jaa sakta hai.
// }

