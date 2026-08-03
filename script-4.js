//======= 1

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 5, 7];

// function getUniqueNumbers(numbers) {
//   const set1 = new Set();
//   const set2 = new Set();
//   let uniqe = [];
//   numbers.forEach((num) => {
//     if (!set1.has(num)) {
//       set1.add(num);
//     } else {
//       set2.add(num);
//     }
//   });
//   numbers.forEach((num) => {
//     if (!set2.has(num)) {
//       uniqe.push(num);
//     }
//   });
//   return uniqe;
//---- 2 вар
//   let unuque = [];
//   let notUnique = [];
//   let res = [];
//   numbers.forEach((num) => {
//     if (!unuque.includes(num)) {
//       unuque.push(num);
//     } else {
//       notUnique.push(num);
//     }
//   });
//   numbers.forEach((num) => {
//     if (!notUnique.includes(num)) res.push(num);
//   });
//   return res;
// }

// console.log(getUniqueNumbers(arr));

// res
// [3, 4, 6, 7]

//========= 2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7];

// function getCommonNumbers(arr1, arr2) {
//   const set1 = new Set(arr1);
//   let common = [];

//   arr2.forEach((num) => {
//     if (set1.has(num)) {
//       common.push(num);
//     }
//   });

//   return common;
// }

// console.log(getCommonNumbers(arr1, arr2));

//=========== 3

// function hasDuplicates(arr) {
//   const uniquArr = [...new Set(arr)];

//   return arr.length > uniquArr.length;
// }

// console.log(hasDuplicates([1, 2, 3])); // false
// console.log(hasDuplicates([1, 2, 3, 2]));
// console.log(hasDuplicates([]));
// console.log(hasDuplicates([5]));

//=========== 4

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7];

// function getUniqueFromArr(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }

// console.log(getUniqueFromArr(arr1, arr2));

//============ 5

// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function countElement(arr) {
//   return arr.reduce((acc, el) => {
//     if (!acc.has(el)) {
//       acc.set(el, 1);
//     } else {
//       acc.set(el, acc.get(el) + 1);
//     }
//     return acc;
//   }, new Map());
// 2 вар
//   const map = new Map();
//   for (const el of arr) {
//     if (!map.has(el)) {
//       map.set(el, 1);
//     } else {
//       map.set(el, map.get(el) + 1);
//     }
//   }
//   return map;
// }

// console.log(countElement(arr));

//========= 6
// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function findDuplicate(rr) {
// SET
//   const seen = new Set();
//   const duplicates = new Set();

//   arr.forEach((el) => {
//     if (!seen.has(el)) {
//       seen.add(el);
//     } else {
//       duplicates.add(el);
//     }
//   });

//MAP

//   const map = new Map();
//   const duplicates = [];

//   arr.forEach((el) => {
//     if (!map.has(el)) {
//       map.set(el, 1);
//     } else {
//       map.set(el, map.get(el) + 1);
//     }
//   });

//   for (const key of map.keys()) {
//     if (map.get(key) > 1) {
//       duplicates.push(key);
//     }
//   }

//   return duplicates;
// }

// console.log(findDuplicate(arr));

//======== 7

// const arr = [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple",
//   "orange",
//   "orange",
//   "orange",
// ];

// function findMostFrequent(arr) {
//   const count = new Map();

//   for (const el of arr) {
//     count.has(el) ? count.set(el, count.get(el) + 1) : count.set(el, 1);
//   }

//   //   const values = count.values();
//   //   const frequentValueMap = Math.max(...values);

//   let maxValue = 0;
//   let mostFreqent = "";

//   for (const [key, value] of count) {
//     // if (value === frequentValueMap) return key;

//     if (value > maxValue) {
//       maxValue = value;
//       mostFreqent = key;
//     }
//   }

//   return mostFreqent;
// }

// console.log(findMostFrequent(arr));

//======== 8

// const users = [
//   { name: "Anna", city: "Kyiv" },
//   { name: "Ivan", city: "Lviv" },
//   { name: "Petro", city: "Kyiv" },
//   { name: "Olha", city: "Odesa" },
//   { name: "Maria", city: "Lviv" },
// ];

// function groupByCity(users) {
//   const grouped = new Map();

//   for (const user of users) {
//     if (!grouped.has(user.city)) {
//       grouped.set(user.city, []);
//     }
//     const value = grouped.get(user.city);
//     value.push(user.name);
//   }

//   return grouped;
// }

// console.log(groupByCity(users));

//======== 9

// const orders = [
//   { user: "Anna", amount: 120 },
//   { user: "Ivan", amount: 80 },
//   { user: "Anna", amount: 50 },
//   { user: "Olha", amount: 200 },
//   { user: "Ivan", amount: 20 },
// ];

// function countOrders(orders) {
//   const counted = new Map();

//   for (const { user, amount } of orders) {
//     if (!counted.has(user)) {
//       counted.set(user, 0);
//     }
//     counted.set(user, counted.get(user) + amount);
//   }
//   return counted;
// }

// console.log(countOrders(orders));

//========== 10

// const users = [
//   { id: 101, name: "Anna" },
//   { id: 102, name: "Ivan" },
//   { id: 103, name: "Olha" },
//   { id: 104, name: "Petro" },
// ];

// function findUserById(users, id) {
//   for (const user of users) {
//     if (user.id === id) {
//       return user;
//     }
//   }
// }

// console.log(findUserById(users, 103));

// // ---- 2 вар

// const mapUsers = new Map();

// for (const user of users) {
//   mapUsers.set(user.id, user);
// }

// console.log(mapUsers.get(103));

//========== 11

// const arr = [5, 2, 7, 3, 2, 8, 5];

// function findFirstDuplicate(arr) {
//   const unique = new Set();

//   for (const el of arr) {
//     if (!unique.has(el)) {
//       unique.add(el);
//     } else {
//       return el;
//     }
//   }
// }

// console.log(findFirstDuplicate(arr));

//========== 12

const nums = [2, 7, 11, 15];
const target = 9;

// function findNumbers(numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i += 1) {
//     for (let j = i + 1; j < numbers.length; j += 1) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(findNumbers(nums, target));

//------ 2 вар з map

// function twoSum(numbers, target) {
//   const seen = new Map();

//   for (let i = 0; i < numbers.length; i++) {
//     const current = numbers[i];
//     const complement = target - current;

//     if (seen.has(complement)) {
//       return [seen.get(complement), i];
//     }

//     seen.set(current, i);
//   }

//   return null;
// }

// console.log(twoSum(nums, target));

//============  класи ========

//======== 13

// class Counter {
//   constructor(value) {
//     this.value = value;
//   }

//   increment() {
//     this.value += 1;
//   }
//   decrement() {
//     this.value -= 1;
//   }
// }

// //---- рез
// const counter = new Counter(10);
// console.log(counter.value); // 10

// counter.increment();
// counter.increment();

// console.log(counter.value); // 12

// counter.decrement();

// console.log(counter.value); // 11

//============== 14

// class Rectangle {
//   constructor(a, b) {
//     this.width = a;
//     this.height = b;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }

// //res

// const rect = new Rectangle(5, 3);

// console.log(rect.getArea()); // 15

//================ 15
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// //-

// class Cat extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }
// }

// //res
// const cat = new Cat("Tom", "black");

// console.log(cat.name); // Tom
// console.log(cat.color); // black

//========== 16

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// const animal = new Animal("ddd");
// animal.speak();

// //---

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// // res

// const dog = new Dog("Rex");

// dog.speak(); //Rex barks

//============= 17

// class Calculator {
//   static multiply(a, b) {
//     return a * b;
//   }
// }

// // res
// console.log(Calculator.multiply(3, 4)); // 12

//============ 18

// class Book {
//   #pages;

//   constructor(name, author, pages) {
//     this.name = name;
//     this.author = author;
//     this.pages = pages;
//     this.showBook1 = function () {
//       return "Hello";
//     };
//   }

//   get pages() {
//     return this.#pages;
//   }
//   set pages(npages) {
//     if (npages <= 0) {
//       return "Pages should be under 0";
//     }
//     this.#pages = npages;
//   }
//   showBook() {
//     return `${this.name} by ${this.author} (${this.#pages})`;
//   }
// }

// const book = new Book("Harry Potter", "Author", 888);

// console.log(book);

// console.log((book.pages = 555));

//============ 19

// class Car {
//   constructor(model, year) {
//     this.model = model;
//     this.year = year;
//   }

//   showCar() {
//     console.log(this.model, this.year);
//   }
// }

// const bmw = new Car("BMW", 2022);

// console.log(bmw);
// bmw.showCar();

// class Jeep extends Car {
//   constructor(model, year, seats) {
//     super(model, year);
//     this.seats = seats;
//   }

//   showCar() {
//     super.showCar();
//     console.log(this.seats);
//   }
// }

// const rangeRover = new Jeep("Range Rover", 2025, 7);

// console.log(rangeRover);
// rangeRover.showCar();

//========== descr

// const user = {
//   name: "Ivan",
// };

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// const car = {};
// Object.defineProperty(car, "model", {
//   value: "bmw",
//   configurable: true,
// });
// console.log(car);

// console.log(Object.getOwnPropertyDescriptor(car, "model"));

// Object.defineProperty(car, "model", {
//   writable: true,
//   enumerable: true,
// });

// car.model = "audi";
// console.log(car);

//======== рекурсія

// function sum(n) {
//   if (n === 0) {
//     return 0;
//   }

//   return n + sum(n - 1);
// }

// // res
// console.log(sum(5)); // 15

//============ 23

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// // res

// console.log(factorial(5)); // 120

//============ 24

// function reverse(word) {
//   if (word.length === 1) {
//     return word[0];
//   }
//   return word[word.length - 1] + reverse(word.slice(0, word.length - 1));
// }

// // res
// console.log(reverse("hello"));
// // "olleh"

// reverse("abc"); // "cba"

// reverse("a"); // "a"

//========== 25

// function sumArray(arr) {
//   //   const arrfl = arr.flat(Infinity);

//   //   let sum = 0;

//   //   for (const el of arrfl) {
//   //     sum += el;
//   //   }
//   //   return sum;

//   //------ 2 вар

//   let sum = 0;

//   for (const el of arr) {
//     if (Array.isArray(el)) {
//       sum += sumArray(el);
//     } else {
//       sum += el;
//     }
//   }

//   return sum;
// }

// // res

// console.log(sumArray([1, 2, 3]));
// // 6
// console.log(sumArray([[1], [2], [3]])); // 6

// console.log(sumArray([1, [2, [3, [4]]]])); // 10

//=========== 26

// function countKeys(obj) {
//   let sum = 0;

//   //   for (const value of Object.values(obj)) {
//   //     if (typeof value === "number") {
//   //       sum += value;
//   //     } else {
//   //       sum += countKeys(value);
//   //     }
//   //   }

//   //-------- 2

//   for (const key of Object.keys(obj)) {
//     sum += 1;
//     if (typeof obj[key] !== "number") {
//       sum += countKeys(obj[key]);
//     }
//   }
//   return sum;
// }

// console.log(
//   countKeys({
//     a: 1,
//     b: {
//       c: 2,
//       d: {
//         e: 3,
//       },
//     },
//   }),
// );

//============ 26

// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// console.log(multiply(2)(5)); // 10

//========= 27

// function calculate(a, b, c) {
//   return a + b * c;
// }

// function calculate(a) {
//   return function (b) {
//     return function (c) {
//       return a + b * c;
//     };
//   };
// }

// console.log(calculate(2)(3)(4)); // 14)

//============ 28

// function greet(greeting, name) {
//   return `${greeting}, ${name}!`;
// }

// function greet(greeting) {
//   return function (name) {
//     return `${greeting}, ${name}`;
//   };
// }

// const sayHello = greet("Hello");

// console.log(sayHello("Ivan"));

//========= дебаунс

//======================= 29

// function debounce(fn, ms) {
//   let id;
//   return function () {
//     clearTimeout(id);
//     id = setTimeout(fn, ms);
//   };
// }

// const debounced = debounce(() => {
//   console.log("Hello");
// }, 2000);

// debounced();

//=============== 30

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// function debounce(fn, ms) {
//   let id;
//   return function (name) {
//     clearTimeout(id);
//     id = setTimeout(() => fn(name), ms);
//   };
// }

// const debounced = debounce(sayHello, 1000);

// debounced("Ivan");
// debounced("Petro");
// debounced("Anna");

//============= 31

// function throttle(fn, ms) {
//   let isWaiting = false;

//   return function () {
//     if (!isWaiting) {
//       setTimeout(fn, ms);
//     }
//     isWaiting = true;
//   };
// }

// const throttled = throttle(() => {
//   console.log("Hello");
// }, 1000);

// throttled();

//========== memo 32
// function memoize(fn) {
//   const cache = {};

//   return function (n) {
//     if (cache[n]) {
//       return cache[n];
//     }

//     const result = fn(n);
//     cache[n] = result;

//     return result;
//   };
// }

// function square(n) {
//   console.log("Calculating...");
//   return n * n;
// }

// const memoSquare = memoize(square);

// console.log(memoSquare(5)); // Calculating... 25
// console.log(memoSquare(5)); // 25
// console.log(memoSquare(5)); // 25
