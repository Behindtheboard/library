const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    createCard(this);
}
function createCard(book) {
    const bookshelf = document.querySelector("#bookshelf");

    let book = bookshelf.createElement('div');
    book.classList.add("book-card");
    book.setAttribute('id',`${book}Card`)
    bookshelf.appendChild(book);
    
    const bookTitle = book.createElement('div');
    bookTitle.classList.add("book-title");
    bookTitle.textContent = `${book.title}`;
    book.appendChild(bookTitle);

    const bookAuthor = book.createElement('div');
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = `${book.author}`;
    book.appendChild(bookAuthor);

    const bookPages = book.createElement('div');
    bookPages.classList.add("book-pages");
    bookPages.textContent = `${book.pages}`;
    book.appendChild(bookPages);
}

function addBookToLIbrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("Harry Potter", "J.K. Rowling", "500 pages", "read");
const book2 = new Book("Eragon", "Christopher Wild", "600 Pages", "read");
const book3 = new Book("Star Wars", "George Lucas", "1000 Pages", "unread");

addBookToLIbrary(book1);
addBookToLIbrary(book2);
console.log(myLibrary);
console.log(book1.title)