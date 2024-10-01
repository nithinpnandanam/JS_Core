"use strict"
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// this keyword behaves very differently in different circumstances
// if its in a function it will behave differently
// if its in a global space it will behave differently
// if its in an arrow function it will behave differently

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(this)
// the value of this in global space is global object
// in case of browsers the global object is called window
// in nodejs the value of global object is global
// the value of the global object is different in different javascript runtime environment
// 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function x(){
    console.log(this)
}
x()
window.x()

// the value of this inside a function is undefined
// but in non strict mode "this substitution" happens
// so this will be assigned the value of the global object

// the value of this also depends on how the function is called. x() and window.x() yield different result

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// this inside an objects method

// when a function is part of an object its called a method
const obj1 = {
    a:10,
    b:function(){
        console.log(this)
    }
}

obj1.b()
// this refers to obj1
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>d
// this is used differently for call apply and bind
// call
const obj2 = {
    name : "Chandler",
    printName:function(param1,param2){
        console.log(this.name+' '+param1+' '+param2)
    }
}
const obj3 ={
    name :"Monica"
}
obj2.printName.call(obj3,"arg1","arg2")
// apply
obj2.printName.apply(obj3,["arg1","arg2"]) 
// bind
const bindOutput = obj2.printName.bind(obj3,"arg1","arg2")
bindOutput()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// this in arrow function
  
// arrow function does not have their own this binding
// this takes the value of the lexical environment in which they are enclosed
const obj4 = {
    a:10,
    x:()=>{
        console.log("this in arrow fn",this)
    }
}
obj4.x()

const obj5 = {
    a:11,
    x:function(){
        console.log("*",this)
        const y = () => {
            console.log("this in arrow fn",this)
        }
        y()
    }
}
obj5.x()
// Remember when we try to find the value of the lexical environment look for the place where it is invoked
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// this in DOM => refers to the html element
// button element itself is the value of this
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
