"use strict";

//Home work №1 (prompt, alert)

let firstName = prompt('What is your name?', "???");

alert(`Hello, ${firstName}. How are you?`); 

//Home work №2 (Calculator)

const firstVar = prompt('First variable is:');
    console.log(firstVar);
const secondVar = prompt('Second variable is:');
    console.log(secondVar);


const sumResult = +firstVar + +secondVar;
const subResult = firstVar - secondVar;
const multResult = firstVar * secondVar;
const divisionResult = firstVar / secondVar;


alert(`Sum: ${firstVar} + ${secondVar} = ${sumResult}
Subtraction: ${firstVar} - ${secondVar} = ${subResult}
Multiplication: ${firstVar} * ${secondVar} = ${multResult}
Division: ${firstVar} / ${secondVar} = ${divisionResult}`);

