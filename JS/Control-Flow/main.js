// CONTROL FLOW
// They are statement that control the flow of the program . and it's used in decision making.

// SIX STATEMENTS
// - IF
// - IF...ELSE
// - IF...ELSE IF...ELSE
// - SWITCH CASE
// - TENARY OPERATORS [?]
// - NULLISH COALESCING [??]

// IF
//They are used to run some block of codes, if the specified condition returns true.

// SYNTAX
// if (condition){// codes.....}

const age = 12

if (age >= 18) {
    console.log("YOU HAVE ACCESS")
}

// IF....ELSE
// The ELSE is nused to run some block of code if the condition in the IF statement returns false

// SYNTAX

if (age >= 18) {
    console.log("YOU HAVE ACCESS")
}
else{
    console.log("YOU DON'T HAVE ACCESS")
}

// CLASSWORK

const Gender = "Female"

if (Gender == "Female") {
    console.log("you are a Girl")
}
else{
    console.log("you are a Boy")
}

// IF...ELSE IF...ELSE
// The ELSE IF is used to add an additinal condition to the if statement. There can be as many ELSE IF blocks as your program needs.

// SYNTAX

const time = 12

if (time >= 0 && time < 12) {
    console.log("GOOD MORNING")
}
else if (time >= 12 && time < 16){
    console.log("GOOD AFTERNOON")
}
else if (time >= 16 && time < 24){
    console.log("GOOD EVENING / NIGHT")
}
else{
    console.log("PLEASE ENTER A VALID TIME")
}

// CLASS WORK
 
const score = 49

if ( score >= 70  && score <= 100){
    console.log("GRADE: A")
} 
else if ( score >= 60 && score <= 69){
    console.log("GRADE: B")
} 
else if ( score >= 50 && score <= 59){
    console.log("GRADE: C")
}
else if ( score >= 40 && score <= 49){
    console.log("GRADE: D")
}
else if ( score >= 30 && score <= 39){
    console.log("GRADE: E")
}
else if (  score < 29){
    console.log("GRADE: F")
}

// SWITCH CASE
// it is used to TEST the valu e and run some block of code if the value matches any of the options specified in the CASE block;

const gradee = "A"

switch (grade) {
    case "A":
        console.log("REMARK: DISTINCTION")
        break;

    case "B":
        console.log("REMARK: VERY GOOD")
        break;

    case "C":
        console.log("REMARK: CREDIT|GOOD")
        break;

    case "D":
        console.log("REMARK: PASS")
        break;

    case "E":
        console.log("REMARK: FAIR")
        break;

    case "F":
        console.log("REMARK: FAIL")
        break;
        default:
            console.log("YOU ARE NOT PART OF THIS COURSE!!")
            break;
}














