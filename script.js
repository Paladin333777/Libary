let mylibary = [];

for(let i = 0; i < mylibary.length; i++) {
    let currBook = myLibary[i];

}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("The Last Wish", "Andrzej Sapkowski", "352", "No")

Book.prototype.myLove = function() {
    console.log("I love The Witcher Universe.")
}

console.log(book1.valueOf())

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