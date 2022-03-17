let navItemsBottom = document.getElementsByClassName("header-link-bottom")
let navItemsTop = document.getElementsByClassName("header-link-top")
let frontendBackendTextContainerTop = document.getElementById("frontend-backend-text-container")
let frontendBackendTextContainerBottom = document.getElementById("frontend-backend-text-container-back")


navItemsTop[0].addEventListener("mouseover",()=>{
    
    navItemsTop[0].classList.add("navItemAnimateTop");
    navItemsBottom[0].classList.add("navItemAnimteBottom");console.log("e")
    
})

navItemsTop[0].addEventListener("mouseout",()=>{
    navItemsTop[0].classList.remove("navItemAnimateTop");
    navItemsBottom[0].classList.remove("navItemAnimteBottom");console.log("ee")
})


navItemsTop[1].addEventListener("mouseover",()=>{
    
    navItemsTop[1].classList.add("navItemAnimateTop");
    navItemsBottom[1].classList.add("navItemAnimteBottom");console.log("e")
    
})

navItemsTop[1].addEventListener("mouseout",()=>{
    navItemsTop[1].classList.remove("navItemAnimateTop");
    navItemsBottom[1].classList.remove("navItemAnimteBottom");console.log("ee")
})


navItemsTop[2].addEventListener("mouseover",()=>{
    
    navItemsTop[2].classList.add("navItemAnimateTop");
    navItemsBottom[2].classList.add("navItemAnimteBottom");console.log("e")
    
})

navItemsTop[2].addEventListener("mouseout",()=>{
    navItemsTop[2].classList.remove("navItemAnimateTop");
    navItemsBottom[2].classList.remove("navItemAnimteBottom");console.log("ee")
})


frontendBackendTextContainerTop.addEventListener("mouseover",()=>{
    frontendBackendTextContainerTop.classList.add("frontendBackendTextAnimateTop")
    frontendBackendTextContainerBottom.classList.add("frontendBackendTextAnimateBottom")

})

frontendBackendTextContainerTop.addEventListener("mouseout",()=>{
    frontendBackendTextContainerTop.classList.remove("frontendBackendTextAnimateTop")
    frontendBackendTextContainerBottom.classList.remove("frontendBackendTextAnimateBottom")

})

// console.log(navItemsTop.length)
// console.log(navItemsTop)