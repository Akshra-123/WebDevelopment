// Immediately Invoked Function Expressions (IIFE)

// global scope ke pollution ko kam krne ke liye hm IIFE ka use krte hai    
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. 
// It helps avoid global scope pollution by creating a private scope for your code.
(function name() {
    // named IIFE with name as name
    console.log("Alia")
})();

( () => {
    console.log("Aksh")
})();

// when we want to pass arguments 
( (name) => {
    console.log(`My name is ${name}`)
})("Lucky");


