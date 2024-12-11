/* Primitive Types
7 types: String , Number , Boolean , Null , Undefined , Symbol(kisi bhi component ko unique bnana hota hai jab) , BigInt

All the primitive datatypes are call by value that means that whenever they are called their actual memory reference is not 
given instead the value is copied and then it is given


Non-Primitive or Reference Types :
Arrays , Objects , Functions */

/* All the primitive data types are stored in Stack and non-primitive ones are stored in heap memory.
if the storage is in stack then we will get the copy of the object but in heap we will get the reference to real object
*/

let name = "Alia"
console.log(name)

name1=name
name1="Aakash"
console.log(name1)

// as we can see in case of primitive data types the exact name is not changed when we call it at another place 

// Let's go for non-primitive types 

let user = {
    email: "user@gmail.com",
    name: "user"
}

console.log(user.email)

let user2=user
user2.email= "aksh@gmail.com";

console.log(user.email);
console.log(user2.email);

// here both the new object and the previously created one get chnged

// ++++++++++++++++++++++
/* Primitives - Stack Memory (yha toh hm jo variable bnaenge uski ek copy milegi when we want to use in future)
   Non-primitives - Heap Memory (yha pr actual object ka reference milega and phir ussi mein changes honge)
*/

let naam = "Alia"
naam1 = naam
naam1 = "AkG"
console.log(naam)
console.log(naam1)      // In this case the value is stored in stack and so copy is provided

let user1 = {
    username: "user1",
    email: "user1.gmail" 
}

user2 = user1;
user2.email = "akg@gmail.com"
console.log(user1)
