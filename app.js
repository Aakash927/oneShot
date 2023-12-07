// Sample data for books and user account
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

const userAccount = {
    id: 123,
    reservedBooks: [1, 3]
};

// Display available books
function displayBooks() {
    const bookListDiv = document.getElementById('book-list');
    bookListDiv.innerHTML = '';

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `<strong>${book.title}</strong> by ${book.author} 
                             <button class="btn btn-primary" onclick="reserveBook(${book.id})">Reserve</button>`;
        bookListDiv.appendChild(bookDiv);
    });
}

// Display user account information
function displayUserAccount() {
    const userIdSpan = document.getElementById('user-id');
    const reservedBooksSpan = document.getElementById('reserved-books');

    userIdSpan.textContent = userAccount.id;
    reservedBooksSpan.textContent = userAccount.reservedBooks.join(', ');
}

// Reserve a book
function reserveBook(bookId) {
    if (!userAccount.reservedBooks.includes(bookId)) {
        userAccount.reservedBooks.push(bookId);
        displayUserAccount();
    }
}

// Show the add book form
function showAddBookForm() {
    document.getElementById('add-book-form').classList.toggle('hidden');
}

// Show the update book form
function showUpdateBookForm() {
    document.getElementById('update-book-form').classList.toggle('hidden');
}

// Remove a book
function removeBook() {
    // Implementation to remove a book goes here
}

// Initial setup
displayBooks();
displayUserAccount();
