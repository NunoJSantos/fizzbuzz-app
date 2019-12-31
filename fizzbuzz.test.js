const fizzbuzz = require('./fizzbuzz')

test("returns the passed number if it's not a multiple nor contains the numbers 3 or 5", () => {
  const result = fizzbuzz(1)
  expect(result).toBe(1)
})

test("returns 'lucky' if it's a multiple of 3, multiple of 5 and if contains 3 or 5 in its representation",  () => {
  const result = fizzbuzz(15)
  expect(result).toBe('lucky')
})

test("returns 'fizz fizz' if it's a multiple of 3 and contains 3 in its representation", () => {
  const result = fizzbuzz(3)
  expect(result).toBe('fizz fizz')
})

test("returns 'buzz buzz' if it's a multiple of 5 and contains 5 in its representation", () => {
  const result = fizzbuzz(5)
  expect(result).toBe('buzz buzz')
})

test("returns 'fizz' if it's a multiple of 3 or contains 3 in its representation, but not both", () => {
  const result = fizzbuzz(6)
  expect(result).toBe('fizz')
})

test("returns 'buzz' if it's a multiple of 5 or contains 5 in its representation, but not both", () => {
  const result = fizzbuzz(10)
  expect(result).toBe('buzz')
})
