let rotator = Array.from(document.querySelectorAll('.rotator__case'))

console.log(rotator)

setInterval(rotateInscription, 1000)

function rotateInscription() {
    let currentInscription = rotator[0];
    currentInscription.classList.remove('rotator__case_active');
    rotator.push(rotator.shift());
    rotator[0].classList.add('rotator__case_active');
}