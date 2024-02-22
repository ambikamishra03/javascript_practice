// chapter 5 

// p1 add number to array
let num = [1,2,5,6]

// let n = prompt("Enter the number")
// n = Number.parseInt(n)
// num.push(n)

// console.log(num)


// p2 add number until user doesn't input 0

let n 
  do{
n=prompt("Enter the number")
n = Number.parseInt(n)
num.push(n)
  }while(n!=0)
console.log(num)



//  p3 filter number that are div by 10
let arr1 = num.filter((element) => {
    return element % 10 == 0
  })
  console.log(arr1)


//   p4 return sqaure array (map)

let arr2 = num.map((ele) =>{
    return ele*ele
})
console.log(arr2)


// p5 given array of n natural numbers, calculate factorial(reduce)
let fact = [1, 2, 3, 4, 5]
let res = fact.reduce((x1, x2) => {
  return x1 * x2
})
console.log(res)