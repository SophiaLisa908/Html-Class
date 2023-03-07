// OPERATORS
// They are Symbols that perform a Specific task or operation

// 7 + 7 -> Expression | Operation

// GROUPING OPERATIONS
// Arithematic Operators
// Assignment Operators
// Comparision operators
// Logical operators
// Increment | Decrement Operators

// Arithematic Operators
// they are used to perform simple maths calculation
// types: uniary, binary, tenary
// E.G
// [+] -> Addition, [-] -> Subtraction, [*] -> Multiplication, [/] -> Division, [%] -> Modulus, [**] -> Exponetial

let num1 = 15, num2 = 3

//Addition
let Sum = num1 + num2
console.log("Result Addition = ", Sum)

//Minus
let Difference = num1 - num2
console.log("Result Minus = ", Difference)

//Division
let Quotient = num1 + num2
console.log("Result Division = ", Quotient)

//Multiply
let Product = num1 + num2
console.log("Result Multiply = ", Product)

//Modulus
let Modulus = num1 + num2
console.log("Result Mod = ", Modulus)

// Exponential
let Exponential = num1 ** num2
console.log("Result Exp = ", Exponential)

// LOGICAL OPERATORS
// Logical Operators (they are used to combine multiple conditional expressions)
// They are used to determine the logic or the conditonal expressions between the variables and values.
// Examples
// [&&] logical And:   They return true if both the statements/operands are true and returns false if any of them is false.
let cond1 = 4 == "4"
let cond2 = 4 > 3

result = cond1 && cond2
console.log("AND =>", results) // true

// [||] logical Or,    they return true if any statement/operand is true and returns false if both are false.
// e.g 1
result = cond1 || cond2
console.log("OR =>", results) // true

//e.g 2
cond1 = 4 === "4"
cond2 = 3 > 4

result = cond1 || cond2
console.log("OR =>", results) // false

// [!] logical Not, (unary)   they return the reverse, that is if the statement is true it returns false. or it negates the operand.
let cond = false
result = !cond

console.log("NOT =>", results) // true


// Using Logical operators to asign values to variables
let money = null

let mymoney = money || 5000
console.log("My money =>", mymoney) 

money = 2000
mymoney = money && 5000 && 7000
console.log("My money [And] =>", mymoney) 

//COMPARISM OPERATORS
// Comparism Operators (they compare two operands and return either True or False).
// They are used in logical statements to determine the difference and equality between values and variables.
// Examples
// == equal to
num1 = 4
num2 = 4

result = num1 == num2

console.log("Equal to = ", result) // true

// === equal type or equal value
num1 = "4"
num2 = 4

result = num1 === num2
console.log("Equal value or idential = ", result) // false

// [!=] not equals to
num1 = 4
num2 = 4

result = num1 != num2
console.log("not equal to = ", result) // false

// !== not equal type or equal value
num1 = "4"
num2 = 4

result = num1 !== num2
console.log("not equal value or idential = ", result) // true

// [>] greater than 
num1 = 3
num2 = 4

result = num1 > num2
console.log("Greater than = ", result) // false

//[<]less than
num1 = 3
num2 = 4

result = num1 < num2
console.log("Less than = ", result) // true

// [>=] greater than or equal to
num1 = 4
num2 = 4

result = num1 >= num2
console.log("Greater than or Equal to = ", result) // true

// [<=] less than or equal to
num1 = 4
num2 = 4

result = num1 <= num2
console.log("Less than or Equal to = ", result) // true



//ASSIGNMENT OPERATORS
// [=]
// The combination of assignment operators and arithematic operators gives A COMPOUND ASSIGNMENT OPERATORS

// += -> ADDITION AND ASSIGN
// -= -> SUBTRACTION AND ASSIGN
// *= -> MULTIPLICATION AND ASSIGN
// /= -> DIVISION AND ASSIGN
// %= -> MODULUS AND ASSIGN
// **= -> EXPONENTIAL AND ASSIGN

let number = 5

// += -> ADDITION AND ASSIGN
number += 5
console.log("number = ", number) // 10

// *= -> MULTIPLICATION AND ASSIGN
number = 2
number *= 5
console.log("number = ", result);

// INCREMENT AND DECREMENT
//PRE
// a => a++ --> pre increment
// a => a-- --> pre increment

// POST
//a => ++a --> post increment
//a => --a --> post increment

let a = 5
let b = a++

console.log("A =>", a) //6
console.log("B =>", b) //6

let c = 4
let d = c++

console.log("C =>", c) //5
console.log("D =>", d) //4

// Conditional Statement
// Java has the following conditional statement
// * use if to specify a block of code to be executed, if the condition is true
// * use if else to specify a block of code to be executed, if the same condition is false
// * use else if to specify a new condition to test, if the condition is false
// * use switch to specify many alternative blocks of codes to be executed
// 8 nullish coalesingoperator is a logical operator  that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise return its left-hand side operand.
































// operations is made up of [an operands and operators(operands are values that are beside the operators while operators are signs that determine the value)]


















