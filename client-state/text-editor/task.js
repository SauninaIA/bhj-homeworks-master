const storedText = localStorage.getItem('text') 
const textArea = document.getElementById('editor')
const btn = document.getElementById('remove')

textArea.value = storedText
textArea.addEventListener('input', e => {
    const text = textArea.value
    localStorage.setItem('text', text)
})

btn.addEventListener('click', () => {
    textArea.value = ""
    const text = textArea.value
    localStorage.setItem('text', text)
})