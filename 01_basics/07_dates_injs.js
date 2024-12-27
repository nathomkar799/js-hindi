//Dates

let myDate = new Date()
// console.log(myDate.toString());//Fri Dec 27 2024 08:45:55 GMT+0000 (Coordinated Universal Time)
// //Gives Day Month Date Year HH:MM:SS GMT+0000
// console.log(myDate.toDateString());//Fri Dec 27 2024
// //Gives-> Day Month Date Year
// console.log(myDate.toISOString());//2024-12-27T08:45:55.432Z
// //Gives-> YYYY-MM-DDT0HH:MM:SS.MS
// console.log(myDate.toJSON());//2024-12-27T08:45:55.432Z
// //Gives-> YYYY-MM-DDT0HH:MM:SS.MS
// console.log(myDate.toLocaleDateString());//12/27/2024
// //Gives-> MM/DD/YYYY 
// console.log(myDate.toLocaleString());//12/27/2024, 8:45:55 AM
// //Gives-> MM/DD/YYYY, HH:MM:SS AM/PM Without zero


// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2024, 11, 27, 5, 3)
let myCreatedDate = new Date("2024-01-14")

// console.log(myCreatedDate.toLocaleString());//FRi Dec 27 2024

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//1735291323

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday: "long",
})
);





