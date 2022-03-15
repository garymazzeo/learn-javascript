// Your JavaScript goes here
const body = document.body
const button = document.querySelector('button')
const menu = document.querySelector('.nav')

/**
 * Checks if OffcanvasMenu is open
 * @returns Boolean
 */
const isOffcanvasMenuOpen = () => {
  return body.classList.contains('offsite-is-open')
}

/**
 * Opens OffcanvasMenu
 */
const openOffcanvasMenu = () => {
  body.classList.add('offsite-is-open')
  menu.focus()
}

/**
 * Closes OffcanvasMenu
 */
const closeOffcanvasMenu = () => {
  body.classList.remove('offsite-is-open')
  button.focus()
}

// Opens or closes OffcanvasMenu when button is clicked
button.addEventListener('click', event => {
  isOffcanvasMenuOpen()
    ? closeOffcanvasMenu()
    : openOffcanvasMenu()
})

// Closes OffcanvasMenu when escape key pressed
document.addEventListener('keydown', event => {
  if (isOffcanvasMenuOpen() && event.key === 'Escape') {
    closeOffcanvasMenu()
  }
})
