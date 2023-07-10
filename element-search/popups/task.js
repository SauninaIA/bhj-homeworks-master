let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')
let btn = document.getElementsByClassName('btn_danger')[0]

modalMain.classList.add('modal_active');

let modalClose = document.querySelectorAll(".modal__close_times")

function closeModal() {
    let modals = document.querySelectorAll('.modal');
    for (i = 0; i < modals.length; i++) {
      modals[i].classList.remove('modal_active');
    }
  }
  
  for (i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', closeModal);
  }

btn.onclick = () => {
    modalSuccess.classList.add('modal_active');
    modalMain.classList.remove('modal_active')
}
