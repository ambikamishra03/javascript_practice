// p1  use of logical operator

// let age = prompt("Enter your age!")    // this will run in replit
let age = 18;

if (age >= 10) {
  if (age <= 20) {
    console.log(`Your age is ${age}`);
  }
} else {
  console.log("Invalid age");
}
// p2  use of switch case

switch (age) {
  case 10:
    console.log("You are little boy");
    break;
  case 14:
    console.log("You are adult boy");
    break;
  case 18:
    console.log("You are also adult boy");
    break;
  case 20:
    console.log("You are matured boy");
    break;

  default:
    console.log(`Your age is ${age} and you are a good boy`);
    break;
}


// p3 if number is divisible by 2 and 3
// let num = 15;
function check(num) {
    if(num%2 === 0 && num%3 === 0){
        console.log(`${num} is divisible by 2 and 3`)
    }else{
        console.log(`${num} is not divisible by 2 and 3`)
    }
}
// check(5)
check(66)

// p4 if age is valid for drive or not

const ageValid = (value) =>{
  if(value<15){
   console.log(`Your age is ${value} and you can't drive`);
  }
  else if(value>=15 && value <18){
    console.log(`Your age is ${value} and you can drive within range of 15 km from your house.`);
   }
   if(value>=18){
    console.log(`Your age is ${value} and you can drive`);
   }
}

// ageValid(12)
// ageValid(16)
ageValid(24)

