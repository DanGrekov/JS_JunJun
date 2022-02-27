"use strict";
//Home work №5 (task)


//№1
console.log("=====№1=====")

let user = {

    name: 'John',
    surname: 'Smith',

};
console.log(user); //до

user.name = "Pete"

console.log(user); //после


//№2
console.log("=====№2=====");
console.log("Да. Такой способ будет работать.");
//Да. Такой способ будет работать.


//№3
console.log("=====№3=====");

let salaries = {

    John: 100,
    Ann: 160,
    Pete: 130

};

let sum = 0;
for (let salary of Object.values(salaries)) {
    sum += salary;
};
  
console.log('сумма: ',sum);