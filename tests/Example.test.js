// test example.test.js
const Example = require('../Example');
describe('Example Class', () => {
  let example = new Example();

  test('greet method should return a greeting message', () => {
    expect(example.greet()).toBe('Hello, Example!');
  });
});