import func from './index';

describe('example test', () => {
  it('runs the test', () => {
    expect.assertions(1);

    const value = 'hello world';

    expect(func(value)).toBe(value);
  });
});
