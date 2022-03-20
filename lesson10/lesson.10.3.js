/**
 * Add a list of humans to .characters. 
 * This list should have a humans class and contains five list items—
 * Gandalf, Saruman, Aragorn, Boromir, and Faramir.
 */
// Method 1
// const humans = `
// <ul class="humans">
//   <li>Gandalf</li>
//   <li>Saruman</li>
//   <li>Aragorn</li>
//   <li>Boromir</li>
//   <li>Faramir</li>
// </ul>`

const characters = document.querySelector('.characters')
// characters.innerHTML = characters.innerHTML + humans

// Method 2
const humansArray = [
  'Gandalf',
  'Saruman',
  'Aragorn',
  'Boromir',
  'Faramir',
]

const humanItems = humansArray.map(human => `<li>${human}</li>`).join('')
const humans = document.createElement('ul')
humans.classList.add('humans')
humans.innerHTML = humanItems
console.log(humans)
const humanFragment = document.createDocumentFragment()
humanFragment.appendChild(humans)
characters.appendChild(humanFragment)



/**
 * Add two list items—
 * Glorfindel and Elrond—before Arwen Evenstar. 
 * Use the document fragment method.
 */
const newElves = [
  'Glorifindel',
  'Elrond',
]

const fragment = document.createDocumentFragment()

newElves.forEach(elf => {
  const li = document.createElement('li')
  li.innerText = elf
  fragment.appendChild(li)
})

const elves = document.querySelector('.elves')
const eachElf = [...elves.children]
const arwenIndex = eachElf.findIndex(elf => elf.innerText === 'Arwen Evenstar')
const arwen = elves.querySelectorAll('li')[arwenIndex]
console.log(arwen)
elves.insertBefore(fragment, arwen)
