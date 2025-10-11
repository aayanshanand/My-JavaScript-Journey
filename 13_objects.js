// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aayansh",
    "full name": "Aayansh Anand",
    [mySym]: "mykey1",
    age: 22,
    location: "Punjab",
    email: "aa@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)

JsUser.email = "aayaa@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "crazy@gpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());
