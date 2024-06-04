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

function displayBooks() {
    const bookshelf = document.querySelector("#bookshelf");
    bookshelf.innerHTML = "";

    myLibrary.forEach(
        (book) => {
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
    
           const readUnread = document.createElement('button');
           let readStatus = book.read;
           readUnread.classList.add("readUnread");
           readUnread.textContent = `${readStatus}`;
           bookCard.appendChild(readUnread);
    
           const deleteBook = document.createElement('button');
           deleteBook.classList.add("deleteBook-button")
           deleteBook.textContent = 'Remove';
           bookCard.appendChild(deleteBook);

           deleteBook.addEventListener("click", () => {
                myLibrary.splice(myLibrary.indexOf(book), 1);
                displayBooks();
           });

           readUnread.addEventListener("click", () => {
               book.read === "Read" ? book.read = "Not Read" : book.read = "Read";
               displayBooks()
           });
        });
    }
    

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
    if (titleInput.checkValidity() === true & authorInput.checkValidity() === true & pagesInput.checkValidity() === true) {
        let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readCheck.value);
        addBookToLIbrary(newBook);
        displayBooks();
        newBookDialog.close();
    }
});

const book1 = new Book("Harry Potter", "J.K. Rowling", "500", "Read");
addBookToLIbrary(book1);
displayBooks();