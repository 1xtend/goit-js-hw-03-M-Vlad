'use strict';

const countProps = function (obj) {
  const objArray = Object.values(obj).length;
  return objArray;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
