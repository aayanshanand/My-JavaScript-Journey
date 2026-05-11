const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumber.map( (num) => num + 10)
// console.log(newNums);

// const newNums1 = myNumber.map( (num) => { return num + 10})
// console.log(newNums);


const newNums = myNumber

        .map( (num) => num * 10)
        .map( (num) => num + 1)
        .filter( (num) => num >= 40)
        .filter( (num) => num <= 100)

console.log(newNums);
