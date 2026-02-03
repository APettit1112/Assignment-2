const fs = require('fs');

// Parse numbers (one per line) from a file and return an array of numbers
function parseNumbers(filepath) {
  const data = fs.readFileSync(filepath, 'utf8');
  const lines = data.split(/\r?\n/);
  const numbers = lines
    .map(line => line.trim())
    .filter(line => line !== '')
    .map(Number)
    .filter(n => !Number.isNaN(n));
  return numbers;
}

// Sum an array of numbers
function sumNumbers(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Find the minimum number in an array (or null if empty)
function findMin(numbers) {
  return numbers.length ? Math.min(...numbers) : null;
}

// Find the maximum number in an array (or null if empty)
function findMax(numbers) {
  return numbers.length ? Math.max(...numbers) : null;
}

// Calculate the average (or null if empty)
function averageNumbers(numbers) {
  return numbers.length ? sumNumbers(numbers) / numbers.length : null;
}

// Process a file and return summary statistics
function processFile(filepath) {
  const numbers = parseNumbers(filepath);
  return {
    count: numbers.length,
    sum: sumNumbers(numbers),
    min: findMin(numbers),
    max: findMax(numbers),
    average: averageNumbers(numbers),
  };
}

module.exports = {
  parseNumbers,
  sumNumbers,
  findMin,
  findMax,
  averageNumbers,
  processFile,
};

// Self-check: when run directly, print analysis for sample-numbers.txt
if (require.main === module) {
  const path = 'data/sample-numbers.txt';
  const result = processFile(path);
  console.log(`File: ${path}`);
  console.log('  Count:', result.count);
  console.log('  Sum:', result.sum);
  console.log('  Min:', result.min);
  console.log('  Max:', result.max);
  console.log('  Average:', result.average);
}
