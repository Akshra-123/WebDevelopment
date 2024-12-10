console.log(null>0)
console.log(null==0)
console.log(null>=0)

/* this is because comparison operators work differently wrt equal to operator ..comparison operator will treat null as a number 
that is 0 and thus the answer to 3rd one is true
*/

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

/* Strict Check === triple equals to is a strict check which will not only checks the values but also their datatypes */
console.log("2"==2)  //true-as it checks values only
console.log("2"===2) // false-as it will check the datatype also

console.log(null==undefined)

/* When we compare null with any other value it is coerced to 0 and thus comparison takes place but when it is compared with numbers it is not coerced to 0 */