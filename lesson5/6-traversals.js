const characters = document.querySelector('.characters')
const humans = characters.querySelector('.humans')
const allHumans = humans.querySelectorAll('li')
const hobbits = characters.querySelector('.hobbits').children
const merry = hobbits[2]
const elvesList = merry.closest('.characters').querySelector('.elves')
console.log(elvesList)
const glorfindel = elvesList.children[1]
console.log(glorfindel)
const elrond = glorfindel.nextElementSibling
const legolas = glorfindel.previousElementSibling
const charactersFromNazgul = document.querySelector('.enemies').children[1].closest('.characters')
console.log(charactersFromNazgul)
