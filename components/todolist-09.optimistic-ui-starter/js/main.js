/* globals DOMPurify zlFetch */
// ========================
// Variables
// ========================
const rootendpoint = 'https://api.learnjavascript.today'
const auth = {
  // REPLACE WITH YOUR USERNAME AND PASSWORD
  username: 'transporterduo',
  password: '12345678'
}

const todolist = document.querySelector('.todolist')
const taskList = todolist.querySelector('.todolist__tasks')
const emptyStateDiv = todolist.querySelector('.todolist__empty-state')

// ========================
// Functions
// ========================
/**
 * Generates a unique string
 * @param {Number} length - Length of string
 * @returns {String}
 */
const generateUniqueString = length =>
  Math.random().toString(36).substring(2, 2 + length)

/**
 * Creates a task element
 * @param {Object} task - Task object
 * @param {String} task.id - Task id
 * @param {String} name - Task
 * @param {Boolean} done - Whether the task is complete
 * @returns {HTMLElement}
 */
const makeTaskElement = ({ id, name, done }) => {
  const taskElement = document.createElement('li')
  taskElement.classList.add('task')
  taskElement.innerHTML = DOMPurify.sanitize(`
    <input
      type="checkbox"
      id="${id}"
      ${done ? 'checked' : ''}
    />
    <label for="${id}">
      <svg viewBox="0 0 20 15">
        <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
      </svg>
    </label>
    <input class="task__name" value="${name}">
    <button type="button" class="task__delete-button">
      <svg viewBox="0 0 20 20">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>
    </button>`
  )
  return taskElement
}

/**
 * Debounces a function
 * @param {Function} callback
 * @param {Number} wait - Milliseconds to wait
 * @param {Boolean} immediate - Whether to trigger callback on leading edge
 */
function debounce (callback, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) callback.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) callback.apply(context, args)
  }
}

// ========================
// Execution
// ========================

// Getting and fetching tasks
zlFetch(`${rootendpoint}/tasks`, { auth })
  .then(response => {
    // Append tasks to DOM
    const tasks = response.body
    tasks.forEach(task => {
      const taskElement = makeTaskElement(task)
      taskList.appendChild(taskElement)
    })

    // Change empty state text
    emptyStateDiv.textContent = 'Your todo list is empty. Hurray! 🎉'
  })
  .catch(error => console.error(error))

// Adding a task to the DOM
todolist.addEventListener('submit', event => {
  event.preventDefault()

  // Get value of task
  const newTaskField = todolist.querySelector('input')
  const inputValue = DOMPurify.sanitize(newTaskField.value.trim())

  // Prevent adding of empty task
  if (!inputValue) return

  // Disable button
  const newTaskButton = todolist.querySelector('button')
  newTaskButton.setAttribute('disabled', true)

  // Give indication that we're adding a task
  const buttonTextElement = newTaskButton.querySelector('span')
  buttonTextElement.textContent = 'Adding task...'

  zlFetch.post(`${rootendpoint}/tasks`, {
    auth,
    body: {
      name: inputValue
    }
  })
    .then(response => {
      // Append task to DOM
      const task = response.body
      const taskElement = makeTaskElement(task)
      taskList.appendChild(taskElement)

      // Clear the new task field
      newTaskField.value = ''

      // Bring focus back to input field
      newTaskField.focus()
    })
    .catch(error => console.error(error))
    .finally(_ => {
      // Enables button
      newTaskButton.removeAttribute('disabled')

      // Change button text back to original text
      buttonTextElement.textContent = 'Add task'
    })
})

// Editing tasks
taskList.addEventListener('input', debounce(function (event) {
  const taskElement = event.target.parentElement
  const checkbox = taskElement.querySelector('input[type="checkbox"]')
  const taskInput = taskElement.querySelector('.task__name')

  const id = checkbox.id
  const done = checkbox.checked
  const name = DOMPurify.sanitize(taskInput.value.trim())

  zlFetch.put(`${rootendpoint}/tasks/${id}`, {
    auth,
    body: {
      name,
      done
    }
  })
    .then(response => {
      console.log(response.body)
    })
    .catch(error => console.error(error))
}, 250))

// Deleting tasks
taskList.addEventListener('click', event => {
  if (!event.target.matches('.task__delete-button')) return

  const taskEl = event.target.parentElement
  const checkbox = taskEl.querySelector('input[type="checkbox"]')
  const id = checkbox.id

  zlFetch.delete(`${rootendpoint}/tasks/${id}`, { auth })
    .then(response => {
      // Removes the task from DOM
      taskList.removeChild(taskEl)

      // Triggers empty state
      if (taskList.children.length === 0) taskList.innerHTML = ''
    })
    .catch(error => console.error(error))
})
