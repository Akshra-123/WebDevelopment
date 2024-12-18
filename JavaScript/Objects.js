// Constructors are of singleton type while the literals are not singleton

// object literals

const MySymbol = Symbol("key1")
// we can add a symbol into a object using square braces if done simply then the data type of symbol variable will be string and not symbol
const user = {
    name: "Alia",
    age: 23,
    Address: "Kaithal",
    [MySymbol]: "key1"
}
/*
console.log(user)
// accessing values
console.log(user.Address)
// second method
console.log(user["Address"])
*/
// Changing values
user.Address="Haryana"
console.log(user)

//Object.freeze(user) // cannot make changes now
user.Address="Harikund"
console.log(user)

// Creating Function
user.greeting = function() {
    console.log(`Hello User ${this.name}!!`)
}

console.log(user.greeting())