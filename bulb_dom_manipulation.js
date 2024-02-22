// chapter 8

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].style.background = "cyan"


document.getElementById("google").addEventListener("click",function () {
   window.location =  "https://google.com/search?q=javascript"
})
document.getElementById("facebook").addEventListener("click",function () {
    window.location = "https://facebook.com"
    // let url = "https://facebook.com/"
 
    // var win=window.open(url,"","width:500 , height:500,scrollbar:yes,resizable:yes");
    // win.focus();
})
document.getElementById("leetcode").addEventListener("click",function () {
   window.location = "https://leetcode.com"

})

// const fetchContent = async (url) => {
//    con = await fetch(url)
//    let a = await con.json()
//    return a;
// }
// setInterval( async function () {
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//    console.log(await fetchContent(url))
// },3000)


setInterval( async function () {
   document.querySelector("#bulb").classList.toggle("bulb")
},400)



