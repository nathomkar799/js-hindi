const account_Id = 144553
let account_Email = "omkar@gmail.com"
var account_Password = "12345"
account_City = "Jaipur" //dont use this type of variable intialization
let account_State; //undefined

// account_Id = 5

account_Email = "pack@gmail.com"
account_Password = "1561651561"
account_City = "Gaya"

console.log(account_Id);
/*
Prefer not to use vr
because of issue in block scope and functional scope
*/
console.table([account_Id,account_Email,account_Password,account_City,account_State])