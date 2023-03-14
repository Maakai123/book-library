const newButtonEL = document.getElementById("new-book")
const newBookForm = document.getElementById("new-book-form")
const addBookEL = document.getElementById("add-book")



newButtonEL.addEventListener("click", function(){
    newBookForm.style.display = "Block"
   
})


addBookEL.addEventListener("DOMContentLoaded", function(event){
    event.preventDefault();
    addBookToLibrary()
})



let myLibrary = [];


function Book(title,author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
 
let title = document.getElementById("title-input").value;
let  author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").checked;
 let newBook = new Book(title, author, pages, read)
 console.log(newBook)
 myLibrary.push(newBook)
 console.log(myLibrary)
}