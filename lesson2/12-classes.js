const add = document.querySelector('.add')
add.classList.add('red')

const remove = document.querySelector('.remove')
remove.classList.remove('remove')

const blue = document.querySelector('.blue')
console.log(blue.outerHTML)

const red = document.querySelector('.toggle')
red.classList.toggle('red')

const toggle = document.querySelector('.toggle-red')
toggle.addEventListener('click', _ => red.classList.toggle('red'))
