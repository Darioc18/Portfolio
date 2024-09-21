const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    linetop.classList.toggle("bg-white")
    linemiddle.classList.toggle("bg-white")
    linebottom.classList.toggle("bg-white")
})