const list = document.querySelector('ul')

// const callback = e => {
//   const item = e.target.closest('li')
//   if (item) {
//     console.log(item)
//     list.removeEventListener('click', callback)
//   }
// }

// list.addEventListener('click', callback)

let count = 0

const timesClicked = e => {
  const item = e.target.closest('li')
  if (item) {
    count++
    console.log(e.target, count)
    if (count >= 5) {
      list.removeEventListener('click', timesClicked)
    }
  }
}

list.addEventListener('click', timesClicked)
