// chapter 12
 
// write hello world (both after 2s delay) 

// console.log("Hello");
// setTimeout(() => {
//     console.time("run")
//     console.log("World")
//     console.timeEnd("run")
// }, 2000);


// using iife 

// const a = (text) =>{
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(text);
//     }, 2000);
//    })
// }

// (async ()=>{
//     let t1 = await a("Hello")
//     console.log(t1);
//     let t2 = await a("World")
//     console.log(t2);
// })()

// average of numbers using spread syntax 


let arr = [1,2,3,4]

const avg = (a,b,c,d) =>{
    return (a+b+c+d)/4;
}

let sum = avg(...arr)
console.log(sum);


// resolve a function after n sec, n is parameter to function and use iife to execute function with defined values of n


const fun = (text,n=2) =>{
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(text);
    }, 1000*n);
   })
}

(async ()=>{
    let t1 = await fun ("Promise resolved using iife ",5)
    console.log(t1);
})()


// simple interest calculator 

function simple(p,r,t) {
    return p*r*t/100;
}

console.log(simple(200,5,1))

