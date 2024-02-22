// hackerman


let arr = [
    "Initializing hacktools...",
    "Connecting to Instagram...",
    "Connecting to server 1...",
    "Connection failed. Retrying..........",
    "Connecting to server 2...",
    "Connection successfull...",
    "Username nidhi121299...",
    "Trying Brute force...",
    "200k passwords tried.........",
    "Match not found...",
    "Another 200k passwords tried........",
    "Match found...",
    "Accessing account...",
    "Hacked Nidhi Mishra's account Succesfully!."

]

const sleep = async (seconds) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds*1000);
    })
}

const showHack = async (message) => {
    await sleep(2)
    console.log(message);
    text.innerHTML = text.innerHTML + message +"<br/>"
}

(async () =>{
   for(let i=0;i<arr.length;i++){
    await showHack(arr[i]);
   }

})()

// setTimeout(() => {
//        window.location = 'https://google.com'
// }, 30000);

