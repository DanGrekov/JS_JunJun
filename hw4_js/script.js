"use strict";
//Home work №4 (task)

let inquiry = prompt('What action to take: add, sub, mult, div')

const firstVar = prompt('First variable is:');
    console.log(firstVar);
const secondVar = prompt('Second variable is:');
    console.log(secondVar);


if(inquiry === sub){
    const result = firstVar - secondVar;
}

if(inquiry === mult){
    const result = firstVar * secondVar;
}

if(inquiry === div){
    const result = firstVar / secondVar;
}


alert(`result: ${result}`);

