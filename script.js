// create an array where all book objects will be stored
myLibrary = [];

const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = modal.querySelector('#close-modal-btn');
const addBookBtn = modal.querySelector('#submit');

function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
}

function addToLibrary(title, author, page) {
    const newBook = new Book(title, author, page);
    myLibrary.push(newBook);

    displayBook();
}

function displayBook() {
    const libraryDisplay = document.querySelector('.library-container');
    libraryDisplay.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.page}</p>
            <div>
            <button class='status'>Read</button>
            <button class='remove-book' data-index="${index}">Remove Book</button></div>
            `;

        libraryDisplay.appendChild(bookElement);

        const statusBtn = bookElement.querySelector('.status');
        statusBtn.addEventListener('click', () => {
            toggleStatus(statusBtn); 
        });

        const removeBtn = bookElement.querySelector('.remove-book');
        removeBtn.addEventListener('click', () => {
            removeBook(index);

        toggleStatus();
        });
    });
}

function removeBook(index) {
    // Remove the book from myLibrary array
    myLibrary.splice(index, 1);
    displayBook();
}

openModalBtn.addEventListener('click', () => {
    modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
    modal.close();
});

addBookBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const title = modal.querySelector('#title').value;
    const author = modal.querySelector('#author').value;
    const page = modal.querySelector('#page').value;
    
    modal.close();
    
    addToLibrary(title, author, page);

    modal.querySelector('#title').value = '';
    modal.querySelector('#author').value = '';
    modal.querySelector('#page').value = '';
});



function toggleStatus(button) {
    if (button.classList.contains('unread')) {
        button.classList.remove('unread');
        button.innerHTML = 'Read'
    } else {
        button.classList.add('unread');
        button.innerHTML = 'Unread'
    }
}


addToLibrary('The Godfather', 'Mario Puzo', '456');
addToLibrary('The Godfather', 'Mario Puzo', '456');
addToLibrary('The Godfather', 'Mario Puzo', '456');
