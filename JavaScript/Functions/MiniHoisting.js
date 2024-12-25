//Hoisting is JavaScript's default behavior of moving declarations (but not initializations) to the top of their scope
//  before code execution.


// here the function is defined 
console.log(one(2))
function one(num) { 
    return num+1
    console.log(num+1)
}


//this is also a function but it can be said as an expression also
console.log(two(3))
const two = function(num) {
    return num+2
    console.log(num+2)
}
