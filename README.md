## High Card Dealer with Tests

Useful test running commands
```
yarn test 
```
- runs the full test suite
```
yarn test:debug
```
- runs the test suite and hits debuggers if Node developer tools is open in Chrome 
```
yarn test src/__tests__/01_Card.test.js
```
- runs a specific test file 


#### Skipping Tests

```js
test('it is raining', () => {
  expect(inchesOfRain()).toBeGreaterThan(0);
});

test.skip('it is not snowing', () => {
  expect(inchesOfSnow()).toBe(0);
});
```

```js
test('it is raining', () => {
  expect(inchesOfRain()).toBeGreaterThan(0);
});

test.only('it is not snowing', () => {
  expect(inchesOfSnow()).toBe(0);
});
```

Using `x` before a test can alos work

```
it.skip(name, fn) or
xit(name, fn) or
xtest(name, fn)
```