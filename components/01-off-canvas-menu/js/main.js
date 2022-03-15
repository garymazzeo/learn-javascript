const body = document.body
const button = document.querySelector('button')

function toggleMenu() {
  body.classList.toggle('menu-is-open')
}

button.addEventListener('click', toggleMenu)
