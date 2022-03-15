let people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Mahatma Gandhi',
  'Napoleon Bonaparte',
  'Abraham Lincoln'
]

const ghandi = people.indexOf('Mahatma Gandhi')
console.log(ghandi)

const wcae1 = people.slice()
wcae1.unshift('Winston Churchill', 'Albert Einstein')
console.log(wcae1)
const wcae2 = people.slice()
wcae2.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
console.log(wcae2)

const cdwd1 = people.slice()
cdwd1.push('Charles Darwin', 'Walt Disney')
console.log(cdwd1)
const cdwd2 = people.slice()
cdwd2.splice(cdwd2.length, 0, 'Charles Darwin', 'Walt Disney')
console.log(cdwd2)

const pplvb = people.slice()
pplvb.splice(4, 0, 'Pablo Picasso', 'Ludwig van Beethoven')
console.log(pplvb)

const nobf1 = people.slice()
nobf1.shift()
nobf1.shift()
console.log(nobf1)
const nobf2 = people.slice()
nobf2.splice(0, 2)
console.log(nobf2)

const noabe1 = people.slice()
noabe1.pop()
noabe1.pop()
console.log(noabe1)
const noabe2 = people.slice()
noabe2.splice(noabe2.length-2, 2)
console.log(noabe2)

const nomg = people.slice()
const gandhiIndex = nomg.indexOf('Mahatma Gandhi')
nomg.splice(gandhiIndex, 1)
console.log(nomg)
