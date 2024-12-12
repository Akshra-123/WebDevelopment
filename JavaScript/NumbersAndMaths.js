const a = 100
console.log(a.toFixed(1)) // number of digits after the decimal 

const b = 123.657
console.log(b.toPrecision(4)) 
// this method will round off the given digit upto the number of digits like here it is upto 4 digits and round off the remaining

console.log(Math.random())
// returns random value between 0 and 1

// to change the range 
const max = 10
const min = 20

console.log(Math.floor(Math.random() * (max-min+1) + min))
