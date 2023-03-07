//let_currency = "USD"

// Datatypes in javascript

// -scalar | primitive data types
// -string -> "", '', ``
// -number -> 1, 2, 3 
// -boolean -> true/ false

// Composite | non primitives data types
// -arrays -> ["marry", "john"]
// -objects { key: value,....}
// -functions -> () => {}

//Extras
// -null
// -undefined

// STRINGS
const personName = "John" // double quote
const personNameAlt = 'John' //single quote
const personNameAltAlt = `John` //back-ticks 

console.log("STRING => ", typeof personNameAltAlt)

//NUMBERS
const personNumber = 1  //i
const personNumberAlt = 3.8 // float | double
const personNumberExp = 1e3// exponential notations
const personNumberHex = 0xa// hexadecimal notations [a-10, b=11, c=12, d=13, e=14, f=15]

console.log("NUMBERS => ", typeof personNumberAlt)

//Boolean
const isTrue = true //Boolean
const isFalse = false //Boolean

console.log("BOOLEAN => ", typeof isTrue)

//Arrays
const names = ["John", "Mary", "Tyndale", "Moses"]
const mixed = [true, "Name", 123, ["name"]]

console.log("ARRAYS => ", typeof names)

//Objects
const human = {
    head: 1,
    complextion: ["fair", "dark"],
    mortal: true
}

console.log("OBJECT => ", typeof human)

//Function
//ES5
function myfunc () {
    console.log("myfunc")
}

console.log("Myfunc => ", typeof myfunc)

// Execute | Invoke | Call
myfunc()

//ES6
//Arrow function syntax
//this
const myfuncAlt = () => {
    console.log("myfuncAlt")
}

console.log("FUNCTIONS => ", typeof myfuncAlt)

//myfuncAlt()

// Null
const isNull = Null // means: absense of value

console.log("NULL => ", typeof isNull)

// Undefined
const isUndefined = undefined // it means not created

console.log("UNDEFINED => ", typeof isUndefined)

////typeof -> returns type of value a variable holds

