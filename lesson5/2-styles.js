const button = document.querySelector('.changer')

// button.addEventListener('click', _ => button.style.color = 'cornflowerblue')
// button.addEventListener('click', _ => button.style.setProperty('background-color', 'cornsilk'))
// button.addEventListener('click', () => button.style.width = '600px')
// button.addEventListener('click', _ => button.style.height = '200px')

button.addEventListener('click', _ => {
  button.style.color = 'cornflowerblue'
  button.style.backgroundColor = 'cornsilk'
  button.style.width = '20em'
  button.style.height = '300px'
  console.log(getComputedStyle(button).width)
})


const styles = document.querySelector('.styles')
const computedStyle = getComputedStyle(styles);
const buttonComputedStyle = getComputedStyle(button)
console.log(styles.style)
console.log(computedStyle)
console.log(button.style)
console.log(buttonComputedStyle.width)

const checkbox = document.querySelector('.checkbox')
checkbox.setAttribute('checked', 'true')
checkbox.removeAttribute('checked')
console.log(checkbox.getAttribute('checked'))
styles.dataset.weirdo = 'sure'
console.log(styles.dataset.weirdo)
styles.removeAttribute('data-weirdo')
styles.dataset.fontSize = computedStyle.fontSize
