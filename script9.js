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

// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// let a = 3;
// let b = 6;
// let c = a;
// a = b;
// b = c;
// console.log(a); //6
// console.log(b); //3

function sortBy(arr, str) {
  if (str === "Asc") {
    return arr.sort(function (a, b) {
      return a - b;
    });
  } else if (str === "Desc") {
    return arr.sort(function (a, b) {
      return b - a;
    });
  } else {
    return arr;
  }
}
console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));
