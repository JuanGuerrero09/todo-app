class UI {
    showTasks(activeTasks){
        if (activeTasks === []){
            return 0
        }
        const taskList = document.querySelector('.tasks-main')
        taskList.innerHTML = ''
        activeTasks.forEach(ToDo => {
            const taskEl = document.createElement('div')
            taskEl.classList.add('task-el')
            taskEl.innerHTML = `
            <input type="checkbox" name="" id="">
            <h2>${ToDo.title}</h2>
            <p>${ToDo.description}</p>
            <h4>${ToDo.priority} Priority</h4>
            <h6>${ToDo.dueDate}</h6>
            <div class="el-btns">
                <a><i class="fa-solid fa-pen-to-square edit-btn" id="${ToDo.id}"></i></a>
                <a><i class="fa-solid fa-trash trash-btn" id="${ToDo.id}"></i></a>
            </div>            
            `
            taskList.append(taskEl)
        });

    }

}




export { UI }