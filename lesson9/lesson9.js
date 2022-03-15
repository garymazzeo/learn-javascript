const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Mahatma Gandhi',
  'Napoleon Bonaparte',
  'Abraham Lincoln'
]

// const addBeginning = ['Windston Churchill', 'Albert Einstein', ...people]
// console.log(people.length)
// console.log(addBeginning.length)

// const addEnd = [...people, 'Charles Darwin', 'Walt Disney']
// console.log(people.length)
// console.log(addEnd.length, addEnd)

// const gandhiIndex = people.indexOf('Mahatma Gandhi')
// const addMiddle = [...people]
// addMiddle.splice(gandhiIndex + 1, 0, 'Pablo Picasso', 'Ludwig van Beethoven')
// console.log(people)
// console.log(addMiddle)

/**
 * Removal function
 */
// const peopleToRemove = ['Benjamin Franklin', 'Thomas Edison']
const peopleToRemove = ['Abraham Lincoln', 'Napoleon Bonaparte']
// const peopleToRemove = ['Mahatma Gandhi']

const removePeople = (allPeople, peopleToRemove) => {
  const peopleRemoved = [...allPeople]
  peopleToRemove.forEach(person => {
    if (!allPeople.find(finder => finder === person)) return
    
    const personIndex = peopleRemoved.indexOf(person)
    // console.log(personIndex)
    peopleRemoved.splice(personIndex, 1)
    // console.log(peopleRemoved, peopleRemoved.length)
  })
  return peopleRemoved
}
console.log(removePeople(people, peopleToRemove))
console.log(people)

peopleToRemove.forEach(person => {
  if (!people.find(finder => finder === person)) return
  
  const personIndex = peopleRemoved.indexOf(person)
  // console.log(personIndex)
  peopleRemoved.splice(personIndex, 1)
  // console.log(peopleRemoved, peopleRemoved.length)
})
console.log(peopleRemoved, people)

// Destructure the array and spread the rest of it into a new array.
const [ben, tom, ...others] = people
console.log('others:', others)

// Remove Napoleon Bonaparte and Abraham Lincoln. 🤯
// 0 means the end of the array, -2 is removing 2, but from the end end of the array
const removed = people.slice(0, -2)
