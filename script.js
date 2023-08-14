const authorH = document.getElementById("author")
const titleH  = document.getElementById('title')
const pagesH  = document.getElementById("pages")
const readH = document.getElementById('read')
const submit = document.querySelector(".submit-btn")

const myLibary = [];

// for(let i = 0; i < myLibary.length; i++) {
//     let currBook = myLibary[i];
// }


function Book(title, author, pages, read){
    this.title = titleH.value;
    this.author = authorH.value;
    this.pages = pagesH.value;
    this.read = readH.value;
    myLibary.push(this)
}

submit.addEventListener('click' , (event) => {
    event.preventDefault();
    let book1 = new Book(titleH.value, authorH.value, pagesH.value, readH.value)
    modal.close()
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