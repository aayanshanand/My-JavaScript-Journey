const userEmail = "aa@gmail.com"

if (userEmail) {
    console.log("got user email");
    
}else {
    console.log("Don't have user email");
    
}

// falsy values
//  false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : Null Undefined

let val1;
// val1 = 5 ?? 100
// val1 = null ?? 10
var1 = undefined ?? 15

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice === 80 ? console.log("less than 80") : console.log("more than 80");
