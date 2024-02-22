// p1 print age of student from an object using for loop

let obj = {
    ambika: 25,
    saurabh: 23,
    nidhi: 27,
    mithi: 43,
    vaibhav: 30,
}

// using simple loop 
// for(let i=0;i<Object.keys(obj).length;i++){
//      console.log(i) // this will print index 

//     console.log("The mark of "+ Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]])
// }


// using for...in loop 
for(let i in obj){
    // console.log(i) // this will print key 
    console.log(obj[i]) // this will print value 
}

// p2 mean of ages

// let sum =0;
// for(let i in obj){
//     sum +=obj[i];
// }
// console.log(sum/Object.keys(obj).length)

const mean = (a,b,c,d) => {
 return a+b+c+d/4;
}
let res= mean(1,2,3,5)
console.log(res)


