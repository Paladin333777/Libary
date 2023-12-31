const authorH = document.getElementById("author")
const titleH  = document.getElementById('title')
const pagesH  = document.getElementById("pages")
const readH = document.getElementById('read')
const submit = document.querySelector(".submit-btn")
const form = document.getElementById('book-form')
const books = document.querySelector(".books")

const myLibary = [];
let count = 0


function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  myLibary.push(this)
  count++
}

function addBook() {
for(let i = (count - 1); i < myLibary.length; i++) {
    let currBook = myLibary[i];
    let book = document.createElement('div')
    book.classList.add('book')
    let readStatus = document.createElement('button')
    readStatus.innerHTML = `${currBook.read}`
    readStatus.classList.add('readSta')
    book.innerHTML = `Author: ${currBook.author}<br>Tittle: ${currBook.title}<br>Pages: ${currBook.pages}`
    let delButton = document.createElement('button')
    delButton.classList.add("delete")
    delButton.innerHTML = "X"
    delButton.setAttribute('data', `${i}`)
    book.setAttribute('data', `${i}`)
    book.appendChild(readStatus)
    book.appendChild(delButton)
    books.appendChild(book)
    
    delButton.addEventListener('click', (event) => {
      book.remove()
    })

    readStatus.addEventListener('click', (e) => {
      if(readStatus.innerHTML == "Read"){
        readStatus.innerHTML = "Not Read"
      } else if(readStatus.innerHTML == "Not Read"){
        readStatus.innerHTML = "Read"
      }
    })
}
}


submit.addEventListener('click' , (event) => {
    event.preventDefault();
    let bookN = titleH.value
    bookN = new Book(titleH.value, authorH.value, pagesH.value, readH.value)
    addBook()
    modal.close()
    form.reset()
})







const modal = document.getElementById("modal")
const newBook = document.getElementById("newbook")

newBook.addEventListener("click", () => {
    modal.showModal();
})

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close()
    }
  })