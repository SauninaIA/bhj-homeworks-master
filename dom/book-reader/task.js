let book = document.getElementById('book')
let controlBtn = document.querySelectorAll('.font-size');

for (let i = 0; i < controlBtn.length; i++) {
    controlBtn[i].addEventListener('click', changeFont);
}

function changeFont(event) {
    event.preventDefault();
    book.classList.remove(book.classList[1]);
    let currentFont = (element) => element.classList.contains('font-size_active');
    let currentFontInd = Array.prototype.findIndex.call(controlBtn, currentFont);
    controlBtn[currentFontInd].classList.remove('font-size_active');
    let newFont = event.target;
    newFont.classList.add('font-size_active');
    let fontClass = newFont.classList[1];
    book.classList.add(fontClass);
}
