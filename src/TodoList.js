class TodoList{
    #allTasks
    #activeTasks

    constructor(){
        this.#allTasks= []
        this.#activeTasks = []
    }
    filterTasks(type, value sr){
        if (type == 'state'){
            this.#activeTasks = this.#allTasks.filter(todo => todo.state == value)
        }
        if (type == 'priority'){
            this.#activeTasks = this.#allTasks.filter(todo => todo.priority == value)
        }
    }
    removeTask(title){
        this.#allTasks = this.#allTasks.filter(todo => todo.title != title)
    }
    addTask(ToDo){
        this.#allTasks.push(ToDo)
        this.#activeTasks.push(ToDo)
    }
    getActiveTasks(){
        return this.#activeTasks
    }
}

class ToDo{
    constructor(state, title, description, dueDate, priority){
        this.state = state,
        this.title = title,
        this.description = description, 
        this.dueDate = dueDate,
        this.priority = priority
    }
}

export {ToDo, TodoList}
