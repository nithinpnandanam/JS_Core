// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Temporal Dead Zone
// Time between a let variable is hoisted and assigned a value
// A Reference error is shown when we try to access a variable in the temporal dead zone 
// Initialse the variables at the top to reduce the problem caused by Temporal Dead Zone

// console.log(a)
// let a
// Reference Eror : cannot access a before initialization
// a is not having value "undefined" but it showing "not available" in a seperate  memory space called "script"
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log(b)
// var b

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// b is attached to the global object called window
// but a is not attached to the global object called window
// a has a seperate memory

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let c
// console.log(c)
// before the above line is executed the value of c is "not available"
// but after its executed c has a value of undefined
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let c
// c=12
// console.log(c)
// c=13
// console.log(c)
// We cannot do the same for const

// const d;
// d = 13
// We will get a "syntax error"

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let e = 13
// e = 'thirteen'
// console.log(e);
// No Error

// const f= 14
// f = 15
// console.log(f)
// Now we get a "type error"
// Assignment to constant variable.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let g = 67;
// let g = 24;
// Redeclaration is not possible
// Syntax Error

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Will "hello" be printed
// console.log("Hello")
// let h = 67;
// let h = 24;

// Nothing will be printed as there is a syntax error

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var i = 56;
// var i = 57;
// In case of var Redeclaration is possible

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var i = 56;
// let i = 57;
// i is in the global scope and j is in the script scope of memory
// redeclaration is not allowed in the same the scope
// let j = 57;
// var j = 56;

// Due to Redeclaration error will be shown
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


