/* Execution context refers to how the javascript code will run and execute

there are three types of execution context 
1) Global Execution Context
2) Function Execution Context
3) Eval Execution Context

how the java script code works?
after writing code 
-memory creation phase
-execution phase
*/

let val1 = 12;
let val2 = 23;

function addnum(val1,val2) {
    console.log(val1+val2)
    return val1+val2;
}

addnum(val1,val2)
addnum(34,45)