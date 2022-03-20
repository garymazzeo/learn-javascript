const display = document.querySelector('.display')
const keys = document.querySelector('.keys')
const digits = keys.querySelectorAll('.digit')
const period = keys.querySelector('.period')
const operators = keys.querySelectorAll('.operator')
const equals = keys.querySelector('.equals')
const clear = keys.querySelector('.clear')

let num1, operator, reset = true


digits.forEach(digit => {
  digit.addEventListener('click', e => {
    display.innerText = (reset === true) ? parseFloat(e.target.innerText) : `${display.innerText}${parseInt(e.target.innerText)}`
    reset = false
  })
})

period.addEventListener('click', e => {
  if (display.innerText.includes('.')) return
  display.innerText = `${display.innerText}.`
})

clear.addEventListener('click', e => {
  reset = true
  num1 = null
  operator = null
  display.innerText = 0
})

operators.forEach(op => {
  op.addEventListener('click', e => {
    num1 = display.innerText
    operator = e.target.dataset.op
    reset = true
  })
})

equals.addEventListener('click', e => {
  if (!num1) return
  console.log(num1)

  if (operator === '+') {
    display.innerText = Number(num1) + Number(display.innerText)
  } else if (operator === '-') {
    display.innerText = Number(num1) - Number(display.innerText)
  } else if (operator === '*') {
    display.innerText = Number(num1) * Number(display.innerText)
  } else if (operator === '/') {
    display.innerText = Number(num1) / Number(display.innerText)
  }
})
