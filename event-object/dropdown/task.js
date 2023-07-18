let dropdownList = document.querySelector('.dropdown__list')
let menuBtn = document.querySelector('.dropdown__value')
let dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'))



console.log(dropdownItems)

menuBtn.addEventListener("click", dropdown);


function dropdown() {
    dropdownList.classList.toggle('dropdown__list_active')
}

for (let i = 0; i < dropdownItems.length; i++) {
    let item = dropdownItems[i];
    item.addEventListener("click", changeValue);
}

function changeValue(event) {
    event.preventDefault()
    dropdownList.classList.remove('dropdown__list_active')
    menuBtn.textContent = event.target.textContent;
}