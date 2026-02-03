const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

const path = 'data/quotes.txt';

test('counts words in quotes.txt', () => {
  expect(countWords(path)).toBe(108);
});

test('finds longest word in quotes.txt', () => {
  expect(findLongestWord(path)).toBe('sophistication');
});

test('counts lines in quotes.txt', () => {
  expect(countLines(path)).toBe(10);
});
