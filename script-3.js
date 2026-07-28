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

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
}

async function getPostTitles() {
  try {
    const data = await fetchPosts();
    return data.map((obj) => obj.title);
  } catch (error) {
    console.log(error);
  }
}

console.log(await getPostTitles());
