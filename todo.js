// todo app , store todos in local storage

let title = document.getElementById('title')
let desc = document.getElementById('desc')
let todo = document.getElementById('todo')
submit.addEventListener('click',(e) =>{
    e.preventDefault()
    localStorage.setItem('todo',JSON.stringify([title.value,desc.value]))
    console.log(e);
    todo.innerHTML= `
    <h1>Add todos</h1>
    <h4>${title.value}</h4>
    <h4>${desc.value}</h4>
    `
    title.value = ""
    desc.value  = ""
})

delet.addEventListener('click',(e) =>{
    todo.innerHTML= `<h1>Add todos</h1>`
    e.preventDefault()
   localStorage.removeItem('todo')
})