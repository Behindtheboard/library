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

const book1 = new Book("Harry Potter", "J.K. Rowling", "500", "read");
addBookToLIbrary(book1);

const addNewBookButton = document.querySelector("#add-book");
const newBookDialog = document.querySelector("#new-book-dialog");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const readCheck = document.getElementById("read-check");
const confirmButton = document.getElementById("confirm-button");
const cancelButton = document.getElementById("cancel-button");

addNewBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    newBookDialog.close();
});

newBookDialog.addEventListener("change", () =>{
    readCheck.checked ? readCheck.value = "read" : readCheck.value = "unread";
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readCheck.value);
    addBookToLIbrary(newBook);
    console.log(myLibrary)
    newBookDialog.close();
});

myLibrary.forEach(
    (book) => {
       const bookshelf = document.querySelector("#bookshelf");
       const bookCard = document.createElement('div');
       bookCard.classList.add("book-card");
       bookshelf.appendChild(bookCard);
       
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
       bookPages.textContent = `${book.pages} Pages`;
       bookCard.appendChild(bookPages);

       const readUnread = document.createElement('div');
       readUnread.classList.add("readUnread");
       bookCard.appendChild(readUnread);

       const deleteBook = document.createElement('button');
       deleteBook.classList.add("deleteBook-button")
       deleteBook.textContent = 'Remove';
       bookCard.appendChild(deleteBook);
   });