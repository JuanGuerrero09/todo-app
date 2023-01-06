import { ToDo, TodoList } from "./TodoList";
import { UI } from "./UI";
import {v4} from "uuid"

const ui = new UI()
const todoList = new TodoList()
const form = document.getElementById('task-form')
const menuOptions = document.querySelectorAll('.menu-option-el')
const removeAllTasksBtn = document.querySelector('.removeAllBtn')

form.addEventListener('submit', createTodo)
menuOptions.forEach(menu => menu.addEventListener('click', filterTodoList))


removeAllTasksBtn.addEventListener('click', () => {
    todoList.deleteAllTasks()
    localStorage.clear()
    ui.showTasks()    
})

document.addEventListener('DOMContentLoaded', () =>{
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach(task => {
        const todo = new ToDo(task)
        todoList.addTask(todo)
    })
    ui.showTasks(todoList.getAllTasks())
    addEventsFunctionality()
})


function createTodo(e){
    e.preventDefault()
    const taskObj = {
        state: 'Pending',
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        dueDate: document.getElementById('dueDate').value,
        priority: document.getElementById('priority').value,
        id: v4()
    }
    const todo = new ToDo(taskObj)
    todoList.addTask(todo)
    ui.showTasks(todoList.getActiveTasks())
    addEventsFunctionality()
    localStorage.setItem('tasks', JSON.stringify(todoList.getAllTasks()))

}

function filterTodoList(e){
    const filterElement = e.target.parentElement
    const type = filterElement.getAttribute('type')
    const value = filterElement.getAttribute('value')
    todoList.filterTasks(type, value)
    ui.showTasks(todoList.getActiveTasks())
}

function addEventsFunctionality(){
    const deleteBtns = document.querySelectorAll('.trash-btn')
    const editBtns = document.querySelectorAll('.edit-btn')

    deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteFunctionality))
    editBtns.forEach(editBtn => editBtn.addEventListener('click', editFunctionality))

}

//TODO Add delete functionality to ui, REFACTOR

function deleteFunctionality(e){
    //todoList.removeTask();
    const id = e.target.getAttribute('id')
    console.log(todoList.getActiveTasks(), todoList.getAllTasks())
    todoList.removeTask(id)
    console.log(todoList.getActiveTasks(), todoList.getAllTasks())
    ui.showTasks(todoList.getActiveTasks())
    localStorage.setItem('tasks', JSON.stringify(todoList.getAllTasks()))

}

function editFunctionality(e){
    console.log('soy un edit');
}