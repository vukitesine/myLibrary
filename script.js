// create an array where all book objects will be stored
myLibrary = [];

const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#open-modal-btn')
const closeModalBtn = modal.querySelector('#close-modal-btn')
const addBookBtn = modal.querySelector('#submit')



function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
};

function addToLibrary(title, author, page) {
    const newBook = new Book(title, author, page)
    myLibrary.push(newBook);

    displayBook();

}

function displayBook() {
    const libraryDisplay = document.querySelector('.library-container')
    libraryDisplay.innerHTML = ''

    myLibrary.forEach((book) => {
        const bookElement = document.createElement('div')
        bookElement.classList.add('book')

        bookElement.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.page}</p>
        <button id='remove-book'>Remove Book</button>`

        libraryDisplay.appendChild(bookElement);
    })
}

openModalBtn.addEventListener('click', () => {
    modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
    modal.close();
})

addBookBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const title = modal.querySelector('#title').value
    const author = modal.querySelector('#author').value
    const page = modal.querySelector('#page').value
    modal.close();
    addToLibrary(title, author, page);
    
    title = ''
    author = ''
    page = ''
    
})

addToLibrary('The Godfather', 'Mario Puzo', '456')