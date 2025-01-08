//switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month =  3

switch (month) {
    case 1:
        console.log(`Month is January`);
        break;
 
    case 2:
        console.log(`Month is February`);
        break;
    case 3:
        console.log(`Month is March`);
        break;

    default: console.log("Bhai hosh me aao");
        break;
}

//NOTE: if there is a match and it does not have a break then it executes all the code without even looking into the value except it doesnt toouch the defaul