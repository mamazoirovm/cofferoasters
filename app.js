const menuBtn = document.querySelector(".gamb")
const menuCloseBtn = document.querySelector(".close")
const Menu = document.querySelector(".gamb-menu")
const header = document.querySelector(".header")
menuBtn.addEventListener("click", ()=> {
    Menu.classList.toggle("menu-toggle")
    
})

menuCloseBtn.addEventListener("click", ()=> {
    Menu.classList.remove("menu-toggle")
})
