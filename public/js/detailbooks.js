import {newstbooks} from "./booksList.js"
const newstBooksUl = document.getElementById("newstBooksUl")


newstbooks.map((book) => {
    newstBooksUl.insertAdjacentHTML('beforeend' , `
    <li class="flex flex-col justify-between ml-4 w-28 lg:w-36 h-64 lg:h-72">
                            <a id="imageBook"  href="./book-detail.html?name=${book.id}">
                                <img alt="newbook${book.id}" class="w-28 lg:w-36 h-auto rounded-xl" src=${book.img}>
                            </a>
                            <p class="text-sm text-cyan-900 line-clamp-2">${book.title}</p>
                            <div class="flex justify-between items-center">
                                <p class="text-xs lg:text-sm opacity-50">${book.writer}</p>
                                <span class="flex border lg:border-2 border-slate-800 rounded-md justify-center items-center p-[2px]">
                                    <svg class="w-3 lg:w-4 h-auto" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1197 9.11938C18.7297 9.11938 18.4197 9.42938 18.4197 9.81938V11.3994C18.4197 14.9394 15.5397 17.8194 11.9997 17.8194C8.45969 17.8194 5.57969 14.9394 5.57969 11.3994V9.80938C5.57969 9.41938 5.26969 9.10938 4.87969 9.10938C4.48969 9.10938 4.17969 9.41938 4.17969 9.80938V11.3894C4.17969 15.4594 7.30969 18.8094 11.2997 19.1694V21.2994C11.2997 21.6894 11.6097 21.9994 11.9997 21.9994C12.3897 21.9994 12.6997 21.6894 12.6997 21.2994V19.1694C16.6797 18.8194 19.8197 15.4594 19.8197 11.3894V9.80938C19.8097 9.42938 19.4997 9.11938 19.1197 9.11938Z" fill="#002A32"></path>
                                        <path d="M11.9981 2C9.55813 2 7.57812 3.98 7.57812 6.42V11.54C7.57812 13.98 9.55813 15.96 11.9981 15.96C14.4381 15.96 16.4181 13.98 16.4181 11.54V6.42C16.4181 3.98 14.4381 2 11.9981 2ZM13.3081 8.95C13.2381 9.21 13.0081 9.38 12.7481 9.38C12.6981 9.38 12.6481 9.37 12.5981 9.36C12.2081 9.25 11.7981 9.25 11.4081 9.36C11.0881 9.45 10.7781 9.26 10.6981 8.95C10.6081 8.64 10.7981 8.32 11.1081 8.24C11.6981 8.08 12.3181 8.08 12.9081 8.24C13.2081 8.32 13.3881 8.64 13.3081 8.95ZM13.8381 7.01C13.7481 7.25 13.5281 7.39 13.2881 7.39C13.2181 7.39 13.1581 7.38 13.0881 7.36C12.3881 7.1 11.6081 7.1 10.9081 7.36C10.6081 7.47 10.2681 7.31 10.1581 7.01C10.0481 6.71 10.2081 6.37 10.5081 6.27C11.4681 5.92 12.5281 5.92 13.4881 6.27C13.7881 6.38 13.9481 6.71 13.8381 7.01Z" fill="#002A32"></path>
                                        </svg>
                                </span>
                            </div>
                        </li>
    `)
})



// const nameBook = document.getElementById("nameBook")


