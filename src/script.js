let navItems = document.getElementsByClassName("nav-item")
let navItemTextBottom = document.getElementsByClassName("nav-item-text-bottom")
let projectImageOverlayWrapper = document.getElementsByClassName("project-image-overlay-wrapper")
let projectImageOverlay = document.getElementsByClassName("project-image-overlay")
let test = document.getElementById("tets") 

navItems[0].addEventListener("mouseover",()=>{
    navItemTextBottom[0].classList.add("nav-item-animate-bottom")
})

navItems[0].addEventListener("mouseout",()=>{
    navItemTextBottom[0].classList.remove("nav-item-animate-bottom")
})

projectImageOverlayWrapper[0].addEventListener("mouseover",()=>{projectImageOverlay[0].style.display = "grid";projectImageOverlay[0].style.pointerEvents = "all"})
projectImageOverlayWrapper[0].addEventListener("mouseout",()=>{projectImageOverlay[0].style.display = "none"})


test.style.pointerEvents