// when we are unsure about th number of parameters
// ... this works as both rest and spread operator
function func(...num) {
    return num
}

console.log(func(12,23,34,45))

// accessing objects inside function
const user = {
    username: "Alia",
    price: 200
}

function func_1(anyobject) {
    console.log(`user ${anyobject.username} has a total amount of ${anyobject.price}`)
}

func_1(user)

// accessing array
const array_1 = [12,23,34,45]

function array_func(anyarray) {
    console.log(anyarray[1])
}

array_func(array_1)