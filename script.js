// strict mode
"use strict";



const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.5: bill * 0.2
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips =[]
const totals = []


for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i])
  tips.push(tip);
  totals.push(tip + bills[i])
}

console.log("bills",bills, "tips",tips, "totals",totals)
// for (let rep = 1; rep <= 10; rep++){
//   console.log(`lifting wights repetition ${rep}`)
// }

// let rep = 1
// while (rep <= 10){
//   console.log(`lifting weight repititon ${rep}`);
//   rep++
// }


// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6){
//   console.log(`you rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`loop is about to end...`)
// }



// const jonathan = {
//   firstName: "jonathan",
//   lastName: "Bleibdrey",
//   height: "6'0",
//   weight: "185",
//   age: "35",
//   job: "million dollar artist"
// }
// const jonsArray = ["jonas", "bleibdrey", 2037-1991, 'teacher', ['micheal','micheal',"jackson", 'geof']]

// for (let i = jonsArray.length - 1; i >= 0; i--){
//   console.log(i, jonsArray[i])
// }

// for (let exercise = 1; exercise < 4; exercise++){
//   console.log(`------------------starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++){
//     console.log(` excersise ${exercise} lifting weight rep ${rep}`)
//   }
// }

// console.log()

// //for loop will keep running while condition is true
// const newArray = []

// const years = [1919, 1920, 1930, 1940, 2020]
// const newYears= []



// for(let i = 0; i < jonsArray.length; i++){
//   if(typeof jonsArray[i] !== 'string') continue;
  
//   // newYears.push(2037 - years[i])
//   // newArray.push(jonsArray[i])
// }

// console.log(newYears)




// const jonsArray = {

//   firstName: "jonathan",
//   lastName:  "Bleibdrey",
//   age:   2037-1987,
//   job: 'teacher',
//   friends: ["micheal", "peter", "jack"]
  
// }

// const interestedIn = prompt("what do yo want to know wabout me? first name, last name, age, job, freinds name?")

// if (jonsArray[interestedIn]){
//   console.log(jonsArray[interestedIn])
// } else {
//   console.log('woops wrong answer')
// }



// console.log(jonsArray['twitter'] = '@funfunbugs')

// console.log(jonsArray)
// console.log(jonsArray.friends[1])

// const nameKey = 'Name'

// console.log(`${jonsArray['firstName']} has ${jonsArray.friends.length}, and his best friend is called ${jonsArray.friends[0]}`)

// const bill = 100

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.5: bill * 0.2
  
// }

// const bills = [125,555,44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] +tips[0], bills[1] +tips[1], bills[2] +tips[2]]
// console.log(tips, totals)


// const funArray = ['CACA','tommy', "ben", 'jack']

// // add
// const name1 = funArray.push("tomas")
// funArray.unshift("jon")

// // remove
// funArray.pop()

// funArray.unshift()

// console.log(name1)
// console.log(funArray)

// const friends= ["peter", 'micheal', 'steve']
// console.log(friends)


// const freind1 = "micheal"
// const freind2 = "steven"

// console.log(friends[0])
// console.log(friends.length)
// console.log(friends[friends.length-1])

// friends[2]='jon'

// const jonathan = ["Jonathan", 'bleibdrey', 20 - 16, 'teacher', friends]
// console.log(jonathan)

// //excersize

// const calcAge = function (birthyear){
//   return 2037 - birthyear;
// }

// const years = [1990, 1987,1967, 1957]

// console.log(calcAge(years[]))

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