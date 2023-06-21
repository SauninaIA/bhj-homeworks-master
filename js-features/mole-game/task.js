let deadCounter = 0
let lostCounter = 0

let getHole = (index) => document.getElementById(`hole${index}`)

for (let i = 1; i < 15; i++) {
    let hole = getHole(i)

    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )) {
            deadCounter += 1;
        } else {
            lostCounter += 1;
        }
        if (deadCounter == 10) {
            alert('Победа!');
            deadCounter = 0;
            lostCounter = 0;
        }
        if (lostCounter == 5) {
            alert('Вы проиграли!');
            deadCounter = 0;
            lostCounter = 0;
        }  
        dead.textContent = deadCounter;
        lost.textContent = lostCounter;    
    }
        
}
