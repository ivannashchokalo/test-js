// function countOccurrences(arr) {
//   return arr.reduce((acc, el) => {
//     if (!acc[el]) {
//       acc[el] = 1;
//       return acc;
//     }
//     acc[el] += 1;
//     return acc;
//   }, {});
// }

// console.log(
//   countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]),
// );

//=== 2

// {
//   18: [
//     { name: "John", age: 18 },
//     { name: "Mike", age: 18 },
//   ],
//   20: [
//     { name: "Ann", age: 20 },
//     { name: "Kate", age: 20 },
//   ],
//   25: [
//     { name: "Bob", age: 25 },
//   ],
// }

// const users = [
//   { name: "Ann", age: 20 },
//   { name: "John", age: 18 },
//   { name: "Kate", age: 20 },
//   { name: "Mike", age: 18 },
//   { name: "Bob", age: 25 },
// ];

// function groupByAge(users) {
//   return users.reduce((acc, el) => {
//     if (!acc[el.age]) {
//       acc[el.age] = [el];
//       return acc;
//     }
//     acc[el.age].push(el);

//     return acc;
//   }, {});
// }

// console.log(groupByAge(users));

//======= 3

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5, 3]));

//===== 4 повертає перше число, яке зустрічається в масиві лише один раз.

// function findFirstUnique(arr) {
//   const obj = arr.reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;

//     return acc;
//   }, {});

//   const keys = Object.keys(obj);

//   return keys.find((key) => obj[key] === 1);
// }

// console.log(findFirstUnique([2, 3, 4, 2, 3, 5, 4]));

//=========== 5. повертає новий масив з елементами, які є в обох масивах

// function intersection(arr1, arr2) {
// 1 варіант
//   let commonElements = [];
//   for (const el of arr1) {
//     if (arr2.includes(el)) {
//       commonElements.push(el);
//     }
//   }
//   return [...new Set(commonElements)];
//2 варіант

//   return [...new Set(arr1.filter((el) => arr2.includes(el)))];

//3 варіант

//   const set = new Set(arr2);
//   const newArr = arr1.filter((el) => set.has(el));

//   return [...new Set(newArr)];
// }

// console.log(intersection([1, 3, 2], [2, 3, 4]));

//========== 6

// function countLetters(word) {
//   return word.split("").reduce((acc, letter) => {
//     if (!acc.has(letter)) {
//       acc.set(letter, 1);
//     } else {
//       acc.set(letter, acc.get(letter) + 1);
//     }

//     return acc;
//   }, new Map());
// }

// console.log(countLetters("banana"));

//=========== 7

// function findMostFrequentWord(words) {
//   const wordsMap = words.split(" ").reduce((acc, word) => {
//     console.log(word);
//     if (!acc.has(word)) {
//       acc.set(word, 1);
//     } else {
//       acc.set(word, acc.get(word) + 1);
//     }
//   }, new Map());

//   const biggestVelue = Map.values();

//   for (const [word, value] of letersMap) {
//     if (value === biggestVelue) return word;
//   }
// }

// console.log(findMostFrequentWord("apple banana apple orange banana apple"));

//============ 8

// const orders = [
//   { id: 1, status: "pending" },
//   { id: 2, status: "completed" },
//   { id: 3, status: "pending" },
//   { id: 4, status: "cancelled" },
//   { id: 5, status: "completed" },
// ];

// function groupsOrdersByStatus(orders) {
//   return orders.reduce((acc, order) => {
//     if (!acc[order.status]) {
//       acc[order.status] = [];
//     }
//     acc[order.status].push(order.id);

//     return acc;
//   }, {});
// }

// console.log(groupsOrdersByStatus(orders));

//res
// {
//   pending: [
//     { id: 1, status: "pending" },
//     { id: 3, status: "pending" },
//   ],
//   completed: [
//     { id: 2, status: "completed" },
//     { id: 5, status: "completed" },
//   ],
//   cancelled: [
//     { id: 4, status: "cancelled" },
//   ],
// }

//============ 9

// const users = [
//   { id: 1, name: "Ann" },
//   { id: 2, name: "John" },
//   { id: 3, name: "Kate" },
// ];
// const profiles = [
//   { userId: 1, age: 20 },
//   { userId: 3, age: 25 },
// ];

// function mergeUsers(users, profiles) {
//   return users.reduce((acc, user) => {
//     const foundProfile = profiles.find((profile) => profile.userId === user.id);
//     if (findedUser) {
//       acc.push({
//         ...user,
//         age: findedUser.age,
//       });
//     } else {
//       acc.push({
//         ...user,
//         age: null,
//       });
//     }
//     return acc;
//   }, []);
// }

// console.log(mergeUsers(users, profiles));

//res

// [
//   { id: 1, name: "Ann", age: 20 },
//   { id: 2, name: "John", age: null },
//   { id: 3, name: "Kate", age: 25 },
// ]

//============ 10

// const emails = [
//   "a@gmail.com",
//   "b@gmail.com",
//   "a@gmail.com",
//   "c@gmail.com",
//   "b@gmail.com",
//   "d@gmail.com",
// ];

// function findDuplicate(emails) {
// const obj = emails.reduce((acc, email) => {
//   if (!acc[email]) {
//     acc[email] = 1;
//   } else {
//     acc[email] += 1;
//   }
//   return acc;
// }, {});
// let arr = [];
// for (const key of Object.keys(obj)) {
//   if (obj[key] > 1) {
//     arr.push(key);
//   }
// }
// return arr;
// ------ 2 варіант
//   const uniq = new Set();
//   const duplicate = new Set();
//   for (const email of emails) {
//     if (!uniq.has(email)) {
//       uniq.add(email);
//     } else {
//       duplicate.add(email);
//     }
//   }
//   return [...duplicate];
// }

// console.log(findDuplicate(emails));

// res
// ["a@gmail.com", "b@gmail.com"]

//============== 11

// const users = [
//   { id: 1, name: "Ann", role: "admin" },
//   { id: 2, name: "John", role: "user" },
//   { id: 3, name: "Kate", role: "user" },
//   { id: 4, name: "Mike", role: "moderator" },
//   { id: 5, name: "Bob", role: "admin" },
// ];

// function countRoles(users) {
//   return users.reduce((acc, user) => {
//     if (!acc[user.role]) {
//       acc[user.role] = 0;
//     }
//     acc[user.role] += 1;

//     return acc;
//   }, {});
// }

// console.log(countRoles(users));

//=============== 12

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// function invertObject(obj) {
//   const inverted = {};

//   for (const key of Object.keys(obj)) {
//     inverted[obj[key]] = key;
//   }

//   return inverted;
// }

// console.log(invertObject(obj));

// res
// {
//   1: "a",
//   2: "b",
//   3: "c",
// }

//============== 13

// const defaultSettings = {
//   theme: "light",
//   language: "en",
//   notifications: true,
//   fontSize: 16,
// };

// const userSettings = {
//   language: "uk",
//   fontSize: 18,
// };

// function mergeSettings(defaultSettings, userSettings) {
//   return {
//     ...defaultSettings,
//     ...userSettings,
//   };
// }

// console.log(mergeSettings(defaultSettings, userSettings));

// res
// {
//   theme: "light",
//   language: "uk",
//   notifications: true,
//   fontSize: 18,
// }

// ============ 14

// const keys = ["age", "email"];

// const user = {
//   id: 1,
//   name: "Ann",
//   age: 25,
//   email: "ann@gmail.com",
// };

// function omit(user, keys) {
//   // const result = { ...user };
//   const result = structuredClone(user);

//   keys.forEach((key) => {
//     delete result[key];
//   });

//   return result;
// }

// console.log(omit(user, keys));

// res
// {
//   id: 1,
//   name: "Ann",
// }

//============== 15

// const sentence = "JavaScript is an amazing programming language";

// function longestWord(sentence) {
//   const words = sentence.split(" ");

//   let longestWord = "";

//   for (const word of words) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(longestWord(sentence));

// res
// "programming"

//============== 16

// function compressString(string) {
//   let result = "";
//   let currentLetter = string[0];
//   let count = 1;
//   for (let i = 1; i < string.length; i += 1) {
//     if (currentLetter === string[i]) {
//       count += 1;
//     } else {
//       currentLetter = string[i];
//       result += string[i - 1] + count;
//       count = 1;
//     }
//   }
//   result += currentLetter + count;
//   return result;
// }

// console.log(compressString("aaabbcccc"));
// "a3b2c4"

// console.log(compressString("abcd"));
// // "a1b1c1d1"

// console.log(compressString("wwwwaaadex"));
// "w4a3d1e1x1"

//============ 17
// function isPalindrome(str) {
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(isPalindrome("level"));

//=========== 18

// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// console.log(calculate(2, 3, add)); // 5
// console.log(calculate(2, 3, multiply)); // 6
