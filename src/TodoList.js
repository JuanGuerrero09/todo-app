class TodoList{
    #allTasks

    constructor(){
        this.#allTasks= []
        this.activeTasks = []
    }
    filterTasks(filter, type){
        if (filter == 'state'){
            this.activeTasks = this.#allTasks.filter(todo => todo.state == type)
        }
        if (filter == 'priority'){
            this.activeTasks = this.#allTasks.filter(todo => todo.priority == type)
        }
    }
    removeTask(name){
        this.#allTasks = this.#allTasks.filter(todo => todo.name != name)
    }
    addTask(ToDo){
        this.#allTasks.push(ToDo)
    }
}

class ToDo{
    constructor(state, name, description, dueDate, priority){
        this.state = state,
        this.name = name,
        this.description = description, 
        this.dueDate = dueDate,
        this.priority = priority
    }
}

let todo1 = new ToDo('Active', 'Primera', 'Lorem impusumsom afdsf', '09-05-2001', 'Low')
let todo2 = new ToDo('Active', 'Segunda', 'Lorem impusumsom afdsf', '09-05-2001', 'Low')
let todo3 = new ToDo('Disable', 'Tercera', 'Lorem impusumsom afdsf', '09-05-2001', 'High')
let todo4 = new ToDo('Disable', 'Cuarta', 'Lorem impusumsom afdsf', '09-05-2001', 'Medium')
let todo5 = new ToDo('Active', 'Quinta', 'Lorem impusumsom afdsf', '09-05-2001', 'Medium')

const todos = new TodoList()


todos.addTask(todo1)
todos.addTask(todo2)
todos.addTask(todo3)
todos.addTask(todo4)
todos.addTask(todo5)

todos.removeTask('Tercera')
todos.filterTasks('state', 'Active')
console.log(todos)
todos.filterTasks('priority', 'Medium')
console.log(todos)
//console.log(todos.allTasks.filter(todo => todo.priority == 'Low'))
//console.log(todos.allTasks.filter(todo => todo.priority == 'Medium'))
//console.log(todos.allTasks.filter(todo => todo.state == 'Active'))


