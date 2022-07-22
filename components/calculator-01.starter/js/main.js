const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const calculatorButtonsDiv = calculator.querySelector('.calculator__keys')

calculatorButtonsDiv.addEventListener('click', e => {
  if (!e.target.closest('button')) return

  const button = e.target
  const { buttonType, key } = button.dataset
  const { previousButtonType } = calculator.dataset
  const result = display.textContent
  
  const operatorKeys = [...calculatorButtonsDiv.children].filter(button => button.dataset.buttonType === 'operator')
  operatorKeys.forEach(button => button.classList.remove('is-pressed'))
  
  if (buttonType === 'number') {
    if (result === '0') {
      display.textContent = key
    } else {
      display.textContent = result + key
    }
    
    if (previousButtonType === 'operator') {
      display.textContent = key
    }
  }
  
  if (buttonType === 'decimal') {
    display.textContent = result + '.'
  }
  
  if (buttonType === 'operator') {
    button.classList.add('is-pressed')
    calculator.dataset.firstValue = result
    calculator.dataset.operator = button.dataset.key
  }
  
  if (buttonType === 'equal') {
    const firstValue = parseFloat(calculator.dataset.firstValue)
    const operator = calculator.dataset.operator
    const secondValue = parseFloat(result)

    let newResult
    if (operator === 'plus') newResult = firstValue + secondValue
    if (operator === 'minus') newResult = firstValue - secondValue
    if (operator === 'times') newResult = firstValue * secondValue
    if (operator === 'divide') newResult = firstValue / secondValue

    display.textContent = newResult
  }

  if (buttonType !== 'clear') {
    const clearButton = calculator.querySelector('[data-button-type=clear')
    clearButton.textContent = 'CE'
  }
  
  if (buttonType === 'clear') {
    if (button.textContent === 'AC') {
      delete calculator.dataset.firstValue
      delete calculator.dataset.operator
    }

    display.textContent = '0'
    button.textContent = 'AC'
  }

  calculator.dataset.previousButtonType = buttonType
})



// TESTS!
// 


// const buttonTwo = calculator.querySelector('[data-key="2"]')
// buttonTwo.click()

// const result = calculator.querySelector('.calculator__display').textContent
// console.assert(result === '2', 'Number key')

// const clearKey = calculator.querySelector('[data-key="clear"]')
// clearKey.click()
// clearKey.click()
// const resultAfterClear = calculator.querySelector('.calculator__display').textContent
// console.assert(resultAfterClear === '0', 'Calculator cleared')

// console.assert(!calculator.dataset.firstValue, 'No first value!')
// console.assert(!calculator.dataset.operator, 'No operator value!')



function pressKey(key) {
  calculator.querySelector(`[data-key="${key}"]`).click()
}

function getDisplayValue() {
  return calculator.querySelector('.calculator__display').textContent
}

function resetCalculator() {
  pressKey('clear')
  pressKey('clear')

  console.assert(getDisplayValue() === '0', 'Calculator cleared')
  console.assert(!calculator.dataset.firstValue, 'No first value')
  console.assert(!calculator.dataset.operator, 'No operator value')
}

function pressKeys(...keys) {
  keys.forEach(pressKey)
}

function runTest(test) {
  pressKeys(...test.keys)
  console.assert(getDisplayValue() === test.result, test.message)
  resetCalculator()
}


// pressKey(2)
// console.assert(getDisplayValue() === '2', 'Number key')
// resetCalculator()

// pressKey(3)
// pressKey(5)
// console.assert(getDisplayValue() === '35', 'Number number')
// resetCalculator()

// pressKey('4')
// pressKey('decimal')
// console.assert(getDisplayValue() === '4.', 'Nuklber Decimal')
// resetCalculator()

// pressKeys('4', 'decimal', '5')
// console.assert(getDisplayValue() === '4.5', 'Number decimal number')
// resetCalculator()


// runTest({
//   message: 'Number decimal number',
//   keys: ['4', 'decimal', '5']
//   result: '4.5'
// })

const test = [
  {
    message: 'number key',
    keys: ['2'],
    result: '2',
  },
  {
    message: 'Number Number',
    keys: ['3', '5'],
    result: '35'
  },
  {
    message: 'Number Decimal',
    keys: ['4', 'decimal'],
    result: '4.'
  },
  {
    message: 'Number Decimal Number',
    keys: ['4', 'decimal', '5'],
    result: '4.5'
  },
  {
    message: 'addition',
    keys: ['4', 'plus', '5', 'equal'],
    result: '9'
  }
]
test.forEach(runTest)


function testClearKey() {
  // Before calculation
  pressKeys('5', 'clear')
  const clearKeyText = calculator.querySelector('[data-key="clear"]').textContent
  console.assert(getDisplayValue() === '0', 'Clear before calculation')
  console.assert(clearKeyText === 'AC', 'Clear once, should show AC')
  resetCalculator()
  // After calculator
  pressKeys('5', 'times', '9', 'equal', 'clear')
  const { firstValue, operator } = calculator.dataset
  console.assert(firstValue, 'Clear once; should have first value')
  console.assert(operator, 'Clear once, should have operator value')
  resetCalculator()
}
testClearKey()
