const user = {
    username : "Omkar",
    loginCount : 8,
    signedIn : true,

    getUserDetails :() => {
        // console.log("got user deatils");
        console.log(`Username: ${username}`);
        
    }
}


console.log(user.user);
console.log(user.getUserDetails());
