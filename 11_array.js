// Demonstrates array creation, common array methods, and the difference between slice() and splice()


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);

// Slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
