
let arr = [1,2,3,5,7,10,6,12]

// map 
const arr1 = arr.map((element)=>{
    return element*element;
})

console.log(arr1) 

// filter 
const arr2 = arr.filter((element) =>{
  return element%2==0
})
console.log(arr2) 

// reduce

let newArr = [1,2,3]

const num = newArr.reduce((acc,value) =>{
    return acc + value
  })
  console.log(num) 

