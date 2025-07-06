const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', (event) => {
        event.preventDefault();
        
        fontSizes.forEach(fs => fs.classList.remove('font-size_active'));
        fontSize.classList.add('font-size_active');
        
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        const size = fontSize.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});