const { sum, sub, prod, digital_root, sum42, sayHelloTo, anomalyCode, setArray, randInt, factorize, Point3D, inDist } = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

/**
 * Sum to be defined
 */

test('Sum function exists', () => {
  expect(sum).toBeDefined();
});

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
  expect(sum(1, 2)).toBe(3);
}

function helloTest() {
  expect(sayHelloTo("Dan")).toBe("Hello, Dan!");
}

test('sayHelloTo function exists', () => {
  expect(sayHelloTo).toBeDefined();
});

test('sayHelloTo Dan should be Hello, Dan!', () => {
  helloTest();
});

/**
 * Prod to be defined
 */

test('Prod function exists',()=>{
  expect(prod).toBeDefined();
});

/**
 * prod function output
 */

test('prod calculates 2 * 10 = 20', () => {
  expect(prod(2, 10)).toBe(20);
});

/**
 * Digital Root to be defined
 */

 test('digital_root function exists', ()=>{
  expect('digital_root').toBeDefined();
 });

test('digital root of 265 should equal 4', () => {
  expect(digital_root(265)).toBe(4);
});

test('Sum42 function exists', () => {
  expect(sum42).toBeDefined();
});

test('Sum42 3 + 1 should be 46', () => {
  expect(sum42(3, 1)).toBe(46);
});

test('Sub function exists', () => {
  expect(sub).toBeDefined();
});

test('Sub 10 - 3 should be 7', () => {
  expect(sub(10,3)).toBe(7);
});

test('anomalyCode function exists', () => {
  expect(anomalyCode(1)).toBeDefined();
});

test('anomalyCode one should be 50', () => {
  expect(anomalyCode(7)).toBe(50);
});

test('anomalyCode ten should be 500', () => {
  expect(anomalyCode(78)).toBe(500);
});

test('anomalyCode hundred should be 5000', () => {
  expect(anomalyCode(789)).toBe(5000);
});

test('anomalyCode thousand should be 50000', () => {
  expect(anomalyCode(7891)).toBe(50000);
});

test('randInt generates random Integer', () => {
  expect(Number.isInteger(randInt(1, 5))).toBe(true);
});

test('array length should match number of elements actually created', () =>{
  expect(setArray(5).length).toBe(5);
});

test('factorize 5! should be 120', () => {
  expect(factorize(5)).toBe(120);
});

test('Point3D object exists', () => {
  expect(Point3D).toBeDefined();
});

test('intDist point (0, 0, 0) and (1, 1, 1) are within distance of 2', () => {
  expect(inDist(new Point3D(0, 0, 0), new Point3D(1, 1, 1), 2)).toBe(true);
});

