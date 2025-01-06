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

addToLibrary('test', 'test', 23);
console.log(myLibrary)
