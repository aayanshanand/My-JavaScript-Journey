// Comparison between numbers
console.log(2 > 1);      // true - 2 is greater than 1
console.log(2 >= 1);     // true - 2 is greater than or equal to 1
console.log(2 < 1);      // false - 2 is not less than 1
console.log(2 == 1);     // false - 2 is not equal to 1
console.log(2 != 1);     // true - 2 is not equal to 1

// Comparison between a string and a number
console.log("2" > 1);    // true - "2" is converted to number 2, which is greater than 1
console.log("02" > 1);   // true - "02" is converted to number 2, which is greater than 1

// Comparisons involving null
console.log(null > 0);   // false - null is treated as 0 when compared with a number
console.log(null == 0);  // false - null only equals null or undefined, not 0
console.log(null >= 0);  // true - null is treated as 0 in numerical comparisons

// Comparisons involving undefined
console.log(undefined == 0);   // false - undefined is not equal to 0
console.log(undefined === 0);  // false - different types (undefined vs. number)
console.log(undefined > 0);    // false - comparisons with undefined always result in false
console.log(undefined < 0);    // false - comparisons with undefined always result in false

// Strict equality comparison between string and number
console.log("2" === 2);   // false - strict equality checks both value and type (string vs. number)
