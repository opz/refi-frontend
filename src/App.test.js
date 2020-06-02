const isApp = require('./app');

test('isApp function exists', () => {
  expect(typeof isApp).toBeTruthy();
});

test('is connect function exist', () => {
  expect(typeof isConnect).toBeTruthy();
});

test('is disconnect function exist', () => {
  expect(typeof isDisonnect).toBeTruthy();
});
