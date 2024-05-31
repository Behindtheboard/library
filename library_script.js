const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("Harry Potter", "J.K. Rowling", "500 pages", "read");
const book2 = new Book("Eragon", "Christopher Wild", "600 Pages", "read");
const book3 = new Book("Star Wars", "George Lucas", "1000 Pages", "unread");

function addBookToLIbrary(book) {
    myLibrary.push(book)
}

