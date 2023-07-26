let menu = document.getElementById("menu")
let menuBar = document.getElementById("menuBar")

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