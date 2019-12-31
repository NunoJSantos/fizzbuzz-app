const containsTheNumber = number => input => input.toString().indexOf(number) > -1
const isMultipleOf = number => input => input % number === 0

const fizzbuzz = number => {
  const FIZZ = 'fizz'
  const BUZZ = 'buzz'
  const LUCKY = 'lucky'

  const containsTheNumber3 = containsTheNumber(3)(number)
  const isMultipleOf3 = isMultipleOf(3)(number)
  const containsTheNumber5 = containsTheNumber(5)(number)
  const isMultipleOf5 = isMultipleOf(5)(number)

  if(isMultipleOf3 && isMultipleOf5 && (containsTheNumber3 || containsTheNumber5))
    return LUCKY

  if(isMultipleOf3 && isMultipleOf5)
    return `${FIZZ}${BUZZ}`

  if(isMultipleOf3 && containsTheNumber3)
    return `${FIZZ} ${FIZZ}`
  
  if(isMultipleOf3 || containsTheNumber3)
    return FIZZ
  
  if(isMultipleOf5 && containsTheNumber5)
    return `${BUZZ} ${BUZZ}`

  if(isMultipleOf5 || containsTheNumber5)
    return BUZZ

  return number
}

module.exports = fizzbuzz
