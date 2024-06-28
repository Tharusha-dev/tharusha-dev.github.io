let homeNavButton = document.getElementById("nav-home")
let aboutNavButton = document.getElementById("nav-about")
let portfolioNavButton = document.getElementById("nav-portfolio")


let firstNameHeadline = document.getElementById("fname")
let gcloudLogo = document.getElementById("gcloud")
let aboutOuterFirst = document.getElementById("about-item-outer-first")
let activeSection = "home"




let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};

let optionsPortfolio = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};

let optionsAbout = {
    root:null,
    rootMargin: "0px",
    threshold: 1.0,
};

let callbackHome = (entries, observer) => {
   
    entries.forEach((entry) => {
        if(activeSection != "home"){
            activeSection = "home"
            console.log(activeSection)
            homeNavButton.classList.add("active-nav-item")
            aboutNavButton.classList.remove("active-nav-item")
            portfolioNavButton.classList.remove("active-nav-item")
        }
        

        
    });
};

let callbackAbout = (entries, observer) => {
   
    entries.forEach((entry) => {
        if(activeSection != "about"){
            activeSection = "about"
            console.log(activeSection)
            homeNavButton.classList.remove("active-nav-item")
            aboutNavButton.classList.add("active-nav-item")
            portfolioNavButton.classList.remove("active-nav-item")
        }

        
    });
};


let callbackPortfolio = (entries, observer) => {
   
    entries.forEach((entry) => {
        if(activeSection != "portfolio"){
            activeSection = "portfolio"
            console.log(activeSection)
            homeNavButton.classList.remove("active-nav-item")
            aboutNavButton.classList.remove("active-nav-item")
            portfolioNavButton.classList.add("active-nav-item")
        }

        
    });
};



let observerFirstNameHeadline = new IntersectionObserver(callbackHome, options);
observerFirstNameHeadline.observe(firstNameHeadline)


let observerGCloudLogo = new IntersectionObserver(callbackPortfolio, optionsPortfolio);
observerGCloudLogo.observe(gcloudLogo)


let observerAboutStart = new IntersectionObserver(callbackAbout, optionsAbout);
observerAboutStart.observe(aboutOuterFirst)
