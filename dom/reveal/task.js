const revealElements = document.querySelectorAll('.reveal')

function scrollEl() {
    for (let i = 0; i < revealElements.length; i++) {
        let element = revealElements[i]

        if (isVisible(element)) {
            element.classList.add('reveal_active')
        } else {
            element.classList.remove('reveal_active')
        }
    }
}

function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect()

    if (bottom < 0 || top > window.innerHeight) {
        return false
    } else {
        return true
    }
}

window.addEventListener('scroll', scrollEl)