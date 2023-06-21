const counter = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')

img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1
    if (Number(counter.textContent) % 2 == 0) {
        img.width += 20
        img.height += 20
    }
    else {
        img.width -= 20
        img.height -= 20
    }
    }

