// Stack(Primitive), Heap(Non-primitive)
// If we define a variable in stack memory we get copy 
// if we define an object in heap memory we get reference of an og value

let myYtname = "faisalkhan"
let anotherYtname = myYtname
anotherYtname = "humhaifaisalkhan"

console.log(myYtname);
console.log(anotherYtname);

let faisalkhan = {
    email: "faisalkhan@gmail.com",
    upi: "faisal@axl"
}

let danishkhan = faisalkhan

danishkhan.email = "danishkhan@gmail.com"

console.log(faisalkhan.email);
console.log(danishkhan.email);

