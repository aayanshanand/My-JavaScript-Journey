const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
// console.log(myTotal);

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
    itName: "js course",
    price: 2999,
    },
    
    {
    itName: "java course",
    price: 3999,
    },
    
    {
    itName: "python course",
    price: 4999,
    },
    {
    itName: "ruby course",
    price: 5999,
    },
    {
    itName: "cpp course",
    price: 6999,
    },
    
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
