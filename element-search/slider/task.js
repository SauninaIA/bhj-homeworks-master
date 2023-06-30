const sliderItems = document.querySelectorAll('.slider__item')

const slider = document.querySelectorAll('.slider__arrow')

console.log(slider)

let count = 0

console.log(sliderItems.length)



slider.forEach(btn  => {
    btn.onclick = () => {
        if (Array.from(btn.classList).includes('slider__arrow_prev')) {
            if (count === 0) {
                count = 5
            };
            count--;
            console.log(count);
            changeImg(count);
        } else {
            if (count === 4) {
                count = -1
            };
            count++;
            console.log(count);
            changeImg(count);
            }
        }
   
    }

) 

function changeImg (count) {
    let currentImg = Array.from(document.getElementsByClassName('slider__item_active'))
    currentImg.forEach(img => {
        img.classList.remove('slider__item_active')
        }
    );
    sliderItems[count].classList.add('slider__item_active');
}
