// function showMessage(message) {
//   document.getElementById('message').textContent = message
// }


// let amount = Number.parseFloat('123.3A')
// amount = amount.toString()

// message = message.substring(1)
//single comment
// message = message.length

/* multi
line
comment */

// let taxRate = 0.8
// let price = 1.1 + 1.3

// let saved = 10
// saved = null

// let person = {
//   name: 'John',
//   secondName: 'Mohan'
// }
//
// showMessage(person.name)
// console.log
//
// let price = 20
//
// if ( price !== 15 ) {
//   showMessage('discounted')
// }

// let price = 1
//
// if (price === 5) {
//   showMessage('true')
// } else if (price >=   1){
//   showMessage('false')
// } else {
//   showMessage('neither')
// }


// ternary operator

// let price = 20
//
// let message = (price > 5) ? 'yes' : 'no'
//
// showMessage(message )

// for (let i = 0; i < 5; i++ ) {
//   console.log(i)
// }

// let i = 4
//
// while (i > 0) {
//   console.log(i)
//   i--
// }

//do while loop

//
// let i = -4
//
// do {
//   console.log(i)
//   i--
// } while (i > 0)


// let myFunction = function (message, firstName) {
//   console.log(message)
//   console.log(firstName)
// }
//
// myFunction('Hello', 'John')



// let key = 42
//
// function getSecretCode(value) {
//   let code = value * key
//   return code
//   //or you can just do return value * 42
// }
//
// let secretCode =  secretCode(2)
// showMessage(secretCode)



//FUNCTION in a functions and global/local scope

// let key = 42
//
// function getSecretCode(value) {
//
//   let keyGenerator = function() {
//     let key = 12
//     console.log('in keyGenerator: ', key)
//     return key
//   }
//   //when this function finishes executing this key, no longer exists
//
//   let code = value * keyGenerator()
//   console.log(' in getSecretCode: ', key)
//   return code
//   //this console.log refers to the outer key
// }
//
// let secretCode =  getSecretCode(2)
//
// showMessage(secretCode)

//DOM

function showMessage(message) {
  document.getElementById('message').textContent = message
}

function changePercentOff(percentage) {
  document.getElementById('percent-off').textContent = percentage + '% off'
}

changePercentOff(32)

// let mySymbol = Symbol()

// let person = {
//   name:'John',
//   age: 32,
//   partTime: false,
//   showInfo: function() {
//     showMessage(this.name + 'is' + this.age)
//   }
//   // [mySymbol]: 'secret info was can access only through the symbol'
// }
//
// person.showInfo()

//objects methods/this keyword

// let person = {
//   name: 'John',
//   age: 32,
//   partTime: false,
//   showInfo: function(dummyAge) {
//     showMessage(this.name + ' is ' + dummyAge)
//   }
//   // [mySymbol]: 'secret info was can access only through the symbol'
// }
//
// person.showInfo(99)

//common object methods

let dateToday = new Date()

showMessage(dateToday.toDateString())

showMessage( Math.abs(-42))

showMessage( Math.floor(43.01))
