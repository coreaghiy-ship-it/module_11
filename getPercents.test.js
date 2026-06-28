const getPercents = require('./getPercents');

describe('getPercents', () => {
  test('returns percent from number', () => {
    expect(getPercents(30, 200)).toBe(60);
  });

  test('returns 0 when percent is 0', () => {
    expect(getPercents(0, 500)).toBe(0);
  });

  test('works with decimal percent', () => {
    expect(getPercents(12.5, 80)).toBe(10);
  });

  test('throws error when arguments are not numbers', () => {
    expect(() => getPercents('30', 200)).toThrow(TypeError);
  });
});
