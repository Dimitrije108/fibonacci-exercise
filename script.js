#!/usr/bin/env node

function fibs(n) {
  let array = [0, 1];
  if (n === 1) return array;
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 1; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    array.push(c);
  }
  return array;
}

console.log(fibs(12));

// function fibs(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fibs(n - 1) + fibs(n - 2);
//   }
// }

// console.log(fibs(7));
