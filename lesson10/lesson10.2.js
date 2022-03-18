// Add Bilbo Baggins last in the hobbits list
const bilbo = document.createElement('li')
bilbo.textContent = 'Bilbo Baggins'

const hobbits = document.querySelector('.hobbits')
hobbits.appendChild(bilbo)

// Add Legolas as the first elf
const legolas = document.createElement('li')
legolas.textContent = 'Legolas'

const elves = document.querySelector('.elves')
const firstElf = elves.querySelectorAll('li')[0]
elves.insertBefore(legolas, firstElf)

// Add Aragorn before Boromir
const aragorn = document.createElement('li')
aragorn.textContent = 'Aragorn'

const humans = document.querySelector('.humans')
const eachHuman = [...humans.children]
const boromirIndex = eachHuman.findIndex(human => human.textContent === 'Boromir')
const boromir = humans.querySelectorAll('li')[boromirIndex]
humans.insertBefore(aragorn, boromir)
