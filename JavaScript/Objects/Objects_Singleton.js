
const singleton_Object = new Object();
console.log(singleton_Object)

const normal_object = {};
console.log(normal_object)

// object assign
const obj1 = {a:"1",b:"2"}
const obj2 = {c:"3",d:"4"}

const obj3 = {obj1 , obj2}
console.log(obj3)

const obj4 = Object.assign(obj1 , obj2) // mutates obj1 and by copying all values from obj2 to obj1
console.log(obj4)
console.log(obj1)


const obj5 = Object.assign({},obj1,obj2) // a new empty object {} is created as the target
console.log(obj5)

const obj6 = {...obj1,...obj2} // assignment can be done using spread also
console.log(obj6)



const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "I@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    }
]

console.log(user[1].email)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(obj1.hasOwnProperty('a'))