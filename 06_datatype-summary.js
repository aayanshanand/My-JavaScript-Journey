//Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4739794379443433n

console.log(bigNumber);

//Non-Primitive

//Array, Object, Function 

const heros = ["shaktiman", "Krissh", "zokomon"];
let myObj = {
    name: "harsh",
    age: 22,
}

console.log(heros);

console.log(myObj);

//Function

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);
