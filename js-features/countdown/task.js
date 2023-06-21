const timerStart = document.getElementById('timer')

const timer = setInterval (() => {
    timerStart.textContent = Number(timerStart.textContent) - 1
    if (timerStart.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timer);
    }
}, 1000)