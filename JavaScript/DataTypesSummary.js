/* Primitive Types
7 types: String , Number , Boolean , Null , Undefined , Symbol(kisi bhi component ko unique bnana hota hai jab) , BigInt

All the primitive datatypes are call by value that means that whenever they are called their actual memory reference is not 
given instead the value is copied and then it is given


Non-Primitive or Reference Types :
Arrays , Objects , Functions

Statically typed languages are those where I have to specify the data type while dynamically typed are those where
there is no need to specify the data type earlier. 
Thus , Js is a dynamically typed language. 
*/

id = Symbol('123')
anotherId = Symbol('123')

console.log(id==anotherId);

// Array
array = [1,2,3,4]

// objects
object = {
    name:"Akshra",
    Class:5
}

// Functions
myFunction = function(){
    console.log("Hello World")
}