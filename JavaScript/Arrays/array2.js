// push and concatenate

arr1 = ['a','b','c','d']
arr2 = [1,2,3,4]

//push
//arr1.push(arr2)
console.log(arr1)

//concatenate
arr_new = arr1.concat(arr2)
console.log(arr_new)

// spread function
const spreadArr = [...arr1,...arr2]  // now it will not consider them as array but takes individual elements
console.log(spreadArr)

// flat 
arr3 = [1,2,3,[4,5,6,[7,8,9]]]
console.log(arr3.flat(Infinity))

// to make an array
console.log(Array.from("Akshra"))

// to check whether there is an array
console.log(Array.isArray(arr2))

console.log(Array.of(arr1,arr2,arr3))