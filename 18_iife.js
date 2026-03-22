// Immediately invoked Function Expressions (IIFE)

function chai (){
    console.log(`DB CONNECTED`);
}
chai();

(function chai1 (){
    console.log(`DB CONNECTED`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TOO ${name}`);
} ) ('aayansh')