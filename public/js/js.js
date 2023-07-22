let moreBlock = document.getElementById("moreBlock")
let aboutSite = document.getElementById("aboutSite")
let aboutSiteSpan = document.querySelector("#aboutSite > span")
let moreP = document.querySelector("#moreBlock p")
let moreSpan = document.querySelector("#moreBlock span svg")

// aboutSite.classList.add("h-32")
// moreSpan.classList.add("rotate-[-90deg]")
aboutSiteSpan.style.background = 'linear-gradient(0deg,#f9fafb,hsla(210, 20%, 98% ,1),hsla(210, 20%, 98%,.75),hsla(210, 20%, 98%,.2))'

moreBlock.addEventListener ("click" , moreFunction )

function moreFunction() {
    if(aboutSite.classList.contains("h-32")){
        aboutSite.classList.remove("h-32")
        aboutSite.classList.add("h-auto")
        moreP.innerText = "بستن"
        moreSpan.classList.add("rotate-180")
        aboutSiteSpan.classList.remove("h-12")
        aboutSiteSpan.classList.add("h-0")
        moreBlock.classList.add("mt-6")
    } else if (aboutSite.classList.contains("h-auto")) {
        aboutSite.classList.remove("h-auto")
        aboutSite.classList.add("h-32")
        moreP.innerText = "بیشتر"
        moreSpan.classList.remove("rotate-180")
        aboutSiteSpan.classList.remove("h-0")
        aboutSiteSpan.classList.add("h-12")
        moreBlock.classList.remove("mt-6")





    } else {
        console.log(1)
    }
}


// git branch -m main main2
// git fetch origin
// git branch -u origin/main2 main2
// git remote set-head origin -a