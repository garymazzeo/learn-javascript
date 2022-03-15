const goodGuys = document.querySelectorAll('[data-type=good-guy]')
Array.from(goodGuys).forEach(el => el.classList.add('yay'))
// for (const character of goodGuys) {
//   character.classList.add('yay')
// }

const badGuys = document.querySelectorAll('[data-type=villain')
for (const villain of badGuys) {
  villain.classList.add('nay')
}

const allCharacters = document.querySelectorAll('.character')
for (const character of allCharacters) {
  character.classList.add('star-wars')
}
