const name = "Faisal Khan"
const repoCount = '06'

console.log(name + repoCount + "value"); // this is the old school type method for string

// Now everyone is using backticks in js
// string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Now we call String in another type 
// Value key pair access

const gameName = new String('Gta-6-5-4-auto')

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://faisalkhan.com/faisal%20khan"

console.log(url.replace('%20', '-'));

console.log(url.includes('hello'));

console.log(gameName.split('-'));
