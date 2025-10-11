// Dates

let myDate = new Date()
console.log(myDate.toString()); //  This representation of a date.
console.log(myDate.toISOString()); // Return a date as a string value in iso format
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date("2023-01-14")
console.log(myCreatedDate1.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);

console.log(myCreatedDate1.getTime());

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})