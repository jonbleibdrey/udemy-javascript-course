// strict mode
"use strict";

function logger(){
console.log("my name is jonathan")
}

// calling/ running / invoking a function
logger()

function fruitProcessor(apples, oranges){
  console.log(apples, oranges)
  const juice = `juice with ${apples} apples and ${oranges} oranges`
  return juice
}

const appleJuice = fruitProcessor("green apples", "purple ornages")

console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice)

//function declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1987)
console.log(age1)

//function expression
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}

const age2 = calcAge2(1987)

console.log(age1 , age2)