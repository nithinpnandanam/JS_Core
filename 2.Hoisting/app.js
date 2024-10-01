// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is the defenition of hoisting ?

// Its a phenomenon in js by which we can accees the variables and functions even before you have initialised it.
// We can acces without any error.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Predict the output

// let x = 6;
// function showResult(){
//     console.log("Result")
// }

// console.log(x)
// showResult()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Predict the output
// This can be considered as an example for hoisting 
// no error is produced

// console.log(x)
// showResult()

// var x = 6;
// function showResult(){
//     console.log("Result")
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Predict the output

// console.log(x)
// showResult()


// function showResult(){
//     console.log("Result")
// }

// ReferenceError: x is not defined
// x is not present in the global scope
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Predict the output

// console.log(ab) 
// showResult()

// let ab = 6;
// function showResult(){
//     console.log("Result")
// }

// ReferenceError: Cannot access 'x' before initialization
// the variable ab is not in the global scope but in scope called "script".
// in the script memory its given <value unvaailable>
// this happens because let is used
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Predict the output

// console.log(x) 
// showResult()

// var x = 6;
// var showResult = () => {
//     console.log("Result")
// }

// in case of arrow functions showResult will be having value of undefined in the memory creation phase.
// "showResult is not a function" error is shown

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


