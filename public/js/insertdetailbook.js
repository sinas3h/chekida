import { newstbooks } from "./booksList.js";

const key = window.location.search

let urlParams = new URLSearchParams(key);

const params = urlParams.get('name')

function detailsBook (){
    const params0 = params - 1
    const bookdetail = newstbooks[params0]

    // select elems from dom
    const nameBook = document.querySelector('#nameBook')
    const titleBook = document.querySelector('#titleBook')
    const writerBook = document.querySelector('#writerBook')
    const imageBook = document.querySelector('#imageBook')

    nameBook.innerText = `${bookdetail.name}`
    titleBook.innerText = `${bookdetail.title}`
    writerBook.innerText = `${bookdetail.writer}`
    imageBook.src = `${bookdetail.img}`
}

detailsBook()