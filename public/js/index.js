
let moreBlock = document.getElementById("moreBlock")
let aboutSite = document.getElementById("aboutSite")
let aboutSiteSpan = document.querySelector("#aboutSite > span")
let moreP = document.querySelector("#moreBlock p")
let moreSpan = document.querySelector("#moreBlock span svg")
let menu = document.getElementById("menu")
let menuBar = document.getElementById("menuBar")


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

menu.addEventListener ("click" , menuFunction )

function menuFunction() {

    if(menuBar.classList.contains("top-[-500px]")){
        menuBar.classList.remove("top-[-500px]")
        menuBar.classList.add("top-20")
        menu.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x" width="20"  height="20" ><line x1="18" y1="6" x2="6" y2="18" stroke="#002A32" fill="none" stroke-width="2px"></line><line x1="6" y1="6" x2="18" y2="18" stroke="#002A32" fill="none" stroke-width="2px"></line></svg>'
    } else {
        menuBar.classList.remove("top-20")
        menuBar.classList.add("top-[-500px]")
        menu.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="20" y2="1" stroke="#114B5F" stroke-width="2px" fill="none"></line><line y1="8" x2="20" y2="8" stroke="#114B5F" stroke-width="2px" fill="none"></line><line y1="15" x2="20" y2="15" stroke="#114B5F" stroke-width="2px" fill="none"></line></svg>'
    }
    
}


// git branch -m main main2
// git fetch origin
// git branch -u origin/main2 main2
// git remote set-head origin -a