const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLIbrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("Harry Potter", "J.K. Rowling", "500 pages", "read");
const book2 = new Book("Eragon", "Christopher Wild", "600 Pages", "read");
const book3 = new Book("Star Wars", "George Lucas", "1000 Pages", "unread");

addBookToLIbrary(book1);
addBookToLIbrary(book2);
addBookToLIbrary(book3);
console.log(myLibrary);


myLibrary.forEach(
    (book) => {
       const bookshelf = document.querySelector("#bookshelf");
       const bookCard = document.createElement('div');
       bookCard.classList.add("book-card");
       bookshelf.appendChild(bookCard);
       console.log("hit");
       
       const bookTitle = document.createElement('div');
       bookTitle.classList.add("book-title");
       bookTitle.textContent = book.title;
       bookCard.appendChild(bookTitle);
   
       const bookAuthor = document.createElement('div');
       bookAuthor.classList.add("book-author");
       bookAuthor.textContent = book.author;
       bookCard.appendChild(bookAuthor);
   
       const bookPages = document.createElement('div');
       bookPages.classList.add("book-pages");
       bookPages.textContent = book.pages;
       bookCard.appendChild(bookPages);
   });