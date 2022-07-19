const todoListElement = document.getElementById('todo-list')

const newTodoFormElement = document.getElementById('new-todo-form')
const newTodoInput = document.getElementById('new-todo-input')

newTodoFormElement.onsubmit = (event) => {
    event.preventDefault()
    const newTodoItem = createNewTodoItem(newTodoInput.value.trim())
    if (newTodoItem) {
        todoListElement.appendChild(newTodoItem)
    }
    newTodoFormElement.reset()
}

function createNewTodoItem(value) {
    if (value === "") return
    const listItemElement = document.createElement('li')
    
    listItemElement.innerHTML = `
        <label><input type="checkbox">${value}</label>
        <button>Delete</button>
    `
    return listItemElement
}
