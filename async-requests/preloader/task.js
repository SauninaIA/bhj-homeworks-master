const loader = document.getElementById('loader');
const items = document.getElementById('items')

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active')
        const jsonData = JSON.parse(xhr.responseText).response.Valute
        for (item in jsonData) {
            let valute = jsonData[item].CharCode
            let value = jsonData[item].Value
            let div = `
            <div class="item">    
                <div class="item__code">
                    ${valute}
                </div>
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
            `
            items.insertAdjacentHTML('beforeEnd', div)
        }
    }
})

xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', 'async')
xhr.send()


