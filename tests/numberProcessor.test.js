const { parseNumbers, sumNumbers, findMin, findMax, averageNumbers, processFile } = require('../src/numberProcessor');

const path = 'data/sample-numbers.txt';

describe('sample-numbers.txt analysis', () => {
  test('parses numbers and sums correctly', () => {
    const numbers = parseNumbers(path);
    expect(numbers.length).toBe(30);
    expect(sumNumbers(numbers)).toBe(2597);
  });

  test('finds min and max', () => {
    const numbers = parseNumbers(path);
    expect(findMin(numbers)).toBe(73);
    expect(findMax(numbers)).toBe(96);
  });

  test('calculates average', () => {
    const numbers = parseNumbers(path);
    expect(averageNumbers(numbers)).toBeCloseTo(86.56666666666666, 10);
  });

  test('processFile returns summary', () => {
    const summary = processFile(path);
    expect(summary).toEqual({
      count: 30,
      sum: 2597,
      min: 73,
      max: 96,
      average: expect.any(Number),
    });
    expect(summary.average).toBeCloseTo(86.56666666666666, 10);
  });
});
