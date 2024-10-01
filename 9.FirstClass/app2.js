let a = 10
b()
let b = function fn1(){
    console.log("Hello World")
}

// b is in the temporal dead zone
// Once a variable is hoisted and assigned a value we can use that
// before doing so we cannot access it , then we say that the variable is in the temporal dead zone
