const signUpForPlan = (plan = 'basic') => {
  console.log(plan)
}

const createEmployee = (employee) => {
  const { firstName, lastName, age, gender, position = 'associate' } = employee
  console.log(employee.lastName)
}
createEmployee({firstName: 'gary', lastName: 'mazzeo', age: 13, gender: 'male'})

const numbers = ['one', 'two', 'three', 'four']

const callNumber = (first, second, third, fourth) => {
  console.log(first)
  console.log(second)
  console.log(third)
  console.log(fourth)
}

callNumber(...numbers)

const arrayList = (...array) => {
  array.forEach(item => {
    console.log(`here we have ${item}`)
  });
}
arrayList('firstName', 'lastName', 'title', 'address', 'phoneNumber')

const people = [
  {name: 'Zell'},
  {name: 'Vincy'},
  {name: 'Casper'},
]

const objectIndex = (name) => people.find(person => person.name === name)
console.log(objectIndex('Casper'))

const casperIndex = people.findIndex(person => person.name === 'Casper')
console.log(casperIndex)


// Find the index of Thomas Edison.
// Find the object that contains Winston Churchill.
// Create an array that contains people that died before 1940.
// Create an array that contains people that were alive between 1850 and 1970.
// Create an array that contains the firstName, lastName and yearsLived for each person (where yearsLived is the number of years the person lived).
// Get the total number of yearsLived of the people who were alive between 1750 and 1900.

const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearBorn: 1706, yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearBorn: 1847, yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearBorn: 1882, yearOfDeath: 1945 },
  { firstName: 'Napoleon', lastName: 'Bonaparte', yearBorn: 1769, yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearBorn: 1809, yearOfDeath: 1865 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearBorn: 1869, yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearBorn: 1874, yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearBorn: 1809, yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearBorn: 1879, yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearBorn: 1881, yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearBorn: 1770, yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearBorn: 1901, yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearBorn: 1863, yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearBorn: 1955, yearOfDeath: 2012 }
]

// const aliveBetween1850And1970 = people.filter(person => {
//   const { yearBorn, yearOfDeath } = person
//   return yearBorn < 1970 && yearOfDeath > 1850
// })
// console.log(aliveBetween1850And1970)

const yearsLived = (person) => {
  const { yearBorn, yearOfDeath } = person
  return yearOfDeath - yearBorn
}

const add = (a, b) => a + b

const totalYears = people.filter (person => person.yearBorn < 1900 && person.yearOfDeath > 1750).map(person => yearsLived(person)).reduce(add)
console.log(totalYears)
// const totalYears = 
// people.filter(person => {
//   if (person.yearBorn >= 1750 && person.yearOfDeath <= 1900) {
//     return person
//   } else if (person.yearOfDeath >= 1750 && person.yearOfDeath <= 1900) {
//     return person
//   }
// })
//   .map(person => yearsLived(person))
//   .reduce(add)
// console.log(totalYears)

const peopleYears = people.map(person => `${person.firstName} ${person.lastName} was ${yearsLived(person)} years old.`)
console.log(peopleYears)

// const alive1850To1970 = people.filter(person => {
//   if ((person.yearBorn || person.yearOfDeath) >= 1850 && (person.yearBorn || person.yearOfDeath) <=1970) {
//     return person
// })
const alive1850To1970 = people.filter(person => {
  if (person.yearBorn >= 1850 && person.yearBorn <=1970) {
    return person
  } else if (person.yearOfDeath > 1850 && person.yearOfDeath < 1970) {
    return person
  }
})
console.log(alive1850To1970)

const beforeNineteenFourty = people.filter(person => person.yearOfDeath < 1940)
console.log(beforeNineteenFourty)

const churchillObject = people.find(person => person.firstName === 'Winston')
console.log(churchillObject)

const edisonIndex = people.findIndex(person => person.lastName === 'Edison')
console.log(edisonIndex)

const array = [
  [1,2,3,4,5],
  [6,7,8,9,10]
]

const flattened = array.reduce((a,i) => [...a, ...i], [])
console.log(flattened)

// iterating over objects, turn them into arrays first
const fruits = {
  apple: 28,
  orange: 14,
  pear: 48,
  kumquat: 23,
  persimmon: 12
}

const keys = Object.keys(fruits)
console.log(keys)

const count = Object.values(fruits)
console.log(count)

const entries = Object.entries(fruits)
for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`)
}

// implicit return
const sayHi = (name) => ({name: `${name}`})

console.log(sayHi('gerri'))



javascript:!function(e,t){var o=e.location.href.match(/t\/([^&]+)/);if(o.length>0){let a=function(e){t.removeEventListener("copy",a,!0),e.preventDefault();let c=e.clipboardData;c.clearData(),c.setData("text/plain","https://docs.google.com/forms/d/e/1FAIpQLScWMZ8w5rDbuw0Gyouqck-1_hNO-LbZ9WLx0zLkS_yiGoCoPw/viewform?usp=pp_url&entry.43440761="+o[1])};t.addEventListener("copy",a,!0),t.execCommand("copy"),e.alert("URL copied to clipboard")}}(window,document);
