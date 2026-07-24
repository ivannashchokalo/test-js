// 1

// const users = [
//   { id: 1, name: "Ann", city: "Kyiv" },
//   { id: 2, name: "Ivan", city: "Lviv" },
//   { id: 3, name: "Kate", city: "Kyiv" },
//   { id: 4, name: "John", city: "Lviv" },
//   { id: 5, name: "Mike", city: "Odesa" },
// ];

// // {
// //   Kyiv: [...],
// //   Lviv: [...],
// //   Odesa: [...]
// // }

// function groupByCity(users) {
//   return users.reduce((acc, { city, ...user }) => {
//     if (!acc[city]) {
//       acc[city] = [];
//     }

//     acc[city].push(user);

//     // if (acc[user.city]) {
//     //   acc[user.city].push(user);
//     // } else {
//     //   acc[user.city] = [user];
//     // }

//     return acc;
//   }, {});
// }

// console.log(groupByCity(users));

// ================ 2

// const products = [
//   { id: 1, name: "TV" },
//   { id: 2, name: "Phone" },
//   { id: 1, name: "TV" },
//   { id: 3, name: "PC" },
//   { id: 2, name: "Phone" },
// ];

// function filterProducts(products) {
//   //   return products.reduce((acc, product) => {
//   //     if (!acc.find((el) => el.id == product.id)) {
//   //       acc.push(product);
//   //     }

//   //     return acc;
//   //   }, []);

//   return products.filter(
//     (product, index, arr) =>
//       index === arr.findIndex((ar) => ar.id == product.id),
//   );
// }

// console.log(filterProducts(products));

//спробувати через мапи

//======= 3

// const text = "cat dog dog cat cat bird";

// function findWords(text) {
//   //1 варіант
//   //   const arr = text.split(" ");
//   //   const obj = arr.reduce((acc, word) => {
//   //     if (!acc[word]) {
//   //       acc[word] = 1;
//   //     } else {
//   //       acc[word] += 1;
//   //     }
//   //     return acc;
//   //   }, {});
//   //       const newArr = Object.entries(obj);
//   //   console.log(newArr);
//   //   const maxCount = Math.max(newArr[0][1], newArr[0][1], newArr[0][1]);
//   //   for (const el of newArr) {
//   //     if (el[1] === maxCount) return el[0];
//   //   }
//   //2 варіант
//   // const map = {};
//   // text.split(" ").forEach((word) => {
//   //   map[word] = (map[word] || 0) + 1;
//   // });
//   //   console.log(map);
//   // let maxWord = "";
//   // let maxCount = 0;
//   // for (const key in map) {
//   //     if (map[key] > maxCount) {
//   //         maxCount = map[key];
//   //         maxWord = key;
//   //     }
//   // }
//   // return maxWord;
// }

// console.log(findWords(text));

//==== 4

// [
//   { id: 1, title: "Phone", price: 1000 },
//   { id: 2, title: "TV", price: 2000 },
//   { id: 3, title: "Laptop", price: 3000 },
// ]

// const products = [
//   { id: 1, title: "Phone" },
//   { id: 2, title: "TV" },
//   { id: 3, title: "Laptop" },
// ];

// const prices = [
//   { productId: 1, price: 1000 },
//   { productId: 2, price: 2000 },
//   { productId: 3, price: 3000 },
// ];

// function concatArr(arr1, arr2) {

//1
//   const newArr = products.map((product) => {
//     return prices.reduce((acc, { productId, ...price }) => {
//       return { ...product, ...price };
//     }, {});
//   });

//2
//   products.map((product) => ({
//     ...product,
//     price: prices.find((p) => p.productId === product.id)?.price,
//   }));

//   console.log(newArr);
// }

// console.log(concatArr());

//======== 5

// [
//   { id: 2, name: "TV" }
// ]

// const products = [
//   { id: 1, name: "Phone" },
//   { id: 2, name: "TV" },
//   { id: 3, name: "Laptop" },
// ];

// const stock = [
//   { productId: 1, quantity: 10 },
//   { productId: 3, quantity: 5 },
// ];

// function findProducts(products, stock) {
//   return products.filter((product) => {
//     const res = !stock.some((item) => item.productId === product.id);
//   });
// }

// console.log(findProducts(products, stock));

//========== 6

// const users = [
//   { name: "Kate", age: 25 },
//   { name: "Ann", age: 25 },
//   { name: "John", age: 18 },
// ];

// function sort(users) {
//   return users.toSorted((a, b) => {
//     if (a.age == b.age) {
//       return a.name.localeCompare(b.name);
//     }
//     return a.age - b.age;
//   });
// }

// console.log(sort(users));

//============ 7. доробити

const emails = [
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com",
  "b@gmail.com",
];

// ["a@gmail.com", "b@gmail.com"]

function findDuplicates(emails) {
  let dublicates = [];

  const arr = [...new Set(emails)];

  return arr;
}

console.log(findDuplicates(emails));
