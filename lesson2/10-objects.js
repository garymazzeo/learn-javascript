console.log('it works!')

// Make an empty object.
const anEmptyObject = {}

// Make a property for your object that can be accessed with a dot notation. Get the value of this property.
const anObject = {
  property: 45,
}

const getProperty = anObject.property
console.log(getProperty)

// Make a property for your object that can only be accessed with the bracket notation. Get the value of this property.
const anObjectWithInvalidProperty = {
  'invalid property': "schwoops",
}

const getInvalidProperty = anObjectWithInvalidProperty['invalid property']
console.log(getInvalidProperty)

// Set the value of a property with the dot notation.
anObject.property = "tasty"
console.log(anObject.property)

// Set the value of a property with the square bracket notation.
anEmptyObject['newProp'] = 'does it work?'
console.log(anEmptyObject.newProp)

// Make a method. Call this method.
const objectWithFunction = {
  changeCard: function() {
    console.log(`hey, it's a method!`)
  }
}

objectWithFunction.changeCard()

// Make a method that takes in an argument. Call this method.
const okay = {
  makeItGo: function (speed) {
    console.log(`your car goes ${speed} mph!`)
  }
}

okay.makeItGo(360)
