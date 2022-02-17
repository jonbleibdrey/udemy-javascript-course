// strict mode
"use strict";

function logger(){
console.log("my name is jonathan")
}

// calling/ running / invoking a function


function cutFruitPieces(fruit){
  return fruit * 4
}

function fruitProcessor(numApples, numOranges){

  const applePieces = cutFruitPieces(numApples)
  const orangePieces = cutFruitPieces(numOranges)

  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`

  return juice
}

console.log(fruitProcessor(2,4))



//function declaration
// you can call it before declaring the function
const age1 = calcAge1(1987)

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

// console.log(age1)

//function expression
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}

const age2 = calcAge2(1987)

// console.log(age1 , age2)

//arrow function

const calcAge3 = birthYear => 2037 - birthYear

// console.log(calcAge3(1987))

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age
  return `${firstName} retires in ${retirement}`
}

console.log(yearUntilRetirement(1987, "jonathan"))

