const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('quotes.txt analysis', () => {
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
});

describe('sample-text.txt analysis', () => {
  const path = 'data/sample-text.txt';

  test('counts words in sample-text.txt', () => {
    expect(countWords(path)).toBe(207);
  });

  test('finds longest word in sample-text.txt', () => {
    expect(findLongestWord(path)).toBe('infrastructure');
  });

  test('counts lines in sample-text.txt', () => {
    expect(countLines(path)).toBe(1);
  });
});
