import { ToDo, TodoList } from "./TodoList"
//TODO Selectores de elementos y creaadores



class UI {
    showTasks(activeTasks){
        const taskList = document.querySelector('.tasks-main')
        taskList.innerHTML = ''
        console.log(taskList)
        activeTasks.forEach(ToDo => {
            const taskEl = document.createElement('div')
            taskEl.classList.add('task-el')
            console.log(ToDo)
            taskEl.innerHTML = `
            <input type="checkbox" name="" id="">
            <h2>${ToDo.title}</h2>
            <p>${ToDo.description}</p>
            <h4>${ToDo.priority}</h4>
            <h6>${ToDo.dueDate}</h6>
            <div class="el-btns">
                <a><i class="fa-solid fa-pen-to-square edit-btn"></i></a>
                <a><i class="fa-solid fa-trash trash-btn"></i></a>
            </div>            
            `
            console.log(taskList)
            taskList.append(taskEl)
        });

    }

}




export { UI }