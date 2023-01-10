class TodoList{
    #allTasks
    #activeTasks
    
    constructor(){
        this.#allTasks = []
        this.#activeTasks = []
    }
    getActiveTasks(){
        return this.#activeTasks
    }
    getAllTasks(){
        return this.#allTasks
    }
    addTask(ToDo){
        this.#allTasks.push(ToDo)
        this.#activeTasks.push(ToDo)
    }
    removeTask(id){
        this.#allTasks = this.#allTasks.filter(todo => todo.id != id)
        this.#activeTasks = this.#activeTasks.filter(todo => todo.id != id)
    }
    editTask(oldToDoId, newToDo){
        let oldIndex = this.#allTasks.findIndex((todo) => todo.id === oldToDoId)
        const oldTodo = this.#allTasks[oldIndex]
        oldTodo.title = newToDo.title?newToDo.title:oldTodo.title
        oldTodo.description = newToDo.description?newToDo.description:oldTodo.description
        oldTodo.dueDate = newToDo.dueDate?newToDo.dueDate:oldTodo.dueDate
        oldTodo.priority = newToDo.priority?newToDo.priority:oldTodo.priority
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
        this.id = todo.id
    }
}

export {ToDo, TodoList}
