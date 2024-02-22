// wap using promise.all() inside async await to await 3 promises ,compare its result with the case where we await these promises one by one


let p1 = async () =>{
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100)
    }, 1000);
   })
}

let p2 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
        }, 2000);
    })
 }

 let p3 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(300)
        }, 3000);
    })
 }





//  this all will take 6 sec , sum of all times
// const run = async () =>{
//     console.time("run")
//    let a1 = await p1()
//    console.log(a1);
//    let a2 = await p2()
//    console.log(a2);
//    let a3 = await p3()
//    console.log(a3);
// //    console.log(a1,a2,a3);
//    console.timeEnd("run")
// }

// run()



// using promise.all(), it will take only 3 sec(greatest time will taken)

const run1 = async () =>{
   console.time("run1")
   let a1 = p1()
   let a2 = p2()
   let a3 = p3()

   let a = await Promise.all([a1,a2,a3])
   console.log(a);
   console.timeEnd("run1")
}

run1()


