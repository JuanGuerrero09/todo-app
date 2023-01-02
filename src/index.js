import { ToDo, TodoList } from "./TodoList";
import { UI } from "./UI";

const ui = new UI()
const todoList = new TodoList()
const form = document.getElementById('task-form')
const menuOptions = document.querySelectorAll('.menu-option-el')
console.log(menuOptions)

form.addEventListener('submit', createTodo)
menuOptions.forEach(menu => menu.addEventListener('click', filterTodoList))

let todo1 = new ToDo('Completed', 'Primera', 'Lorem impusumsom afdsf', '09-05-2001', 'Low Priority')
let todo2 = new ToDo('Completed', 'Segunda', 'Lorem impusumsom afdsf', '09-05-2001', 'Low Priority')
let todo3 = new ToDo('Pending', 'Tercera', 'Lorem impusumsom afdsf', '09-05-2001', 'High Priority')
let todo4 = new ToDo('Pending', 'Cuarta', 'Lorem impusumsom afdsf', '09-05-2001', 'Medium Priority')
let todo5 = new ToDo('Completed', 'Quinta', 'Lorem impusumsom afdsf', '09-05-2001', 'Medium Priority')

todoList.addTask(todo1)
todoList.addTask(todo2)
todoList.addTask(todo3)
todoList.addTask(todo4)
todoList.addTask(todo5)




function createTodo(e){
    e.preventDefault()
    const title = document.getElementById('title').value,
    description = document.getElementById('description').value,
    dueDate = document.getElementById('dueDate').value,
    priority = document.getElementById('priority').value

    const todo = new ToDo('Pending', title, description, dueDate, `${priority} Priority`)
    todoList.addTask(todo)
    ui.showTasks(todoList.getActiveTasks())

}

function filterTodoList(e){
    const filterElement = e.target.parentElement
    const type = filterElement.getAttribute('type')
    const value = filterElement.getAttribute('value')
    todoList.filterTasks(type, value)
    console.log(todoList.getActiveTasks())
    ui.showTasks(todoList.getActiveTasks())
}

