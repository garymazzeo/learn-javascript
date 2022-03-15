const button = document.querySelector('button')

const buttonClicker = function (event) {
  console.log(this)
}

button.addEventListener('click', buttonClicker)
