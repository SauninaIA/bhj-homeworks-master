const pollTitle = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let response = JSON.parse(xhr.responseText);
        let title = response.data.title;
        let answers = response.data.answers;
        pollTitle.innerText = `${title}`;
        for (let i = 0; i < answers.length; i++) {
            let div = `
                <button class="poll__answer">
                    ${answers[i]}
                </button>`
            pollAnswers.insertAdjacentHTML('beforeEnd', div)
        }
        const buttons = Array.from(document.getElementsByClassName('poll__answer'))
        
        buttons.forEach (btn => {
            btn.addEventListener('click', () => {
                alert('«Спасибо, ваш голос засчитан!»')
            })
        })
    }
})

xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true)
xhr.send()



