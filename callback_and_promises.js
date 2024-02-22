
// chapter 9 

// callback 
//  function loadscript(src,callback) {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => callback(script)
//     document.head.append(script)
//  }



//  loadscript('https://cdn.harry.com',(script) =>{
//     alert('script is loaded')
//     alert(script.src)
//  })
  

//  the above loadscript function using promises 

// wap to load a js file in browser using promises, use .then to display alert when load is completed  

const  loadscript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(src)

        }
        document.head.append(script)
    })
   
}
// using .then 

    let a =  loadscript('https://cdn.harry.com')
    a.then((value) =>{
        console.log(value)
    })


// using async await 
// const fun = async () =>{
//     let a = await loadscript('https://cdn.harry.com')
//     console.log(a)
// }

// fun()



// reject the promise after 3 seconds 

let p =() =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This is not accecptable"))
        }, 3000);
    })
} 

let res = async () =>{
try {
    let c =  await p();
    console.log(c);
} catch (error) {
    console.log("This error is handled");
}  }

res()
