const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

// for (const number of numbers) {
//   console.log(number)
// }

// for (const number of numbers) {
//   if (number > 5) { console.log(number) }
// }

// const greaterThanTen = []
// for (const number of numbers) {
//   if (number > 10) {
//     greaterThanTen.push(number)
//   }
// }
// console.log(greaterThanTen)

const timesFive = []
for (const number of numbers) {
  timesFive.push(number * 5)
}
console.log(timesFive)
