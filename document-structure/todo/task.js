const form = document.querySelector('#tasks__form');
const input = document.querySelector('#task__input');
const tasksList = document.querySelector('#tasks__list');

function addTask(text) {
    const task = document.createElement('div');
    task.classList.add('task');
    
    task.innerHTML = `
        <div class="task__title">${text}</div>
        <a href="#" class="task__remove">×</a>
    `;
    
    const removeButton = task.querySelector('.task__remove');
    removeButton.addEventListener('click', (event) => {
        event.preventDefault();
        task.remove();
        saveTasks();
    });
    
    tasksList.appendChild(task);
    saveTasks();
}

function saveTasks() {
    const tasks = Array.from(tasksList.querySelectorAll('.task__title')).map(task => task.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(text => addTask(text));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim()) {
        addTask(input.value.trim());
        input.value = '';
    }
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value.trim()) {
        event.preventDefault();
        addTask(input.value.trim());
        input.value = '';
    }
});

loadTasks();