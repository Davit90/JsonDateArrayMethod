"use strict";

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8, 9];
// const arr3 = arr1.concat(arr2);

// console.log(arr1);
// console.log(arr3);

// function sum(...args) {
//   return args.reduce((sum, current) => {
//     return sum + current;
//   });
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
