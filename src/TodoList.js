class TodoList{
    #allTasks
    #activeTasks

    constructor(){
        this.#allTasks = []
        this.#activeTasks = []
    }
    filterTasks(type, value){
        if (type == 'state'){
            this.#activeTasks = this.#allTasks.filter(todo => todo.state == value)
        }
        if (type == 'priority'){
            this.#activeTasks = this.#allTasks.filter(todo => todo.priority == value)
        }
        if (type == 'all'){
            this.#activeTasks = this.#allTasks
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
    getAllTasks(){
        return this.#allTasks
    }
    deleteAllTasks(){
        this.#activeTasks = []
        this.#allTasks = []
    }
}

class ToDo{
    constructor(todo){
        this.state = todo.state,
        this.title = todo.title,
        this.description = todo.description, 
        this.dueDate = todo.dueDate,
        this.priority = todo.priority
    }
}

export {ToDo, TodoList}
