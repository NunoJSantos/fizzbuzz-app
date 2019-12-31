const fizzbuzz = require('./fizzbuzz')

const passedArguments = process.argv.slice(2)

console.log('==>> The Amazing FizzBuzz <<==')

if(passedArguments.length < 1) {
  console.log(' ERROR:  a number as an argument is needed to use this amazing tool\n')
  return
}

if(isNaN(passedArguments[0])) {
  console.log(` ERROR:  '${passedArguments[0]}' is not a number... try it with 1, 2, 3 or 73584. You have plenty of choices\n`)
  return
}

const result = fizzbuzz(passedArguments[0])
console.log(` OUTPUT:  ${result}\n`)
