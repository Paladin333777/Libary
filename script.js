function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("The Last Wish", "Andrzej Sapkowski", "352", "No")

console.log(book1)