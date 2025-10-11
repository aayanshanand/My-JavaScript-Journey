//   ++++++++++++++++++++++++++++++   Numbers  ++++++++++++++++++++++++++++
const score = 400
console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber =23.8765

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

//  +++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // To get Absolute
console.log(Math.round(4.8)); // To get Round Off Which is Closer to them
console.log(Math.round(4.4)); // To get Round Off Which is Closer to them
console.log(Math.ceil(4.6)); // To get Higher round off 
console.log(Math.floor(4.6)); // To get lower round off

console.log(Math.min(4, 5, 9, 2)); // To get Min number
console.log(Math.max(4, 5, 9, 2)); // To get Max number

console.log(Math.random()); // To get random number between 0 to 1
console.log((Math.random()*10) + 1); // To get random number Between 1 to 9
console.log(Math.floor(Math.random()*10) + 1); // To get random number between 1 to 10 bcoz we are add num to 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // To get atleast 10 min value and max 20 value 
