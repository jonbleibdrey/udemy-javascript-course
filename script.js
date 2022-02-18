// strict mode
"use strict";

const friends= ["peter", 'micheal', 'steve']
console.log(friends)

const years = new Array(1991, 1984, 2008,2020)
console.log(years)

const freind1 = "micheal"
const freind2 = "steven"

console.log(friends[0])
console.log(friends.length)
console.log(friends[friends.length-1])


// function logger(){
// console.log("my name is jonathan")
// }

// // calling/ running / invoking a function


// function cutFruitPieces(fruit){
//   return fruit * 4
// }

// function fruitProcessor(numApples, numOranges){

//   const applePieces = cutFruitPieces(numApples)
//   const orangePieces = cutFruitPieces(numOranges)

//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`

//   return juice
// }

// // console.log(fruitProcessor(2,4))



// //function declaration
// // you can call it before declaring the function
// const age1 = calcAge1(1987)

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// // console.log(age1)

// //function expression
// const calcAge2 = function (birthYear){
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1987)

// // console.log(age1 , age2)

// //arrow function

// const calcAge3 = birthYear => 2037 - birthYear

// // console.log(calcAge3(1987))

// const calcAge = function(birthYear){
//   return 2037 - birthYear;
// }

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age;

//   if(retirement > 0){
//     return `${firstName} retires in ${retirement}`
//   } else {
//     return "you already retired"
//   }

 
// }

// console.log(yearUntilRetirement(1987, "jonathan"))
// console.log(yearUntilRetirement(1950, "Bob"))



// const checkWinnerFun = (avgDolphins,avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
//   } else if (avgDolphins <= 2 * avgKoalas) {
//     console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
//   } else {
//     console.log(`no one wins`)
//   }
  
// }

// const calcAverage = (score1,score2,score3) => {
//   const avgDolphins = (44+23+71) / 3
//   const avgKoalas = (65+54+49) / 3
//   const checkWinner = checkWinnerFun(avgDolphins, avgKoalas)

//   return checkWinner

// }

// const answer = calcAverage()

// console.log(answer)