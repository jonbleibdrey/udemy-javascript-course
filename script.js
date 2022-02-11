// strict mode
"use strict";

function logger(){
console.log("my name is jonathan")
}

// calling/ running / invoking a function
logger()

function fruitProcessor(apples, oranges){
  console.log(apples, oranges)
  const juice = `juice with ${apples}  and ${oranges}`
  return juice
}

const appleJuice = fruitProcessor("green apples", "purple ornages")

console.log(appleJuice)