const refs = {
  formEl: document.querySelector(".form"),
  listEl: document.querySelector(".list"),
  errorEl: document.querySelector(".error"),
};

refs.formEl.addEventListener("submit", handleSubmit);
refs.listEl.addEventListener("click", handleDeleteCard);

function handleSubmit(e) {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const name = form.get("name").trim();
  const email = form.get("email").trim();
  const age = Number(form.get("age"));
  const role = form.get("role");
  const newsletter = form.get("newsletter");

  if (!name) {
    refs.errorEl.textContent = "Name should not be empty";
    return;
  }

  if (!email || !email.includes("@")) {
    refs.errorEl.textContent = "Invalide email";
    return;
  }

  if (!age || age <= 0) {
    refs.errorEl.textContent = "Enter corect age";
    return;
  }

  if (!role) {
    refs.errorEl.textContent = "Choose role";
    return;
  }

  refs.errorEl.textContent = "";
  renderList({
    name,
    email,
    age,
    role,
    newsletter,
  });

  e.currentTarget.reset();
}

function renderList({ name, email, age, role, newsletter }) {
  const markup = `
    <li>
      <div>
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <p>Role: ${role}</p>
        <p>Newsletter: ${newsletter ? "Yes" : "No"}</p>
      </div>
      <button type='button'>Delete</button>
    </li>`;

  refs.listEl.insertAdjacentHTML("afterbegin", markup);
}

function handleDeleteCard(e) {
  const button = e.target.closest("button");
  if (!button) return;

  const li = button.closest("li");
  li.remove();
}
