/**
 * Generates a random integer between min and max (inclusive).
 * * How it works (e.g., min = 1, max = 2):
 * 1. (max - min + 1) calculates the total range size -> (2 - 1 + 1) = 2.
 * 2. Math.random() picks a decimal from 0 (inclusive) up to 1 (exclusive).
 * 3. Multiplying by 2 scales that decimal to a range between 0 and 1.999...
 * 4. Math.floor() drops the decimal, leaving only the whole numbers 0 or 1.
 * 5. Adding 'min' (1) shifts the final result to either 1 or 2.
 */
function generateRandomNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

module.exports = { generateRandomNumberBetween };
console.log(generateRandomNumberBetween(1, 2));
