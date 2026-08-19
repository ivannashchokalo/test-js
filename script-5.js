//========= 1

// const users = [
//   { id: 1, name: "Anna", age: 25, active: true },
//   { id: 2, name: "John", age: 17, active: false },
//   { id: 3, name: "Kate", age: 30, active: true },
//   { id: 4, name: "Mike", age: 22, active: true },
// ];

// function getActiveAdultNames(users) {
//   //1
//   //   let arr = [];
//   //   for (const user of users) {
//   //     if (user.active && user.age >= 18) {
//   //       arr.push(user.name);
//   //     }
//   //   }
//   //   return arr;

//   //2

//   return users
//     .filter((user) => user.active && user.age >= 18)
//     .map((user) => user.name);
// }

// console.log(getActiveAdultNames(users));

//============ 2

// function hasDuplicates(arr) {
//   const unique = [...new Set(arr)];

//   return arr.length > unique.length;
// }

// console.log(hasDuplicates([1, 2, 3, 4]));
// console.log(hasDuplicates([1, 2, 3, 2]));
// console.log(hasDuplicates(["a", "b", "a"])); // true
// console.log(hasDuplicates([])); // false

//============== 3

// function firstUniqueChar(str) {
//   const arr = str.split("");

//   const unique = new Set();
//   const notUnique = new Set();

//   for (const el of arr) {
//     if (!unique.has(el)) {
//       unique.add(el);
//     } else {
//       notUnique.add(el);
//     }
//   }

//   for (const el of arr) {
//     if (unique.has(el) && !notUnique.has(el)) {
//       return el;
//     }
//   }

//   return null;
// }

// console.log(firstUniqueChar("leetcode")); // "l"
// console.log(firstUniqueChar("loveleetcode")); // "v"
// console.log(firstUniqueChar("aabb")); // null
// console.log(firstUniqueChar("")); // null

//=============== 4

const products = [
  { name: "Phone", category: "electronics", price: 800 },
  { name: "Laptop", category: "electronics", price: 1200 },
  { name: "Chair", category: "furniture", price: 200 },
  { name: "Table", category: "furniture", price: 500 },
];

// function getTotalByCategory(products) {
//   return products.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = product.price;
//     } else {
//       acc[product.category] += product.price;
//     }

//     return acc;
//   }, {});
// }

// function getTotalByCategory(products) {
//   return products.reduce((acc, product) => {
//     if (!acc.has(product.category)) {
//       acc.set(product.category, product.price);
//     } else {
//       acc.set(product.category, acc.get(product.category) + product.price);
//     }

//     return acc;
//   }, new Map());
// }

// console.log(getTotalByCategory(products));

//====== 5

// function createCounter() {
//   let count = 0;
//   return function () {
//     return (count += 1);
//   };
// }

// const counter = createCounter();
// const anotherCounter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// console.log(anotherCounter()); // 1
// console.log(counter()); // 4

//======= 6

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

//========= 7

// const user = {
//   name: "Ivan",
//   showName() {
//     console.log(this.name);
//   },
// };

// ========= 8

// function timer(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done"), time);
//   });
// }

// timer(1000).then((res) => console.log(res));

//=========== 9
// async function getUser() {
//   return { id: 42, name: "Anna" };
// }

// async function getPosts(userId) {
//   return [`Post by user ${userId}`];
// }

//======= 10

// function delay(fn, ms) {
//   let id;
//   clearTimeout(id);

//   return function (v) {
//     id = setTimeout(fn(v), ms);
//   };
// }

// const search = delay((v) => console.log(v), 1000);

// search("r");

//==========    11

// function factorial(n) {
//   if (n <= 0) return 1;

//   return n * factorial(n - 1);
// }

// console.log(factorial(3));

//========. 12

// function sum(n) {
//   if (n === 1) return 1;

//   return n + sum(n - 1);
// }

// console.log(sum(3));

//======== 13

// function flattenArray(arr) {
//   let newArr = [];

//   for (const el of arr) {
//     if (!Array.isArray(el)) {
//       newArr.push(el);
//     } else {
//       newArr.push(...flattenArray(el));
//     }
//   }

//   return newArr;
// }

// console.log(flattenArray([1, [2, [3, 4], 5], 6]));
