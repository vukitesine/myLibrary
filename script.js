// create an array where all book objects will be stored
myLibrary = [];

function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
};

function addToLibrary(title, author, page) {
    const newBook = new Book(title, author, page)
    myLibrary.push(newBook);
}

function displayBook() {
    const libraryDisplay = document.querySelector('.library-container')
    libraryDisplay.innerHTML = ''

    myLibrary.forEach((book) => {
        const bookElement = document.createElement('div')
        bookElement.classList.add('book')

        bookElement.innerHTML = 
        <h2></h2>
        <p></p>
        <p></p>
    })
}