#!/usr/bin/env node

function fibs(n) {
  let array = [0, 1];
  if (n === 1) return array;
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    array.push(c);
  }
  return array;
}

console.log(fibs(7));

function fibsRec(n) {
  let array = [0, 1];
  if (n === 2) {
    return array;
  } else {
    let result = fibsRec(n - 1);
    let a = result[result.length - 1];
    let b = result[result.length - 2];
    result.push(a + b);
    return result;
  }
}

console.log(fibsRec(7));
