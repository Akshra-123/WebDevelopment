// this keyword - used to refer to current context

const user = {
    username: "Alia",
    password: 1234,

    welcome_message: function() {
        console.log(`${this.username} , Welcome Sir/Mam`)
    }
    }

console.log(user.welcome_message())

// arrow function

// syntax of arrow function
// explicit return i.e when return keyword is used
const arrow_func = (num1 , num2) => {
    return num1 + num2;
}
console.log(arrow_func(2,3))

// implicit return i.e when return keyword is not used 
const add_two = (num1 , num2) => num1 + num2

console.log(add_two(3,4))

/* curly braces use honge toh return keyword use hoga but if I use directly without any parenthesis or if I use parenthesis 
then there is no need of return keyword */

// the main use of parenthesis is when we have to return objects 

const name = () => ({username:"Alia"})
console.log(name()) 
