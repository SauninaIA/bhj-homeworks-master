const sliderItems = Array.from(document.querySelectorAll('.slider__item'))

const slider = document.querySelectorAll('.slider__arrow')

let currentImg = (element) => element.classList.contains('slider__item_active');
let currentImgInd = sliderItems.findIndex(currentImg);

slider.forEach(btn  => {
    btn.onclick = () => {
        sliderItems[currentImgInd].classList.remove('slider__item_active');
        if (Array.from(btn.classList).includes('slider__arrow_prev')) {
            changeImg('prev');
        } else {
            changeImg('next');
            }
        }
    }
) 

function changeImg (direction) {
    if (direction === 'next') {
        sliderItems.push(sliderItems.shift());
      } else if (direction === 'prev') {
        sliderItems.unshift(sliderItems.pop());
      }
    sliderItems[0].classList.add('slider__item_active');
}
