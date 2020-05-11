function showMessage(message) {
  document.getElementById('message').textContent = message
}

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


ternary operator

let price = 20

let message = (price > 5) ? 'yes' : 'no'

showMessage(message )
