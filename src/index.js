import { ToDo, TodoList } from "./TodoList";
import { UI } from "./UI";
import {v4} from "uuid"

const ui = new UI()
const todoList = new TodoList()
const sidebarCheck = document.getElementById('checkbox')
const sidebar = document.querySelector('.menu-element')
const taskSection = document.getElementById('task-section')
const submitForm = document.getElementById('task-form')
const editForm = document.getElementById('edit-form')
const editModal = document.getElementById('modal2')
const menuOptions = document.querySelectorAll('.menu-option-el')
const removeAllTasksBtn = document.querySelector('.removeAllBtn')

submitForm.addEventListener('submit', createTodo)
editForm.addEventListener('submit', editTodo)
menuOptions.forEach(menu => menu.addEventListener('click', filterTodoList))


let selectedId

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

sidebarCheck.addEventListener('click', () => {
    sidebar.classList.toggle('unhidden')
    taskSection.classList.toggle('unhidden')
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

function editTodo(e){
    e.preventDefault()
    console.log(selectedId);
    const editedTodo = {
        title: document.getElementById('edit-title').value,
        description: document.getElementById('edit-description').value,
        dueDate: document.getElementById('edit-dueDate').value,
        priority: document.getElementById('edit-priority').value
    }
    console.log(editedTodo);
    todoList.editTask(selectedId, editedTodo)
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
    addEventsFunctionality()
    localStorage.setItem('tasks', JSON.stringify(todoList.getAllTasks()))
}

function addEventsFunctionality(){
    const deleteBtns = document.querySelectorAll('.trash-btn')
    const editBtns = document.querySelectorAll('.edit-btn')

    deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteFunctionality))
    editBtns.forEach(editBtn => editBtn.addEventListener('click', editFunctionality))
}

function deleteFunctionality(e){
    const id = e.target.getAttribute('id')
    todoList.removeTask(id)
    ui.showTasks(todoList.getActiveTasks())
    localStorage.setItem('tasks', JSON.stringify(todoList.getAllTasks()))
    addEventsFunctionality()
}

function editFunctionality(e){;
    selectedId = e.target.getAttribute('id')
    editModal.showModal()
}