// global scope is when the variable can be used outside a scope also for example 
let a = 12

if (true) {
    let a = 12
    const b = 23
    var c = 34
}

//console.log(a)
//console.log(b)
console.log(c)

// uncomment the print statement and then we will get that the block scope is when we cannot access the variable outside a function