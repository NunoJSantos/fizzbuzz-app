const fizzbuzz = require('./fizzbuzz')

test("returns the passed number if it's not a multiple nor contains the numbers 3 or 5", () => {
  const testCases = [1, 2, 4, 7, 8, 11, 14, 16, 17, 19]

  testCases.forEach(number => {
    expect(fizzbuzz(number)).toBe(number)
  })
})

test("returns 'lucky' if it's a multiple of 3, multiple of 5 and if contains 3 or 5 in its representation",  () => {
  const testCases = [15, 30]

  testCases.forEach(number => {
    expect(fizzbuzz(number)).toBe('lucky')
  })
})

test("returns 'fizz fizz' if it's a multiple of 3 and contains 3 in its representation", () => {
  const testCases = [3, 33]

  testCases.forEach(number => {
    expect(fizzbuzz(number)).toBe('fizz fizz')
  })
})

test("returns 'buzz buzz' if it's a multiple of 5 and contains 5 in its representation", () => {
  const testCases = [5, 25, 50]

  testCases.forEach(number => {
    expect(fizzbuzz(number)).toBe('buzz buzz')
  })
})

test("returns 'fizz' if it's a multiple of 3 or contains 3 in its representation, but not both", () => {
  const testCases = [6, 9, 12, 13, 18]

  testCases.forEach(number => {
    expect(fizzbuzz(number)).toBe('fizz')
  })
})

test("returns 'buzz' if it's a multiple of 5 or contains 5 in its representation, but not both", () => {
  const testCases = [10, 20, 40]

  testCases.forEach(number => {
    expect(fizzbuzz(number)).toBe('buzz')
  })
})

test("returns 'fizzbuzz' if it's a multiple of 3 and 5", () => {
  const testCases = [60, 90]

  testCases.forEach(number => {
    expect(fizzbuzz(number)).toBe('fizzbuzz')
  })
})
