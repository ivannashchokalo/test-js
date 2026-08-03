//========= 1

// function getUsers() {
//   return fetch("https://books-backend.p.goit.global/books/category-list")
//     .then((res) => res.json())
//     .then((data) => data)
//     .catch((err) => console.log(err));
// }

// console.log(getUsers());

// function fetchCategories() {
//   return fetch("https://books-backend.p.goit.global/books/category-list").then(
//     (res) => res.json(),
//   );
// }

// fetchCategories().then((data) =>
//   data.forEach((el) => console.log(el.list_name)),
// );

// const listEl = document.querySelector(".categories");

// function renderList(cutegory) {
//   console.log(cutegory);
//   const markup = cutegory
//     .map(
//       (el) =>
//         `
//         <li>${el.list_name}</li>
//         `,
//     )
//     .join("");

//   listEl.innerHTML = markup;
// }

// fetchCategories().then((data) => renderList(data));

//========== 2

// function createCategory(category) {
//   return fetch("https://books-backend.p.goit.global/books/category-list", {
//     method: "POST",
//     body: JSON.stringify({ list_name: category }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
// }

// createCategory("new category")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//===============  3

// function fetchCategories() {
//   return fetch("https://books-backend.p.goit.global/books/category-list");
// }

// function getCtegoryNames() {
//   return fetchCategories()
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("Error");
//       }

//       return res.json();
//     })
//     .then((data) => data.map((obj) => obj.list_name))
//     .catch((err) => console.log(err));
// }

// getCtegoryNames().then((names) => console.log(names));

//============ 4

// async function fetchPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("error");
//   }
//   return res.json();
// }

// async function getPostTitles() {
//   try {
//     const data = await fetchPosts();
//     return data.map((obj) => obj.title);
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(await getPostTitles());

//============= 5

// async function getUsersByCity(city) {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!res.ok) {
//       throw new Error("Error");
//     }

//     const users = await res.json();

//     return users.filter((user) => user.address.city === city);
//   } catch (error) {
//     throw error;
//   }
// }

// const usersByCity = await getUsersByCity("South Christy");

// console.log(usersByCity);

//============= 6

// async function getUsersWithPosts() {
//   try {
//     const userRes = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!userRes.ok) {
//       throw new Error("Users error");
//     }

//     const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!postsRes.ok) {
//       throw new Error("Posts error");
//     }

//     const users = await userRes.json();
//     const posts = await postsRes.json();

//     return users.reduce((acc, user) => {
//       const userPosts = posts.filter((post) => post.userId === user.id);
//       acc.push({
//         name: user.name,
//         postCount: userPosts.length,
//       });

//       return acc;
//     }, []);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const result = await getUsersWithPosts();
// console.log(result);
