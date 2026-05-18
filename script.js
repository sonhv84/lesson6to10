const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Xóa</button>
        `;
        
        // Chức năng xóa công việc
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = ''; // Xóa chữ trong ô input sau khi thêm
    }
});