/* generate a random number and the program then take a input from user to tell 
them whether guess is correct, greater or smaller , print 100 - no. of guesses as output */

let num = Math.ceil(Math.random() * 100)  // it will always between 100
// console.log(num)

let n = 0
let level = 0
while (n != num) {
  n = prompt("Enter the number")
  level++;
  if (n == num) {
    console.log("Congratulation! You have entered correct number")

  } else if (n < num) {
    console.log("The number entered by you is less than target")
  } else if (n > num) {
    console.log("The number entered by you is greater than target")
  }
}
console.log("Your score is " + (100 - level));
