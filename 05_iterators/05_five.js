const coding = ["js", "java", "cpp", "rb", "py"]

// coding.forEach( function (item) {

// })

// coding.forEach(function (item) {
// console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })


function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, array) => {
// console.log(item, index, array);

})//js 0 [ 'js', 'java', 'cpp', 'rb', 'py' ]
// java 1 [ 'js', 'java', 'cpp', 'rb', 'py' ]
// cpp 2 [ 'js', 'java', 'cpp', 'rb', 'py' ]
// rb 3 [ 'js', 'java', 'cpp', 'rb', 'py' ]
// py 4 [ 'js', 'java', 'cpp', 'rb', 'py' ]


const myCoding = [
    {
        languageName : "Javascript",
        languaFilename : "js"
    },
    {
        languageName : "C++",
        languaFilename : "cpp"
    },
    {
        languageName : "Python",
        languaFilename : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);//now by forEach we can access every object and its content in an array.
})


