const users = [
  { id: 1, name: "Ivan", role: "Frontend" },
  { id: 2, name: "Anna", role: "Backend" },
  { id: 3, name: "Petro", role: "Fullstack" },
  { id: 4, name: "Olha", role: "Frontend" },
  { id: 5, name: "Oleh", role: "Backend" },
  { id: 6, name: "Maria", role: "Frontend" },
];

const refs = {
  searchInput: document.querySelector("#search"),
  listEl: document.querySelector(".list"),
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  renderList(users);
});

function renderList(users) {
  const markup = users
    .map(
      ({ id, name, role }) => ` <li id="${id}">
        <p>Name: ${name}</p>
        <p>Role: ${role}</p>
      </li>`,
    )
    .join("");
  refs.listEl.innerHTML = markup;
}

refs.searchInput.addEventListener("input", (e) => {
  const search = e.target.value.trim().toLowerCase();

  const filtered = users.filter(({ name }) =>
    name.toLowerCase().includes(search),
  );

  renderList(filtered);
});
