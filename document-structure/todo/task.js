const input = document.getElementById('task__input')
const tasksList = document.getElementById('tasks__list')

input.addEventListener('keydown', (event) => {

    if (event.code === "Enter" && input.value.trim() != '') {
        event.preventDefault();
        tasksList.innerHTML += `
            <div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        input.value = '';
    }

    const removeBtns = document.getElementsByClassName('task__remove')
    
    for (const btn of removeBtns) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const task = btn.closest('.task')
            task.remove()
        })
    }
})

