function sum(a, b) {
  return a + b;
}

function sayHelloTo(username){
  return "Hello, " + username + "!";
}

function sub(a, b){
  return a - b;
}

function prod(a, b) {
  return a * b;
}

function answer() {
  return 42;
}

function digital_root(n) {
  return (n-1)%9+1;
}
function sum42(a, b) {
  return a + b + 42;
}

function anomalyCode(x) {
  return '5' + x - x;
}

var numArray = [];
var arrayLen = 10;

function setArray(arrayLen){
  for(var i = 0; i < arrayLen; i++){
    numArray[i] = randInt(0, 100);
  }

  return numArray;
}

function randInt(min, max){
    return Math.round(Math.random(min, max));
}

function factorize(num){
  var totalProduct = 1;

  for(var i = 1; i < num + 1; i++){
    totalProduct *= i;
  }

  return totalProduct
}

class Point3D{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

function inDist(p1, p2, d){
  return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) + (p1.z - p2.z) * (p1.z - p2.z) < d * d;
}

module.exports = {
  sum: sum,
  sub: sub,
  prod: prod,
  sum42: sum42,
  digital_root: digital_root,
  sayHelloTo: sayHelloTo,
  answer: answer,
  anomalyCode: anomalyCode,
  setArray: setArray,
  randInt: randInt,
  factorize: factorize,
  Point3D: Point3D,
  inDist: inDist
}
