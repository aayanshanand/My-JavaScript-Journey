const accountId = 23456
let accountEmail = "aayanshanand11@gmail.com"
var accountPassword = "Hello"
accountCity = "Hajipur"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);