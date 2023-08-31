const modal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close_times')
const storedModal = localStorage.getItem('modalStatus') 

if (!storedModal) {
    modal.classList.add('modal_active');
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        const modalStatus = 'closed'
        localStorage.setItem('modalStatus', modalStatus)
        console.log(storedModal)
    })
}

// localStorage.removeItem('modalStatus')
