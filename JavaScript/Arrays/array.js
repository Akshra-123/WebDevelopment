/* whenever we copy an array a shallow copy is created which means the reference to the actual object is given and 
changes are made in the actual array only.
there are two types of copies : Shallow and Deep : In deep a refernce object is created and changes are not made in actual array
*/

// Declaration of Array
// Method 1
const MyArray = [6,5,4,3,2,1]
console.log(MyArray)

// Method 2 
const myarr2 = new Array(2,3,4,5,6)
console.log(myarr2)

// Array Methods
myarr2.push(3)
console.log(myarr2)

myarr2.pop()
console.log(myarr2)

myarr2.unshift(2)
console.log(myarr2)

myarr2.shift()
console.log(myarr2)

myarr2.shift()
console.log(myarr2)

console.log(myarr2.includes(3))
console.log(myarr2.indexOf(34))

const newarr = myarr2.join()
console.log(newarr)

console.log(typeof myarr2)
console.log(typeof newarr)

// difference between slice and splice
console.log("A" , MyArray)
console.log(MyArray.slice(1,3))
console.log("B" , MyArray)
console.log(MyArray.splice(1,3))
console.log("C" , MyArray)

/* the main difference between slice and splice is that in slice the original array does not get affected 
while in splice the original array also gets affected  */