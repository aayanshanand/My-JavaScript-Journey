// foreach loop

const coding = ["js", "cpp", "ruby", "react", "java", "C"]

//foreach loop used by normal fn

// coding.forEach(function (item) {
//     console.log(item);
// })

// foreach loop used by arrow fn

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

// myCoding.forEach( (item) => {
// console.log(item.languageName);
myCoding.forEach( (item) => {
console.log(item.languageFileName);

})