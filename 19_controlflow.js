// if
// const isUserloggedIn = true

// if (isUserloggedIn) {

// }

// <, >, <=, >=, ==, !=, ===, !==
// 3 != 2
// if (2 === "2" ) {
//     console.log("exe");
// }
// const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");   
// } else{
// console.log("temperature is greater than 50");
// }

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// } {
//     console.log(`User power: ${power}`);
// }


// const balance = 1000

// if (blacnce > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");   
// }

const userloggedIn = true
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}