const fizzbuzz = require('./fizzbuzz')

const passedArguments = process.argv.slice(2)

const result = fizzbuzz(passedArguments[0])
console.log(`${result}\n`)
