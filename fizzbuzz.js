const fizzbuzz = number => {
  const FIZZ = 'fizz'
  const BUZZ = 'buzz'
  const LUCKY = 'lucky'

  const containsTheNumber3 = number.toString().indexOf(3) > -1
  const isMultipleOf3 = number % 3 === 0
  const containsTheNumber5 = number.toString().indexOf(5) > -1
  const isMultipleOf5 = number % 5 === 0

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
