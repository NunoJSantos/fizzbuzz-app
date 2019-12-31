const fizzbuzz = require('./fizzbuzz')

test("returns the passed number if it's not a multiple nor contains the numbers 3 or 5", () => {
  const result = fizzbuzz(1)
  expect(result).toBe(1)
})
