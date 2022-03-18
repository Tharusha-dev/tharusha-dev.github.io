let navItems = document.getElementsByClassName("nav-item")
let navItemTextBottom = document.getElementsByClassName("nav-item-text-bottom")

navItems[0].addEventListener("mouseover",()=>{
    navItemTextBottom[0].classList.add("nav-item-animate-bottom")
})

navItems[0].addEventListener("mouseout",()=>{
    navItemTextBottom[0].classList.remove("nav-item-animate-bottom")
})