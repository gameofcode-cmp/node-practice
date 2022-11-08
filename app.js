const validator = require('validator')
const chalk = require('chalk')
//import validator from 'validator' //future syntax
const name = require('./utils')
const getNotes = require('./notes')

const msg = getNotes();
console.log(msg)
console.log(validator.isEmail('something+erer@something.com'))
console.log(validator.isURL('hted://something+erer@something.com'))
console.log(chalk.green('Success!'))
