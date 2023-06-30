let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')
let btn = document.getElementsByClassName('btn_danger')[0];

modalMain.classList.add('modal_active');

let modalClose = document.querySelectorAll(".modal__close_times")

modalClose[0].onclick = () => {
    modalMain.classList.remove('modal_active');
}
modalClose[1].onclick = () => {
    modalSuccess.classList.remove('modal_active');
    modalMain.classList.remove('modal_active');
}

btn.onclick = () => {
    modalSuccess.classList.add('modal_active');
}

