'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let itemArray = [];

  for (const item of arr) {
    if (item[prop]) {
      itemArray.push(item[prop]);
    }
  }

  return itemArray;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

// const getAllPropValues = function (arr, prop) {
//   let itemArray = [];

//   for (const items of arr) {
//     itemArray.push(items[prop]);
//   }

//   return itemArray;
// };
