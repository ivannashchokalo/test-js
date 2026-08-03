const refs = {
  formEl: document.querySelector(".form"),
  listEl: document.querySelector(".list"),
};

refs.formEl.addEventListener("submit", handleSubmit);
refs.listEl.addEventListener("click", handleDeleteTask);

function handleSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const text = form.elements.text.value.trim();

  if (!text) {
    return;
  }
  console.log(text);
  renderTask(text);

  form.reset();
}

function renderTask(task) {
  const markup = `<li><p>${task}</p>
<button type="button" class="delete-btn">Delete</button>
    </li>`;

  refs.listEl.insertAdjacentHTML("afterbegin", markup);
}

function handleDeleteTask(e) {
  //   if (e.nodeName !== "Button") return;

  const button = e.target.closest(".delete-btn");
  if (!button) return;

  const li = e.target.closest("li");
  li.remove();
}
