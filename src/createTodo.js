class ToDo {
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

let todos = [todo1, todo2, todo3, todo4, todo5]



console.log(todos.filter(todo => todo.priority == 'Low'))
console.log(todos.filter(todo => todo.priority == 'Medium'))
console.log(todos.filter(todo => todo.state == 'Active'))

