let score = 33
let score1 ="33"
let score2 = "33abc"
console.log(typeof(score))
console.log(typeof(score1))

// String to number conversion
let num = Number(score1)
console.log(typeof(num))
console.log(num)

let num2 = Number(score2)
console.log(typeof(num2))
console.log(num2)   // Though the string will be converted to number but this time it's value is NaN (not a number)

let num3 = Number(null)
console.log(typeof(num3))
console.log(num3)   /* it converts it into 0 but problem will occur when suppose we are talking about temperature then 0 also
                     corresponds to a temperature and it will cause problems */

let num4 = Number(undefined)
console.log(typeof(num4))
console.log(num4) 

let num5 = Number(true)
console.log(typeof(num5))
console.log(num5) 

let num6 = Number(false)
console.log(typeof(num6))
console.log(num6) 

// to boolean conversion
let num7 = Boolean(123)
console.log(typeof(num7))
console.log(num7) 

let num8 = Boolean(0)
console.log(typeof(num8))
console.log(num8) 

let num9 = Boolean("abc")
console.log(typeof(num9))
console.log(num9) 

let num10 = Boolean("")
console.log(typeof(num10))
console.log(num10) 

// to string conversion
let num11 = String(33)
console.log(typeof(num11))
console.log(num11) 

let num12 = String(true)
console.log(typeof(num12))
console.log(num12) 