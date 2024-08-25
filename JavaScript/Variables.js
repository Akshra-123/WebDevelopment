const accountId = 12345  // const variable is for declaring constant variables which means their values cannot be changes in the future 
let accountEmail = "alia123@gmail.com" 
var accountPassword = "12234"
accountCity = "Kaithal"  // variable can also be declared without declaring the datatype 
let accountState;  // not compulsary to give value 

/* there are two ways of declaring variables let and var but var is not prescribed because of the issue of block scope
mtlb ki agr kisi variables ka name same hai and ek mein changes kiye toh dono mein ho jyega but let mein essa nhi hota   */

// we can use console.log also but then we have to write for each separately 
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
