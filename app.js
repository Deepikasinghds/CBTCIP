document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const addButton = document.getElementById('add-btn');
    const listContainer = document.getElementById('list-container');

    addButton.addEventListener('click', () => {
        const taskText = inputBox.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            inputBox.value = '';
        }
    });

    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = inputBox.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                inputBox.value = '';
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <span><i class="fa-solid fa-trash"></i></span>`;
        
        li.addEventListener('click', () => {
            li.classList.toggle('checked');
        });

        li.querySelector('span').addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });

        listContainer.appendChild(li);
    }
});
