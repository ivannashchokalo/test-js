// //============= 1

// const animals = [
//   { name: "Max", age: 3 },
//   { name: "Bella", age: 7 },
//   { name: "Charlie", age: 5 },
//   { name: "Lucy", age: 10 },
// ];

// function getAnimalsByAge(animals) {
//   return animals.filter(({ age }) => age > 5);
// }

// console.log(getAnimalsByAge(animals));

// //============= 2

// function getAnimalsNames(animals) {
//   return animals.map((animals) => animals.name);
// }

// console.log(getAnimalsNames(animals));

//================ 3

// const animals = [
//   { name: "Max", age: 3, category: "dog" },
//   { name: "Bella", age: 7, category: "cat" },
//   { name: "Charlie", age: 5, category: "dog" },
//   { name: "Lucy", age: 10, category: "cat" },
//   { name: "Rocky", age: 8, category: "dog" },
// ];

// function filterAnimals(animals, category, minAge) {
//   return animals
//     .filter((animal) => animal.category === category && animal.age > minAge)
//     .map(({ name }) => name);
// }

// console.log(filterAnimals(animals, "dog", 4));

//============== 4

// const orders = [
//   { id: 1, customer: "Anna", price: 120 },
//   { id: 2, customer: "Petr", price: 80 },
//   { id: 3, customer: "Anna", price: 200 },
//   { id: 4, customer: "Martin", price: 150 },
// ];

// function getTotalPrice(orders, name) {
//   //   let totalPrice = 0;

//   //   for (const order of orders) {
//   //     if (order.customer === name) {
//   //       totalPrice += order.price;
//   //     }
//   //   }

//   //   return totalPrice;
//   return orders.reduce((acc, order) => {
//     if (order.customer === name) {
//       acc += order.price;
//     }

//     return acc;
//   }, 0);
// }

// console.log(getTotalPrice(orders, "Anna"));

//============= 5

// const animals = [
//   { name: "Max", category: "dog", age: 3 },
//   { name: "Bella", category: "cat", age: 7 },
//   { name: "Charlie", category: "dog", age: 5 },
//   { name: "Lucy", category: "cat", age: 10 },
//   { name: "Rocky", category: "dog", age: 8 },
// ];

// function countAnimalsByCategory(animals) {
//   return animals.reduce((acc, animal) => {
//     if (!acc[animal.category]) {
//       acc[animal.category] = 0;
//     }
//     acc[animal.category] += 1;

//     return acc;
//   }, {});
// }

// function countAnimalsByCategory(animals) {
//   return animals.reduce((map, animal) => {
//     if (!map.has(animal.category)) {
//       map.set(animal.category, 1);
//     } else {
//       map.set(animal.category, map.get(animal.category) + 1);
//     }

//     return map;
//   }, new Map());
// }

// console.log(countAnimalsByCategory(animals));

//============== 6
// const users = [
//   { name: "Anna", age: 25, active: true },
//   { name: "Ivan", age: 17, active: false },
//   { name: "Maria", age: 32, active: true },
//   { name: "Oleh", age: 20, active: false },
//   { name: "Sofia", age: 28, active: true },
// ];

// function getUsersWithAge(users) {
//   return users.reduce((acc, user) => {
//     acc[user.name] = user.age;
//     return acc;
//   }, {});
// }

// console.log(getUsersWithAge(users));

//============== 7

// const orders = [
//   { id: 1, customer: "Anna", amount: 120, status: "completed" },
//   { id: 2, customer: "Ivan", amount: 80, status: "cancelled" },
//   { id: 3, customer: "Anna", amount: 200, status: "completed" },
//   { id: 4, customer: "Maria", amount: 150, status: "completed" },
//   { id: 5, customer: "Ivan", amount: 100, status: "completed" },
//   { id: 6, customer: "Anna", amount: 50, status: "cancelled" },
// ];

// function getTotalCompletedCustomerOrders(orders) {
//   const arr = {};

//   for (const order of orders) {
//     if (order.status === "completed") {
//       arr[order.customer] = arr[order.customer]
//         ? arr[order.customer] + order.amount
//         : order.amount;
//     }
//   }

//   return arr;
// }

// console.log(getTotalCompletedCustomerOrders(orders));

//============== 8

// const users = [
//   { id: 1, name: "Anna" },
//   { id: 2, name: "Ivan" },
//   { id: 3, name: "Maria" },
//   { id: 4, name: "Petr" },
// ];

// const orders = [
//   { id: 101, userId: 1, amount: 500 },
//   { id: 102, userId: 2, amount: 300 },
//   { id: 103, userId: 1, amount: 200 },
//   { id: 104, userId: 3, amount: 700 },
//   { id: 105, userId: 2, amount: 100 },
// ];

// function getTotalUserOrders(users, orders) {
//   const obj = orders.reduce((acc, order) => {
//     acc[order.userId] = acc[order.userId]
//       ? acc[order.userId] + order.amount
//       : order.amount;

//     return acc;
//   }, {});

//   console.log(obj);

//   const usersArr = [];

//   for (const user of users) {
//     const newUser = {};

//     newUser.id = user.id;
//     newUser.name = user.name;

//     if (obj[user.id]) {
//       newUser.total = obj[user.id];
//     } else {
//       newUser.total = 0;
//     }

//     usersArr.push(newUser);
//   }

//   return usersArr;
// }

// console.log(getTotalUserOrders(users, orders));

//=========== 9

// const products = [
//   { id: 1, name: "Phone", category: "electronics" },
//   { id: 2, name: "TV", category: "electronics" },
//   { id: 3, name: "Apple", category: "food" },
//   { id: 4, name: "Milk", category: "food" },
//   { id: 5, name: "Laptop", category: "electronics" },
// ];

// const stock = [
//   { productId: 1, quantity: 10 },
//   { productId: 3, quantity: 5 },
//   { productId: 5, quantity: 0 },
// ];

// function getAvailableProducts(products, stock) {
//   return products
//     .filter((product) => {
//       return stock.find(
//         ({ productId, quantity }) => productId === product.id && quantity > 0,
//       );
//     })
//     .map((product) => {
//       const obj = stock.find(
//         ({ productId, quantity }) => productId === product.id && quantity > 0,
//       );

//       return {
//         ...product,
//         quantity: obj.quantity,
//       };
//     });
// }

// console.log(getAvailableProducts(products, stock));

//=========== 10
// const text = "hello world";

// function getFirstQniqueChart(text) {
//   const arr = text.split("");
//   //   const seen = [];
//   //   const seen2 = [];
//   //   for (const el of arr) {
//   //     if (!seen.includes(el)) {
//   //       seen.push(el);
//   //     } else {
//   //       seen2.push(el);
//   //     }
//   //   }
//   //   const unique = seen.filter((el) => !seen2.find((element) => element == el));
//   //   return unique[0];
//   //---- 2

//   const seen = new Set();
//   const seen2 = new Set();

//   for (const el of arr) {
//     seen.has(el) ? seen2.add(el) : seen.add(el);
//   }

//   for (const el of [...seen]) {
//     if (!seen2.has(el)) return el;
//   }
// }

// console.log(getFirstQniqueChart(text));

//============== 11

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// function getSharedNumbers(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const shared = new Set();

//   for (const element of arr2) {
//     if (set1.has(element)) {
//       shared.add(element);
//     }
//   }

//   return [...shared];
// }

// console.log(getSharedNumbers(arr1, arr2));

//============== 12
// const orders = [
//   {
//     id: 1,
//     status: "completed",
//     customer: "Anna",
//     items: [
//       { name: "Book", price: 20, quantity: 2 },
//       { name: "Pen", price: 5, quantity: 3 },
//     ],
//   },
//   {
//     id: 2,
//     status: "cancelled",
//     customer: "Oleh",
//     items: [{ name: "Notebook", price: 15, quantity: 2 }],
//   },
//   {
//     id: 3,
//     status: "completed",
//     customer: "Maria",
//     items: [
//       { name: "Book", price: 20, quantity: 1 },
//       { name: "Bag", price: 50, quantity: 1 },
//     ],
//   },
// ];

// function calculateOrderSummary(orders) {
//   return orders
//     .filter(({ status }) => status === "completed")
//     .reduce(
//       (acc, order) => {
//         acc.totalOrders += 1;

//         let totalSpend = 0;
//         order.items.forEach(({ price, quantity }) => {
//           totalSpend += price * quantity;
//         });
//         acc.totalPrice += totalSpend;

//         acc.customers.push({ name: order.customer, totalSpend });

//         return acc;
//       },
//       { totalOrders: 0, totalPrice: 0, customers: [] },
//     );
// }

// console.log(calculateOrderSummary(orders));

//========== 12

// const products = [
//   { id: 1, name: "Laptop", category: "electronics" },
//   { id: 2, name: "Mouse", category: "electronics" },
//   { id: 3, name: "Book", category: "books" },
//   { id: 4, name: "Keyboard", category: "electronics" },
//   { id: 5, name: "Notebook", category: "books" },
//   { id: 6, name: "Chair", category: "furniture" },
//   { id: 7, name: "Mouse", category: "electronics" },
// ];

// function findDuplicate(products) {
//   const seen = new Set();
//   const duplicates = new Set();
//   const unique = [];
//   const groupedByCategory = {};

//   for (const { name, category } of products) {
//     if (!seen.has(name)) {
//       seen.add(name);
//     } else {
//       duplicates.add(name);
//     }

//     if (!groupedByCategory[category]) {
//       groupedByCategory[category] = [];
//     }
//     groupedByCategory[category].push(name);
//   }

//   for (const el of seen) {
//     if (!duplicates.has(el)) {
//       unique.push(el);
//     }
//   }

//   return {
//     uniqueNames: unique,
//     duplicates: [...duplicates],
//     groupedByCategory,
//   };
// }

// console.log(findDuplicate(products));

// {
//   uniqueNames: [
//     "Laptop",
//     "Mouse",
//     "Book",
//     "Keyboard",
//     "Notebook",
//     "Chair"
//   ],

//   duplicates: ["Mouse"],

//   groupedByCategory: {
//     electronics: ["Laptop", "Mouse", "Keyboard", "Mouse"],
//     books: ["Book", "Notebook"],
//     furniture: ["Chair"]
//   }
// }

//============ 13

// function createCounter(number) {
//   let counter = number;

//   return function (value) {
//     counter += 1;

//     if (value === "clear") {
//       counter = number;
//       return counter;
//     }
//     return counter;
//   };
// }

// const counter = createCounter(10);

// console.log(counter());
// console.log(counter());
// console.log(counter("clear"));
// console.log(counter());

//========== 14
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getInfo() {
//     return `${this.name}, ${this.email}`;
//   }
// }

// class Admin extends User {
//   static isAdmin(user) {
//     return user instanceof Admin;
//   }

//   constructor(name, email, role) {
//     super(name, email);
//     this.role = role;
//   }

//   getInfo() {
//     return ` ${super.getInfo()}, ${this.role}`;
//   }
// }

// const user = new User("Anna", "hdjhjd@hdjd.dkd");
// console.log(user.getInfo());

// const admin = new Admin("Ivan", "ivan@gmail.com", "moderator");
// console.log(admin.getInfo());

// console.log(Admin.isAdmin(admin));

//========= 15

// function getUser() {
//   return Promise.resolve({ id: 1, name: "Anna" });
// }

// async function fetchUser() {
//   try {
//     const user = await getUser();

//     return {
//       ...user,
//       isLoggedIn: true,
//     };
//   } catch {
//     return null;
//   }
// }

// console.log(fetchUser().then((res) => console.log(res)));

//============ 16

// const orders = [
//   { id: 1, customer: "Anna", total: 100 },
//   { id: 2, customer: "Ivan", total: 250 },
//   { id: 3, customer: "Anna", total: 150 },
//   { id: 4, customer: "Olena", total: 80 },
//   { id: 5, customer: "Ivan", total: 50 },
// ];

// function groupOrdersByCustomers(orders) {
//   return orders.reduce((acc, { customer, total }) => {
//     if (!acc[customer]) {
//       acc[customer] = {
//         total: 0,
//         count: 0,
//       };
//     }

//     acc[customer].total += total;
//     acc[customer].count += 1;

//     return acc;
//   }, {});
// }

// console.log(groupOrdersByCustomers(orders));

// {
//   Anna: { total: 250, count: 2 },
//   Ivan: { total: 300, count: 2 },
//   Olena: { total: 80, count: 1 }
// }
