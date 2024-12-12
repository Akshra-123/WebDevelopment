// Date

let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(typeof date)

// we can create our own date also
let myCreatedDate = new Date(2024,0,12)
// we can specify the time also
let newDate = new Date(2024, 3, 23 , 5 , 3, 2)
console.log(myCreatedDate.toDateString())
console.log(newDate.toLocaleString())

// Time Stamp
let mytimestamp = Date.now()
console.log(mytimestamp)
