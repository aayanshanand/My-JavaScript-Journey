// let a = 10
// const b = 20
// var c = 30

// var c = 300

// let a =300

// if (true) {
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("INNER: ", a);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "Aayansh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     two()
// }
// one()


// if(true){
//     const username = "Aayansh"
//     if(username === "Aayansh"){
//         const website = " Youtube"
//         console.log(username + website);
        
//     }
// }
//In above code if we put log after the curly brashes to print the vriables we can't do it

console.log(addOne(5));
function addOne (num) {
    return num + 1
}


const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5));