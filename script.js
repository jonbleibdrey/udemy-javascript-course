// truthy & falsy values
// falsy values:
// 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log("hello big \n boy");

const money = 100;

if(money){
  console.log("dont spend your money")
} else{
  console.log('you should get a job')
}

if(money != 0){
  console.log('we got money')
} else {
  console.log(" no we dont have money")
}


// type conversion
// const inputYear = Number("1991");
// console.log(inputYear);

// const inputStringYear = String(1990);
// console.log(inputStringYear);
// type coercion

// console.log("I am " + 23 + " years old");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// const birthYear = 2021;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// let js = "amazing";
// // if (js === "amazing") alert("fun times bitches");

// console.log(40 + 8 + 23 + 56);

// let firstName = "Bob";
// let first = "jonathan";

// console.log(firstName);

// let country = "america";
// let continent = "north america";
// let population = "1 billion";

// const isIsland = country;
// console.log(typeof true);

// if (isIsland === "america"){
//   console.log(true);
// } else {
//   console.log(false);
// } ;

// BMI = mass/height ** 2 = mass/ (height * height) (mass in kg and height in meter )

// const markHeight = 1.69
// const markWeight = 78
// const johnWeight = 92
// const johnHeight = 1.95

// const markConversion = Math.floor(markWeight / markHeight ** 2)
// const johnConversion = Math.floor(johnWeight / johnHeight ** 2)

// if (markConversion > johnConversion){
//   console.log(`mark has a higher bmi at ${markConversion}, then jon at  ${johnConversion}`)
// } else {
//   console.log(`john has a higher bmi at  ${johnConversion}, then mark at  ${markConversion}`)
// }

// const firstName = "Jonathan" ;
// const job = "teacher";

// const nameAndJob = "I'm " + firstName + " i am, an " + job ;

// console.log(nameAndJob)
// const age = 17

// if(age >= 18){
//   console.log( "horray your old")

// } else{
//   const yearsLeft = 18 - age
//   console.log( `you are not old enough you have ${yearsLeft} year left, before of age.`)
// }
