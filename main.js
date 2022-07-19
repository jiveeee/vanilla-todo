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
    const labelElement = document.createElement('label')
    const inputElement = document.createElement('input')
    inputElement.type = 'checkbox'
    const textNode = document.createTextNode(value)
    console.log(textNode)
    const buttonElement = document.createElement('button')
    buttonElement.textContent = 'Delete'

    console.log(value)
    console.log(value)
    labelElement.appendChild(inputElement)
    labelElement.appendChild(textNode)
    listItemElement.appendChild(labelElement)
    listItemElement.appendChild(buttonElement)
    
    // listItemElement.innerHTML = `
    //     <label><input type="checkbox">${value}</label>
    //     <button>Delete</button>
    // `
    return listItemElement
}
