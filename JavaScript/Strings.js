const name = "Akshra"
const passion = "Painting"

console.log(name  + passion + "!!")
console.log(name , passion , "!!")

// String Interpolation
console.log(`Hello Everyone My name is ${name} and my passion is ${passion}`)

// String Declaration
const name1 = new String("Akshra") // here string will act as an object having properties like length and many more 
console.log(name1)
console.log(name1.length) // getting the length
console.log(name1[5])
console.log(name1.charAt(3))
console.log(name1.indexOf('A'))
console.log(name1.substring(0,4))
console.log(name1.slice(-6,3))

const newstring = new String("    Hello   ")
console.log(newstring)
console.log(newstring.trim())  //removes white spaces

const url = "https://akg2034//%2werq"

console.log(url.replace('%2','ItsMe'))

console.log(url.includes("akg"))

name2 = "Hello-Everyone-How-are-you"
console.log(name2.split('-'))