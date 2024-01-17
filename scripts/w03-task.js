/* LESSON 3 - Programming Tasks */

let buttonAddNumbers = document.getElementById('addNumbers')
buttonAddNumbers.addEventListener('click', addNumbers)
let buttonSubtractNumbers = document.getElementById('subtractNumbers')
buttonSubtractNumbers.addEventListener('click', subtractNumbers)
let buttonMultipyNumbers = document.getElementById('multiplyNumbers')
let buttonDivideNumbers = document.getElementById('divideNumbers')
buttonDivideNumbers.addEventListener('click', divideNumbers)
let buttonGetTotalDue = document.getElementById('getTotal')
buttonGetTotalDue.addEventListener('click', getTotal)

/* FUNCTIONS */
function add(number1, number2) {
	return number1 + number2
}
function subtract(number1, number2) {
	return number1 - number2
}
multiply = (number1, number2) => number1 * number2
divide = (number1, number2) => number1 / number2


/* Function Definition - Add Numbers */
function addNumbers() {
	let add1 = Number(document.getElementById('add1').value)
	let add2 = Number(document.getElementById('add2').value)
	let sum = document.getElementById('sum')
	sum.value = add(add1, add2)
}

/* Function Expression - Subtract Numbers */
function subtractNumbers() {
	let subtract1 = Number(document.getElementById('subtract1').value)
	let subtract2 = Number(document.getElementById('subtract2').value)
	let difference = document.getElementById('difference')
	difference.value = subtract(subtract1, subtract2)
}

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
  let product = document.getElementById('product')
	let factor1 = Number(document.getElementById('factor1').value)
	let factor2 = Number(document.getElementById('factor2').value)
	product.value = multiply(factor1, factor2)
};

buttonMultipyNumbers.addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divideNumbers() {	
	let dividend = Number(document.getElementById('dividend').value)
	let divisor = Number(document.getElementById('divisor').value)
	let quotient = document.getElementById('quotient')
	quotient.value = divide(dividend, divisor)
}

/* Decision Structure */

function getTotal() {	
	let total = document.getElementById('total')
	let subtotal = Number(document.getElementById('subtotal').value)
	let member = document.getElementById('member').value
	if (member) {
		subtotal *= .85
	}
	total.textContent = `$${subtotal}`
	console.log(subtotal, member);
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
