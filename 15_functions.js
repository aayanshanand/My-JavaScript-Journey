//function Declarations

// function sayMyName(){
//     console.log("A");
//     console.log("A");
//     console.log("Y");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
// }
// sayMyName()

//function with parameters

// function addTwoNumbers(a, b){
//     console.log(a + b);
// }

// addTwoNumbers(3, 4)


//function that returns a value

// function addTwoNumbers(a, b){
//     // let result = a + b
//     // return result
//     return a + b
// }

// const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

// function loginUserMessage(username = "Aayansh"){
//     if(!username){
//         console.log("Please enter your username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("aayansh"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "aayansh",
    price: 200
}
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 handleObject(user)

 const myNewArray = [200, 400, 500, 1000]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(myNewArray));
 